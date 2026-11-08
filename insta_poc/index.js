/**
 * ============================================================================
 * INSTAGRAM TOP 5 POSTS SCRAPER & DOWNLOADER - STANDALONE POC
 * ============================================================================
 * This script runs independently to:
 * 1. Open Microsoft Edge in headless mode (bypassing Instagram bot checks)
 * 2. Visit any target Instagram page (Default: https://www.instagram.com/jodhinagartvk/)
 * 3. Scroll down slightly to trigger lazy loading of row 2 (including Post 5)
 * 4. Extract top 5 posts (supporting both /p/ photos and /reel/ videos)
 * 5. Download the authentic full-resolution images into insta_poc/downloads/
 * 6. Save structured metadata into insta_poc/posts.json
 * ============================================================================
 */

const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const os = require('os');

// ================= CONFIGURATION =================
const CONFIG = {
  // Target Instagram account
  username: 'jodhinagartvk',
  targetUrl: 'https://www.instagram.com/jodhinagartvk/',

  // Path to Microsoft Edge binary on Windows
  edgePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',

  // Number of posts to scrape
  postCount: 5,

  // Output folders
  downloadDir: path.join(__dirname, 'downloads'),
  outputJsonFile: path.join(__dirname, 'posts.json'),

  // Browser viewport & timeout
  viewport: { width: 1280, height: 900 },
  timeoutMs: 35000
};

// Ensure download directory exists
if (!fs.existsSync(CONFIG.downloadDir)) {
  fs.mkdirSync(CONFIG.downloadDir, { recursive: true });
}

/**
 * Downloads a file from an external URL (with redirect support and browser headers)
 * and saves it directly to local disk.
 */
function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    // If image is a base64 data URL
    if (url.startsWith('data:')) {
      const base64Data = url.split(',')[1];
      fs.writeFileSync(destPath, Buffer.from(base64Data, 'base64'));
      return resolve(destPath);
    }

    const client = url.startsWith('https') ? https : http;
    client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
        'Referer': 'https://www.instagram.com/'
      }
    }, (res) => {
      // Follow 301 / 302 redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location, destPath).then(resolve).catch(reject);
      }

      if (res.statusCode !== 200) {
        return reject(new Error(`Download failed with HTTP ${res.statusCode}`));
      }

      const stream = fs.createWriteStream(destPath);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        resolve(destPath);
      });
      stream.on('error', reject);
    }).on('error', reject);
  });
}

/**
 * Main POC execution function
 */
