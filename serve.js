const http = require('http');
const fs = require('fs');
const path = require('path');

let scrapeInstagram;
try {
  scrapeInstagram = require('./scripts/fetch_instagram').scrapeInstagram;
} catch (e) {
  console.warn('Scraper module load note:', e.message);
}

const PORT = 3000;
const ROOT = __dirname;
const DATA_FILE = path.join(ROOT, 'assets', 'data', 'instagram_posts.json');
let isScrapingInProgress = false;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer(async (req, res) => {
  const urlParts = req.url.split('?');
  const reqPath = decodeURIComponent(urlParts[0]);

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // API 1: Get cached live posts
  if (reqPath === '/api/instagram/posts') {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(data);
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end('[]');
    }
    return;
  }

  // API 2: Trigger Live Scrape on-demand
  if (reqPath === '/api/instagram/sync') {
    if (isScrapingInProgress) {
      res.writeHead(429, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ status: 'in_progress', message: 'Sync already running...' }));
      return;
    }

    if (!scrapeInstagram) {
      res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ status: 'error', message: 'Scraper module not loaded' }));
      return;
    }

    isScrapingInProgress = true;
    try {
      console.log('🔄 Live sync requested via API...');
      const posts = await scrapeInstagram();
      isScrapingInProgress = false;
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ status: 'success', posts: posts }));
    } catch (err) {
      isScrapingInProgress = false;
      res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ status: 'error', message: err.message }));
    }
    return;
  }

  // Static file serving
  let targetPath = (reqPath === '/' || reqPath === '') ? '/index.html' : reqPath;
  const filePath = path.join(ROOT, targetPath);

  // Security check to avoid directory traversal
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Access Denied');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`TVK Jothi Nagar Portal is running at http://localhost:${PORT}`);
});
