# Coffee House — landing page

A landing page for the "Coffee House" coffee shop — a learning project.

## Status

- ✅ Main page (`index.html`) is implemented
- 🚧 Menu page (`menu.html`) — work in progress

## Main page features

- Light and dark theme, the choice is saved in `localStorage`
- Mobile burger menu with background scroll lock
- "Favorite coffee" slider with buttons and indicators
- Responsive layout (desktop and mobile)

Sections: hero, Favorite coffee, About, Mobile app, contacts (footer).

## Tech

Plain HTML + CSS + JavaScript, no frameworks or build tools.

## Structure

```
├── index.html          # main page
├── menu.html           # menu page (work in progress)
├── css/                # styles per section + base.css (variables, layout)
├── js/
│   ├── theme_switch.js # theme switching
│   ├── burger_menu.js  # mobile menu
│   └── slider.js       # coffee slider
└── images/             # images and icons
```

## How to run

The project is static — just open `index.html` in a browser, or spin up any local server:

```bash
npx serve .
```
