# Domain Connection Guide for Guesture_Haven

## To Connect Your Domain

### Option 1: Using a Hosting Service (Recommended)

**Recommended hosting platforms:**
- **Vercel** (Free, fast, optimized for static sites) - Recommended
- **Netlify** (Free tier available)
- **GitHub Pages** (Free)
- **AWS S3 + CloudFront** (Pay-as-you-go)

### Steps for Vercel (Easiest):

1. **Create a Vercel account** at https://vercel.com
2. **Import this repository:**
   - Click "New Project"
   - Select "Import Git Repository" or upload files
   - Vercel auto-detects it as a static site
3. **Connect your domain:**
   - In project settings, go to "Domains"
   - Add your domain (e.g., guesturehaven.com)
   - Vercel provides DNS records to add
4. **Update DNS at your registrar:**
   - Log in to your domain registrar (GoDaddy, Namecheap, etc.)
   - Go to DNS settings
   - Add Vercel's nameservers or CNAME records
   - Wait 24-48 hours for propagation

### Steps for Netlify:

1. **Create a Netlify account** at https://netlify.com
2. **Deploy:**
   - Drag and drop your project folder OR
   - Connect your Git repository
3. **Connect domain:**
   - In project settings, click "Domain management"
   - Add your custom domain
   - Add Netlify's DNS records at your registrar

### Option 2: Traditional Web Hosting

**If you have existing hosting:**

1. **Upload files via FTP/SFTP:**
   ```
   - Connect to your hosting via FTP
   - Upload all files from this folder to public_html/ or www/
   - Keep folder structure: index.html, store.html, css/, js/, assets/
   ```

2. **Update DNS:**
   - Log in to domain registrar
   - Point domain's A record to your hosting IP
   - Add CNAME if provided by host

### Option 3: Local Domain Testing (Before Connecting)

**To test with a local domain name:**

1. Edit your hosts file:
   - **Windows:** `C:\Windows\System32\drivers\etc\hosts`
   - **Mac/Linux:** `/etc/hosts`

2. Add this line:
   ```
   127.0.0.1  guesturehaven.local
   ```

3. Start your server:
   ```powershell
   npm run start
   ```

4. Open in browser:
   ```
   http://guesturehaven.local:3000
   ```

## Domain Registration

**If you don't have a domain yet, register at:**
- GoDaddy (godaddy.com)
- Namecheap (namecheap.com)
- Google Domains (domains.google.com)
- Bluehost (bluehost.com)

**Typical cost:** $10-15/year

## DNS Records Needed

Once connected, ensure these records are set:

```
Type    Name           Value
A       @              [Your IP or host A record]
CNAME   www            [Your domain or host CNAME]
MX      @              [Your email provider's MX record]
```

## SSL Certificate

Most modern hosting (Vercel, Netlify, traditional hosts) provides **free SSL certificates**.
- Ensures `https://` instead of `http://`
- Required for security and SEO
- Usually auto-enabled

## Next Steps

1. **Choose a hosting platform** (Vercel recommended - it's free)
2. **Register a domain** if needed
3. **Deploy your site** to the hosting platform
4. **Point domain DNS** to your hosting
5. **Wait 24-48 hours** for DNS propagation
6. **Verify** at your domain URL

## Need Help?

Contact your hosting provider's support - they can walk you through DNS setup.

---

**Current Project Structure:**
- `index.html` - Landing page
- `store.html` - Online store
- `wholesale.html` - B2B wholesale section
- `css/` - Stylesheets
- `js/` - JavaScript files
- `assets/` - Images and media

All files are ready to deploy as-is!