async function runInstagramPOC() {
  console.log('\n======================================================');
  console.log('🚀 INSTAGRAM SCRAPER POC: STARTING');
  console.log('======================================================');
  console.log(`📡 Target URL: ${CONFIG.targetUrl}`);
  console.log(`📁 Download directory: ${CONFIG.downloadDir}`);

  let browser;
  // Unique temp profile dir to avoid collision with running Edge browser
  const tempProfileDir = path.join(os.tmpdir(), `insta_poc_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`);

  try {
    console.log('\n[1/5] 🌐 Launching Microsoft Edge in headless mode...');
    browser = await puppeteer.launch({
      executablePath: CONFIG.edgePath,
      headless: 'new',
      userDataDir: tempProfileDir,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-blink-features=AutomationControlled', // Hides automated bot flag
        `--window-size=${CONFIG.viewport.width},${CONFIG.viewport.height}`
      ]
    });

    const page = await browser.newPage();
    await page.setViewport(CONFIG.viewport);
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0'
    );

    console.log(`[2/5] 📡 Navigating to ${CONFIG.targetUrl}...`);
    await page.goto(CONFIG.targetUrl, { waitUntil: 'networkidle2', timeout: CONFIG.timeoutMs });

    // Wait 2.5 seconds for Instagram's virtual DOM to mount
    await new Promise(r => setTimeout(r, 2500));

    // Dismiss login modal / cookie banner if presented
    try {
      const closeBtn = await page.$('div[role="dialog"] button, svg[aria-label="Close"]');
      if (closeBtn) {
        await closeBtn.click();
        console.log('      Dismissed Instagram overlay dialog.');
      }
    } catch (_) {}

    // Scroll down 450px to trigger lazy loading of row 2 (which contains Post 5!)
    console.log('[3/5] 📜 Scrolling page down slightly to trigger lazy-loaded images (Post 5)...');
    await page.evaluate(() => window.scrollBy(0, 450));
    await new Promise(r => setTimeout(r, 2000));

    // Extract top 5 post links and high-res image URLs
    console.log('[4/5] 🔍 Extracting top 5 post cards from DOM...');
    const rawPosts = await page.evaluate((maxCount) => {
      const results = [];
      // Finds both /p/ (photo/carousel) and /reel/ (video) links
      const links = Array.from(document.querySelectorAll('a[href*="/p/"], a[href*="/reel/"]'));
      
      const seen = new Set();
      for (const link of links) {
        const href = link.getAttribute('href');
        if (!href || seen.has(href)) continue;
        seen.add(href);

        const img = link.querySelector('img');
        // currentSrc gives the actual high-resolution image loaded by the browser
        const imgUrl = img ? (img.currentSrc || img.getAttribute('src')) : null;
        const altText = img ? (img.getAttribute('alt') || '') : '';

        // Extract Instagram shortcode
        const match = href.match(/\/(?:p|reel)\/([A-Za-z0-9_-]+)/);
        const shortcode = match ? match[1] : '';
        const isReel = href.includes('/reel/');

        if (imgUrl) {
          results.push({
            url: href.startsWith('http') ? href : `https://www.instagram.com${href}`,
            imageUrl: imgUrl,
            caption: altText,
            shortcode: shortcode,
            isReel: isReel
          });
        }

        if (results.length >= maxCount) break;
      }
      return results;
    }, CONFIG.postCount);

    console.log(`      Found ${rawPosts.length} posts!`);

    if (rawPosts.length === 0) {
      throw new Error('No posts found in the Instagram page DOM.');
    }

    // Step 5: Download images and build final metadata
    console.log('[5/5] ⬇️ Downloading images locally...');
    const finalPosts = [];

    for (let i = 0; i < rawPosts.length; i++) {
      const p = rawPosts[i];
      const fileName = `post_${i + 1}.jpg`;
      const localFilePath = path.join(CONFIG.downloadDir, fileName);

      console.log(`      Downloading [${i + 1}/${rawPosts.length}] ${p.shortcode} (${p.isReel ? 'Reel' : 'Post'})...`);
      try {
        await downloadImage(p.imageUrl, localFilePath);
        console.log(`      ✅ Saved to: downloads/${fileName}`);
      } catch (err) {
        console.error(`      ❌ Failed to download post ${i + 1}:`, err.message);
      }

      finalPosts.push({
        rank: i + 1,
        shortcode: p.shortcode,
        isReel: p.isReel,
        url: p.url,
        localImage: `downloads/${fileName}`,
        originalCdnUrl: p.imageUrl,
        caption: p.caption || 'Instagram Post',
        scrapedAt: new Date().toISOString()
      });
    }

    // Save metadata JSON
    fs.writeFileSync(CONFIG.outputJsonFile, JSON.stringify(finalPosts, null, 2), 'utf8');
    console.log(`\n🎉 Metadata JSON successfully written to: ${CONFIG.outputJsonFile}`);

    console.log('\n======================================================');
    console.log('✅ INSTAGRAM POC COMPLETED SUCCESSFULLY!');
    console.log('======================================================');
    console.log('Summary of Scraped Posts:');
    finalPosts.forEach(p => {
      console.log(` #${p.rank} [${p.isReel ? 'REEL' : 'POST'}] ${p.shortcode} -> ${p.localImage}`);
    });

    await browser.close();
    try { fs.rmSync(tempProfileDir, { recursive: true, force: true }); } catch (_) {}
    return finalPosts;

  } catch (err) {
    if (browser) await browser.close();
    try { fs.rmSync(tempProfileDir, { recursive: true, force: true }); } catch (_) {}
    console.error('\n❌ POC Error:', err.message);
    throw err;
  }
}

// Auto-run if executed directly via `node index.js`
if (require.main === module) {
  runInstagramPOC()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}

module.exports = { runInstagramPOC };

