const https = require('https');

function fetchUrl(url) {
  https.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
    }
  }, res => {
    console.log(url, 'Status:', res.statusCode);
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      let nextUrl = res.headers.location;
      if (!nextUrl.startsWith('http')) {
        nextUrl = 'https://www.picuki.com' + nextUrl;
      }
      fetchUrl(nextUrl);
    } else {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log('Final HTML length:', data.length);
        const imgRegex = /class="post-image"[^>]*src="([^"]+)"/g;
        let match;
        const images = [];
        while ((match = imgRegex.exec(data)) !== null) {
          images.push(match[1]);
        }
        console.log('Images found:', images.length);
        if (images.length > 0) {
          console.log('Sample image URL:', images[0]);
        }
      });
    }
  }).on('error', err => console.error(err));
}

fetchUrl('https://www.picuki.com/profile/jodhinagartvk');

