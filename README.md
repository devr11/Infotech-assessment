# InfoTech Assessment

A pixel-perfect, fully responsive static landing page converted from a Figma design. Built with pure HTML, CSS, and vanilla JavaScript — no frameworks or dependencies required.

---

## 📁 Project Structure

```
assessmant/
├── assets/
│   ├── Logo.png
│   ├── Banner Image (section 1).png
│   ├── Section2-Image.png
│   ├── check-sign.png
│   ├── Contact-icon.png
│   ├── Regulatory Clarity.png
│   ├── Hassle-Free Filings Clarity.png
│   ├── Risk Protection.png
│   ├── Vector1.png
│   ├── Vector2.png
│   ├── underline-Vector.png
│   ├── Home.png
│   ├── AboutUs.png
│   ├── Our Services.png
│   ├── Pricing.png
│   ├── FAQ.png
│   ├── Contact.png
│   └── Menu.png
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Getting Started

No build tools or installations needed.

1. Clone or download this repository
2. Make sure the `assets/` folder is in the same directory as `index.html`
3. Open `index.html` in any modern browser

```bash
# Or serve locally with VS Code Live Server (recommended)
# Right-click index.html → Open with Live Server
```

---

## 🎨 Design Specs

Converted from Figma. The design system used:

### Typography — Roboto (Google Fonts)

| Element       | Desktop       | Tablet        | Mobile        |
|---------------|---------------|---------------|---------------|
| H1 Heading    | 64px / 85lh   | 54px / 75lh   | 38px / 48lh   |
| H2 Heading    | 48px / 70lh   | 46px / 60lh   | 34px / 48lh   |
| Large Title   | 24px / 32lh   | 24px / 32lh   | 22px / 32lh   |
| Title         | 20px / auto   | 20px / auto   | 19px / auto   |
| Body Regular  | 18px / 32lh   | 18px / 32lh   | 18px / 32lh   |
| Body Medium   | 18px / auto   | 18px / auto   | 18px / auto   |

### Color Palette

| Token            | Value     | Usage                        |
|------------------|-----------|------------------------------|
| `--primary`      | `#3D3DC4` | Buttons, links, highlights   |
| `--primary-hover`| `#2E2EA0` | Button hover states          |
| `--primary-light`| `#EEEEF9` | Icon backgrounds             |
| `--text-dark`    | `#1A1A2E` | Headings                     |
| `--text-body`    | `#333333` | Body text                    |
| `--text-muted`   | `#555555` | Descriptions, labels         |
| `--bg-page`      | `#F5F5F5` | Page / hero background       |
| `--bg-white`     | `#FFFFFF` | Cards, navbar, section 2     |
| `--star-color`   | `#F5A623` | Star rating                  |

---

## 📐 Responsive Breakpoints

| Breakpoint  | Width      | Layout                                      |
|-------------|------------|---------------------------------------------|
| Desktop     | ≥ 1025px   | Two-column grid, full navbar with links     |
| Tablet      | 768–1024px | Single column, hamburger menu, slide drawer |
| Mobile      | ≤ 480px    | Single column, stacked CTAs, compact type   |

---

## 🧩 Sections

### Navbar
- Sticky top navigation with logo, 6 nav links (with icons), and a **Contact Us** CTA button
- Active link underline indicator
- Responsive hamburger menu with animated slide-in drawer on tablet/mobile
- Drawer includes overlay backdrop, close button, Escape key support, and focus management

### Section 1 — Hero
- H1 heading with blue highlighted word ("Compliance")
- Subtitle paragraph
- Feature checklist (3 items with check icons)
- Dual CTA buttons: **Get Started** (filled) + **Book A Consultation** (outlined)
- Illustration with rating card overlay (4.8 ★ / Trusted By 250+ Professionals)
- Decorative arrow (Vector1) and squiggle (Vector2) assets

### Section 2 — Why Compliance Matters
- H2 heading with blue highlight
- Body paragraph
- Section illustration (chart/analyst graphic)
- 3 feature cards with icons and hover effect:
  - **Regulatory Clarity**
  - **Hassle-Free Filings Clarity**
  - **Risk Protection**

---

## ✨ Interactions & Hover States

Matching the Figma hover effect spec:

| Element              | Default State         | Hover State                    |
|----------------------|-----------------------|--------------------------------|
| `Get Started`        | Filled blue           | Darker blue + shadow + lift    |
| `Book A Consultation`| Outlined blue         | Filled blue + white text       |
| `Contact Us` (nav)   | Filled blue           | Darker blue + lift             |
| Feature cards        | White, subtle shadow  | Blue border + deeper shadow    |
| Nav links            | Dark text             | Blue text + underline grows    |

---

## ♿ Accessibility

- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`)
- `aria-label`, `aria-expanded`, `aria-modal` on interactive elements
- Focus management in the mobile drawer (focus moves to close button on open, returns to hamburger on close)
- Keyboard navigation: **Escape** closes the drawer
- `:focus-visible` styles for keyboard users
- `alt` text on all meaningful images; decorative images use `alt=""`
- `tabindex="0"` on feature cards for keyboard access

---

## 🛠️ Tech Stack

| Technology   | Purpose                              |
|--------------|--------------------------------------|
| HTML5        | Semantic structure                   |
| CSS3         | Styling, layout (Grid/Flexbox), animations |
| Vanilla JS   | Mobile drawer toggle, scroll observer |
| Google Fonts | Roboto typeface                      |

---

## 📝 Notes

- All assets must remain in the `assets/` folder relative to `index.html`
- The page uses `position: sticky` for the navbar — ensure no parent has `overflow: hidden`
- Google Fonts are loaded via CDN; an internet connection is required for the font to render correctly offline alternatives will fall back to sans-serif
