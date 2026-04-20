# Metro Tire Service

A basic, lightweight, and fast static website for Metro Tire Service — a full-service tire shop.

## Structure

```
MetroTireService/
├── index.html        # Single-page site (hero, services, why us, about, contact)
├── css/
│   └── styles.css    # All styles — mobile-first, no external dependencies
├── js/
│   └── main.js       # Vanilla JS: mobile nav, active link, form validation
└── README.md
```

## Features

- **Pure HTML / CSS / JS** — zero build tools, zero external dependencies
- **Mobile-first responsive** layout with a hamburger menu for small screens
- **Accessible** — semantic HTML5, ARIA attributes, visible focus rings, `prefers-reduced-motion` support
- **Fast** — no frameworks, no blocking scripts, ~20 KB total page weight
- **Sections**: Hero · Services · Why Us · About · Contact (with client-side validated form)
- Dynamic footer year

## Running Locally

Just open `index.html` in a browser — no server required.

Or serve with any static file server, e.g.:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Customisation

| What to change | Where |
|---|---|
| Business name / address / phone | `index.html` |
| Colours & fonts | `css/styles.css` `:root` variables |
| Form submission endpoint | `js/main.js` — replace the `setTimeout` stub with a real `fetch` call |