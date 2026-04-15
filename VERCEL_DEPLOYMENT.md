# Vercel Deployment Guide

Fast, easy deployment for Guesture_Haven - takes 5 minutes!

## Prerequisites
- GitHub account (or Vercel account)
- Git repository with your code

## Step 1: Push to GitHub (If not already done)

```powershell
# Initialize git (if needed)
git init
git add .
git commit -m "Initial commit: Guesture_Haven hotel essentials platform"
git remote add origin https://github.com/YOUR_USERNAME/guesture-haven.git
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Via GitHub (Recommended)
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Paste your GitHub repo URL
4. Vercel auto-detects it as a static site
5. Click "Deploy"
6. Done! Your site is live at `your-repo-name.vercel.app`

### Option B: Via Vercel CLI
```powershell
# Install Vercel CLI
npm i -g vercel

# Deploy from your project folder
vercel

# Follow prompts and deploy
```

### Option C: Drag & Drop (No Git needed)
1. Go to https://vercel.com
2. Sign up
3. Click "Create a new project"
4. Drag and drop your project folder
5. Done!

## Step 3: Connect Custom Domain

1. In Vercel dashboard, select your project
2. Go to **Settings** → **Domains**
3. Click **"Add"** and enter your domain (e.g., `guesturehaven.com`)
4. Choose one of two options:

### Option A: Vercel Nameservers (Easiest)
- Vercel shows nameservers
- Log into your domain registrar (GoDaddy, Namecheap, etc.)
- Replace nameservers with Vercel's
- Wait 24-48 hours

### Option B: CNAME Record (If keeping registrar)
- Point your registrar's DNS to Vercel's CNAME record
- Add the CNAME value Vercel provides
- Takes 15-30 minutes

## Step 4: SSL Certificate (Automatic)

Vercel provides **free SSL** automatically. Your site will have:
- ✅ https://guesturehaven.com
- ✅ Auto-renewal
- ✅ HTTPS redirect

## Post-Deployment

### Optimize Performance
```
- Images: Consider Next.js Image optimization (optional)
- Analytics: Add Google Analytics to index.html
- Monitoring: Enable Vercel Analytics
```

### Environment Variables (Optional)
If you add backend features later:
```
1. Project Settings → Environment Variables
2. Add your secrets (API keys, etc.)
3. Redeploy
```

### Continuous Deployment
Your site auto-updates when you push to GitHub:
```powershell
git add .
git commit -m "Update features"
git push
# Vercel auto-deploys in seconds!
```

## Troubleshooting

### Domain not resolving?
- Wait 24-48 hours for DNS propagation
- Check DNS settings are correct
- Use `nslookup guesturehaven.com` to verify

### Site not updating?
- Clear cache (Ctrl+Shift+Delete)
- Check build logs in Vercel dashboard
- Redeploy manually if needed

### SSL errors?
- Wait 5 minutes after domain is added
- Vercel auto-generates SSL cert
- If still failing, manually trigger cert generation

## Alternative Quick Deploy Options

### Netlify (Also Free & Easy)
```
1. Go to netlify.com
2. Drag & drop your folder OR connect Git
3. Custom domain setup similar to Vercel
4. Done!
```

### GitHub Pages (Free, Static Only)
```
1. Push to GitHub
2. Settings → Pages → Deploy from main branch
3. Enable custom domain
4. Done!
```

## Cost Estimate

| Hosting | Cost | Notes |
|---------|------|-------|
| Vercel | Free | Best for static sites |
| Netlify | Free | Good alternative |
| GitHub Pages | Free | Limited features |
| Traditional Host | $5-20/mo | More control |

---

**Est. Time:** 5-10 minutes  
**Difficulty:** Easy  
**Success Rate:** 99.9%

Need help? Check Vercel docs: https://vercel.com/docs