## Black × Pink — Modern, Sexy Portfolio

A high-contrast, editorial-feel, black × pink themed portfolio. It features a cinematic hero, grouped skills with interactive chips, a refined projects grid with subtle 3D tilt, buttery scroll‑reveal animations, and an accessible, sticky navigation that adapts on scroll.

### Highlights
- **Striking theme**: Deep black base with electric pink accents and glow orbs
- **Hero that sells**: Bold typography, tasteful gradients, and focused CTAs
- **Grouped skills**: Domain‑based cards with interactive, ripple chips
- **Projects grid**: Premium hover and tilt interactions (respects reduced motion)
- **Sticky, smart nav**: Scrollspy highlights, mobile drawer, and skip link
- **Performance‑minded**: Lightweight, no framework, just HTML/CSS/JS
- **SEO‑ready**: OG/Twitter meta, favicon, theme‑color, share card (SVG)
- **Accessible defaults**: Focus styles, ARIA, and reduced‑motion safeguards

### Project Structure
```
.
├─ index.html            # Main page
├─ styles/
│  └─ main.css          # Theme, layout, components, animations
├─ scripts/
│  └─ main.js           # Nav, reveal, tilt, chips, scrollspy
└─ assets/
   └─ svg/
      ├─ favicon.svg    # Favicon (SVG)
      └─ og-card.svg    # Open Graph share image (SVG)
```

### Quick Start
- **Open directly**: Double‑click `index.html` (most browsers allow local file URLs).
- **Serve locally (recommended)**:
  - Python: `python3 -m http.server 5173` then visit `http://localhost:5173`
  - Node (serve): `npx serve -l 5173` then visit `http://localhost:5173`

### Customize
- **Brand**: Edit the `BLACK×PINK` wordmark in `index.html` and `assets/svg/og-card.svg`.
- **Hero copy/CTAs**: Update the hero `<h1>`, `.lede`, and buttons in `index.html`.
- **Skills**: Modify the grouped skills in the `#skills` section.
- **Projects**: Replace the four sample project cards and thumbnails.
- **Contact form**: Form is ready for Netlify (`data-netlify="true"`). You can remove it or wire it to your backend.
- **Colors**: Tweak CSS variables in `styles/main.css` (`--pink`, `--bg`, etc.).
- **Motion**: Adjust scroll‑reveal/tilt in `scripts/main.js`; users with reduced‑motion are respected.
- **SEO**: Update meta description in `index.html`. Replace `assets/svg/og-card.svg` with your own (1200×630 recommended).

### Deployment
- **GitHub Pages**
  1. Push this folder to a GitHub repo.
  2. In repo Settings → Pages, set Source to `main` and root `/`.
  3. Your site will be live at `https://<user>.github.io/<repo>/`.
- **Netlify**
  1. Drag‑and‑drop the folder onto Netlify, or connect your repo.
  2. No build command needed; publish directory is the repo root.
  3. For the contact form, Netlify will auto‑detect `data-netlify`.
- **Vercel**
  1. Import the repo in Vercel.
  2. Framework preset: Other; Output directory: `/`.

### Inspiration
Built with influences from editorial portfolios, premium e‑commerce, and motion design systems. Minimal, confident, conversion‑first.

---

If you want me to tailor this to your personal content (social links, real projects, or a custom logo), say the word and I’ll wire it up.
