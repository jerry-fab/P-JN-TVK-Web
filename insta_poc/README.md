# Instagram Top 5 Posts Scraper - Standalone POC

This is an independent Proof of Concept (POC) demonstrating how to automate fetching and downloading top 5 posts from any public Instagram profile using Microsoft Edge in headless mode.

---

## 📁 Folder Structure

```text
insta_poc/
  ├── index.js          # The complete standalone scraper & downloader script
  ├── package.json      # Dependencies specification
  ├── README.md         # Instructions and documentation
  ├── downloads/        # Output directory for saved JPEG post images (post_1.jpg - post_5.jpg)
  └── posts.json        # Output structured JSON metadata
```

---

## 🚀 How to Run the POC

### Option 1: Run directly (Uses already installed puppeteer-core)
From the project root:
```powershell
node insta_poc/index.js
```

Or navigate into the folder:
```powershell
cd insta_poc
node index.js
```

---

## ⚙️ How It Works (The 5 Core Steps)

1. **Anti-Bot Headless Edge Launch:**
   - Launches your system's installed Microsoft Edge (`msedge.exe`) with `--disable-blink-features=AutomationControlled` to hide automated bot flags.
2. **Dynamic Rendering Wait:**
   - Navigates to `https://www.instagram.com/jodhinagartvk/` and waits for React virtual DOM rendering.
   - Automatically closes login popup dialogs if presented.
3. **Lazy-Load Scroll (For Post 5):**
   - Scrolls down 450px to trigger Instagram's `IntersectionObserver` so that the 5th post in the second row downloads its high-resolution image URL.
4. **DOM Extraction:**
   - Finds both `/p/` (standard photo) and `/reel/` (video) post cards.
   - Reads `img.currentSrc` to capture the true high-resolution CDN image URL.
   - Extracts shortcodes and captions.
5. **Direct Streaming Download:**
   - Downloads the high-resolution binary JPEG data directly into `insta_poc/downloads/post_1.jpg` ... `post_5.jpg` with `Referer: https://www.instagram.com/` headers.
   - Writes `posts.json` with URLs, shortcodes, and timestamps.

---

## 🔧 How to Customize

Open `insta_poc/index.js` and edit the `CONFIG` object at the top:

```javascript
const CONFIG = {
  // Change to any public Instagram handle
  username: 'jodhinagartvk',
  targetUrl: 'https://www.instagram.com/jodhinagartvk/',

  // Change number of posts (default: 5)
  postCount: 5,

  // Change download path if needed
  downloadDir: path.join(__dirname, 'downloads'),
  outputJsonFile: path.join(__dirname, 'posts.json')
};
```

