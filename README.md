# Guesture_Haven — Hotel Essentials Platform

A modern, responsive website and online store for hotel essentials with WhatsApp integration.

## 🚀 Quick Start

### Local Preview
```powershell
npm run start
# or
npx serve .
```
Then open: `http://localhost:3000`

### Pages
- **index.html** — Landing page with hero, features, trust section, and WhatsApp contact
- **store.html** — E-commerce store with 18 products, shopping cart, and checkout
- **wholesale.html** — B2B wholesale section with bulk pricing and inquiry form

## 📋 Features

### Landing Page (index.html)
- Responsive hero section with CTA buttons
- 6 product category cards with SVG images
- "Why Choose Us" section (6 benefits)
- Trust & credentials section with stats (500+ hotels, 10M+ products, 98% satisfaction)
- About section
- WhatsApp direct contact button
- Mobile-optimized navigation

### Online Store (store.html)
- 18 pre-loaded products across 6 categories
- Category filtering (Toiletries, Comfort, Connectivity, Snacks, Laundry, Wellness)
- Shopping cart with quantity adjustment
- Real-time cart counter badge
- WhatsApp checkout integration
- Order summary with total calculation
- Fully responsive design

### Wholesale/Bulk Section (wholesale.html)
- Benefits overview (4 cards)
- 3-tier pricing structure (Starter 25%, Growth 30%, Enterprise 35-40% off)
- Popular bulk items with pricing
- Wholesale inquiry form (company, contact, quantities)
- FAQ section (6 common questions)
- WhatsApp integration for inquiries

## 🎨 Design

- **Color Scheme:** Gold (#D4AF37) and Deep Blue (#1E3A8A)
- **Typography:** Responsive fonts using clamp() for fluid scaling
- **Responsive:** Desktop → Tablet → Mobile optimized
- **Mobile:** Full responsive with breakpoints at 768px and 480px
- **Animations:** Smooth hover effects, lift animations, transitions
- **Accessibility:** Semantic HTML, ARIA labels, good contrast ratios

## 📱 WhatsApp Integration

- Direct WhatsApp messaging for orders and inquiries
- Business number: `0506993828` (update in all HTML files)
- Pre-filled messages with product details, quantities, and totals
- Works on desktop, mobile, and tablets

## 🛠️ Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Responsive grid/flexbox, mobile-first design
- **Vanilla JavaScript** — No dependencies, pure JS for cart and filtering
- **SVG Assets** — Lightweight, scalable images

## 📦 File Structure

```
hotel essentials/
├── index.html              # Landing page
├── store.html              # Online store
├── wholesale.html          # Wholesale B2B section
├── package.json            # NPM configuration
├── README.md               # This file
├── DOMAIN_SETUP.md         # Domain connection guide
├── css/
│   ├── styles.css          # Landing page styles
│   └── store.css           # Store & wholesale styles
├── js/
│   ├── store.js            # Store cart functionality
│   └── wholesale.js        # Wholesale form handling
└── assets/
    ├── toiletries.svg
    ├── comfort.svg
    ├── connectivity.svg
    ├── minibar.svg
    ├── laundry.svg
    └── wellness.svg
```

## 🔧 Customization

### Update WhatsApp Number
Search and replace `0506993828` with your business number in:
- `index.html` (hero and footer buttons)
- `store.html` (checkout button)
- `wholesale.html` (inquiry form and footer)

### Add/Edit Products (store.html)
Edit the `products` array in `js/store.js`:
```javascript
const products = [
  { id: 1, name: 'Product Name', price: 9.99, category: 'category', image: 'assets/image.svg', desc: 'Short description' },
  // Add more products...
];
```

### Update Wholesale Pricing
Edit tier discounts and features in `wholesale.html` HTML section.

### Change Brand Colors
Update CSS variables in `styles.css` and `store.css`:
```css
:root {
  --gold: #D4AF37;    /* Primary accent color */
  --blue: #1E3A8A;    /* Primary brand color */
  --bg: #f7f9fc;      /* Background color */
}
```

## 🌐 Domain Connection

See **DOMAIN_SETUP.md** for comprehensive instructions on:
- Registering a domain
- Deploying to Vercel, Netlify, or traditional hosting
- Connecting custom domain via DNS
- SSL certificate setup (free HTTPS)

**Recommended:** Use **Vercel** for fastest, easiest deployment (free tier available).

## 🚀 Recommended Hosting

1. **Vercel** (Recommended - Free) — Optimal for static sites
2. **Netlify** (Free tier) — Easy Git integration
3. **GitHub Pages** (Free) — Good for public projects
4. **Traditional Hosting** (Shared/VPS) — Full control

## 📊 Recommended VS Code Extensions

- `ritwickdey.LiveServer` — Live reload while developing
- `esbenp.prettier-vscode` — Code formatter
- `dbaeumer.vscode-eslint` — JavaScript linting
- `christian-kohler.path-intellisense` — Path autocomplete
- `ms-vscode.vscode-icons` — File icons

## 🎯 Next Steps

1. **Customize content** — Update product data, pricing, contact info
2. **Add real images** — Replace SVG placeholders with actual photos
3. **Set up domain** — Follow DOMAIN_SETUP.md
4. **Deploy to hosting** — Push to Vercel, Netlify, or your host
5. **Monitor analytics** — Add Google Analytics if needed

## 📞 Contact

- **WhatsApp:** 0506993828
- **Email:** hello@guesturehaven.com
- **Wholesale:** wholesale@guesturehaven.com

## 📝 License

© 2026 Guesture_Haven. All rights reserved.

---

**Last Updated:** January 11, 2026  
**Version:** 1.0.0
