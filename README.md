# Artist / Photography Portfolio

A clean, responsive single-page portfolio template for photographers and visual artists. Built with plain HTML, Tailwind CSS, and vanilla JavaScript — no framework, no build step beyond compiling Tailwind.

The layout pairs a sticky profile/bio sidebar with a fluid auto-fitting image grid, and each piece opens in a full-screen lightbox with a title, year, and description.

## Features

- **Fully responsive** — single-column on mobile, two-pane layout on large (2xl) screens.
- **Auto-fitting gallery grid** — `grid-cols-[repeat(auto-fit,...)]` adapts the number of columns to the viewport, no media-query juggling.
- **Image lightbox** — click any piece for a blurred-backdrop preview with title, year, and caption.
- **Profile header** — avatar, name, role, bio, and social links (email / LinkedIn / Instagram icons included).
- **Blurred cover background** with a dark overlay for legible text.

## Tech stack

- HTML5
- [Tailwind CSS](https://tailwindcss.com) v4
- Vanilla JavaScript
- [Google Fonts — Sour Gummy](https://fonts.google.com/specimen/Sour+Gummy)
- Font Awesome (inlined SVG icons)

## Project structure

```
.
├── public/
│   ├── images/
│   │   ├── profile.jpg        # profile avatar
│   │   └── background.png     # blurred cover background
│   ├── index.html            # the page
│   ├── style.css             # compiled Tailwind output
│   └── script.js             # lightbox logic
├── tailwind.css              # Tailwind source / custom @apply styles
└── LICENSE
```

## Getting started

Because it's a static site, you can open `public/index.html` directly in a browser — but you'll want a local server so relative paths resolve cleanly.

```bash
# from the repo root
cd public
python3 -m http.server 8000
# then visit http://localhost:8000
```

### Rebuilding the CSS

`public/style.css` is the compiled Tailwind output. `tailwind.css` is the source (it holds the `@import "tailwindcss";` and the custom `@apply` rules). To regenerate after editing styles, run the Tailwind CLI:

```bash
npx @tailwindcss/cli -i tailwind.css -o public/style.css --watch
```

## Customizing

- **Your info** — replace the name, role, and bio in `public/index.html` (the placeholders read "Jane Smith / Commercial Photographer").
- **Social links** — point the `<a href="#">` tags in the `.social-icons` block at your real profiles.
- **Images** — the grid currently uses `picsum.photos` placeholders. Swap the `src` of each `.image` button's `<img>` for your own work, and update the `<h3>` title / `<p>` year.
- **Avatar & background** — drop your own `profile.jpg` and `background.png` into `public/images/`.

## Managing your content

Out of the box this is a **static front-end** — the gallery images, titles, and the lightbox caption/year are hardcoded directly in `public/index.html`. There's no admin, database, or login; nothing persists on its own. You have three ways to take it further:

**1. Edit it by hand (simplest)**
Open `public/index.html` and change the gallery markup directly — swap each image `src`, edit the `<h3>` title and `<p>` year, etc. Note that the lightbox currently only swaps the *image*; the title and caption in the preview are static. To make those change per image, edit `script.js` so it reads the title/caption from the clicked tile (e.g. from `data-*` attributes) and writes them into the preview. Good for a small, rarely-changing portfolio.

**2. Add your own backend with Express (or similar)**
Stand up a small [Express](https://expressjs.com) (or any Node/Python/etc.) server to store your pieces and their metadata, then serve the gallery from that data instead of hardcoded HTML. This gives you upload + edit without touching markup each time, and lets you add a login if you want to protect editing.

**3. Drop it onto a CMS**
Wire the markup into [WordPress](https://wordpress.org) or any other CMS (Strapi, Sanity, Contentful, etc.) and let the CMS handle uploads, captions, and an admin login for you. Best if you want a polished editing UI without building one yourself.

## Usage & license

This project is released under the [MIT License](LICENSE), and you're welcome to use it as a starting point for your own portfolio.

**One ask:** if you use this, please credit me and link back to my GitHub:

> Based on a template by **Corbinhol** — https://github.com/Corbinhol

A line in your own README, footer, or source comments is perfect.

---

Made by [Corbinhol](https://github.com/Corbinhol).
