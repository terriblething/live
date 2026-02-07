# Terriblething Band Website

A professional band website with Electronic Press Kit (EPK) for Terriblething.

## 🌐 Live Site Structure

- **Home** - Landing page with hero section and social links
- **Shows** - Upcoming and past show listings
- **Listen** - Music streaming links and embedded players
- **EPK** - Complete electronic press kit with bio, photos, press quotes, and technical rider

## 📁 Files Included

- `index.html` - Home page
- `shows.html` - Shows page
- `listen.html` - Listen page with embedded players
- `epk.html` - Electronic Press Kit page
- `style.css` - All styling
- `script.js` - JavaScript for mobile menu and interactions
- `README.md` - This file

## 🚀 How to Deploy to GitHub Pages

### Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com)
2. Sign up for a free account if you don't have one

### Step 2: Create a New Repository
1. Click the "+" icon in the top right and select "New repository"
2. Name it: `terriblething-website` (or any name you prefer)
3. Make it **Public**
4. Click "Create repository"

### Step 3: Upload Your Files
You have two options:

#### Option A: Upload via GitHub Website (Easiest)
1. On your new repository page, click "uploading an existing file"
2. Drag and drop all the website files (index.html, shows.html, listen.html, epk.html, style.css, script.js)
3. Scroll down and click "Commit changes"

#### Option B: Use GitHub Desktop (Recommended for future updates)
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Clone your repository
3. Copy all website files into the cloned folder
4. In GitHub Desktop, commit and push the changes

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait 2-3 minutes for deployment

### Step 5: Access Your Website
Your site will be live at:
```
https://YOUR-USERNAME.github.io/terriblething-website/
```

Replace `YOUR-USERNAME` with your actual GitHub username.

## ✏️ Customizing Your Website

### Adding Your Photos
1. Create an `images` folder in your repository
2. Upload your photos (recommended: high-resolution JPGs)
3. Update the HTML files to point to your images:

Replace:
```html
<div class="image-placeholder">
    <p>Band Photo</p>
</div>
```

With:
```html
<img src="images/your-photo.jpg" alt="Terriblething band photo">
```

### Adding Show Dates
Edit `shows.html` and duplicate this structure for each show:
```html
<div class="show-item">
    <div class="show-date">
        <span class="month">MAR</span>
        <span class="day">15</span>
    </div>
    <div class="show-details">
        <h3 class="show-venue">Venue Name</h3>
        <p class="show-location">City, Province</p>
        <p class="show-info">Details • Time • Price</p>
    </div>
    <div class="show-actions">
        <a href="#" class="btn btn-small">Tickets</a>
    </div>
</div>
```

### Embedding Spotify
In `listen.html`, find the Spotify embed section and:
1. Go to Spotify and find your artist/album page
2. Click the "..." menu → Share → Embed album/track
3. Copy the iframe code
4. Replace the existing iframe in `listen.html`

### Embedding YouTube Videos
In `listen.html`, find the YouTube section:
1. Go to your YouTube video
2. Click "Share" → "Embed"
3. Copy the iframe code
4. Replace `VIDEO_ID_1`, `VIDEO_ID_2` etc. with your actual video IDs
   - Video ID is the part after `v=` in the YouTube URL
   - Example: `https://www.youtube.com/watch?v=dQw4w9WgXcQ` → ID is `dQw4w9WgXcQ`

### Updating Band Bio
Edit `epk.html` and find the Biography section. Replace the placeholder text with your actual band story.

### Adding Press Quotes
In `epk.html`, find the Press & Reviews section and update:
```html
<blockquote class="quote">
    <p>"Your actual review quote here"</p>
    <cite>— Publication Name</cite>
</blockquote>
```

### Technical Rider
Edit the Technical Rider section in `epk.html` with your:
- Band lineup and instruments
- Input list (channels needed)
- Backline requirements
- Sound requirements
- Hospitality needs

### Updating Contact Information
In `epk.html`, update the Contact section with your actual email addresses.

## 🎨 Customizing Colors

Edit `style.css` at the top to change the color scheme:
```css
:root {
    --primary-color: #1a1a1a;      /* Main dark color */
    --secondary-color: #ff6b6b;    /* Accent red */
    --accent-color: #4ecdc4;       /* Teal accent */
}
```

## 📱 Features

- ✅ Fully responsive (works on mobile, tablet, desktop)
- ✅ Mobile-friendly navigation
- ✅ Embedded music players (Spotify, Bandcamp)
- ✅ YouTube video embeds
- ✅ Complete EPK with downloadable press materials
- ✅ Social media integration
- ✅ Professional technical rider section

## 🆓 Cost Breakdown

- GitHub Pages hosting: **FREE**
- Custom domain (optional): ~$10-15/year from providers like Namecheap or Google Domains

## 🔄 Making Updates

After initial deployment, to update your site:
1. Edit the files on your computer
2. Go to your GitHub repository
3. Click "Add file" → "Upload files"
4. Drag your updated files
5. Commit changes
6. Site updates automatically in 1-2 minutes

## 💡 Tips

1. **Test locally first**: Open `index.html` in your browser to preview changes before uploading
2. **Optimize images**: Compress photos before uploading (use tools like TinyPNG)
3. **Regular updates**: Keep your show dates and news current
4. **SEO**: Update page titles in each HTML file's `<title>` tag for better search results

## 🆘 Troubleshooting

**Site not loading?**
- Wait 5 minutes after enabling Pages
- Check that you uploaded all files
- Verify the branch is set to "main" in Settings > Pages

**Photos not showing?**
- Check file paths are correct
- Ensure image filenames match exactly (case-sensitive)
- Verify images are in the repository

**Layout looks broken?**
- Make sure `style.css` is in the same folder as your HTML files
- Check browser console (F12) for errors

## 📞 Need Help?

If you run into issues, you can:
1. Check [GitHub Pages documentation](https://docs.github.com/pages)
2. Ask questions on GitHub Community Forums
3. Use AI assistants to help debug specific issues

---

**Website created for Terriblething - Victoria, BC**
Rock/Pop • A sonic smoothie that keeps you on your toes
