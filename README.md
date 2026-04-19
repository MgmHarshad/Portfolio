# Portfolio — Personal Developer Website

A single-page personal portfolio for **Harshad Vilas Magadum**, built to present background, skills, selected projects, and a working contact channel. The UI is responsive, section-based, and optimized for smooth in-page navigation.

## Overview

This application is a **React 18** front end bundled with **Vite 5**. Content is organized into focused sections (hero, about, projects, contact) composed as independent React components. Styling uses **Tailwind CSS** with a small set of global utilities (layout, gradient text, smooth scrolling). Motion and scroll behavior are enhanced with **Framer Motion** and **react-scroll**.

## Features

- **Fixed navigation bar** — Semi-transparent bar with backdrop blur; desktop links and a mobile menu (Heroicons) scroll smoothly to each section via `react-scroll` with an offset for the fixed header.
- **Hero** — Introduction, role, short pitch, CTAs to contact and projects, profile image in a circular frame, and decorative blob animation (Tailwind keyframes).
- **About** — Personal narrative, downloadable resume (PDF in `src/assets`), and animated skill bars driven by Framer Motion when the section enters the viewport.
- **Projects** — Card grid of featured work with descriptions, technology tags, and external links (deployed demos where applicable).
- **Contact** — Email, phone, and location; client-side form with loading, success, and error states. Submissions are sent through **[EmailJS](https://www.emailjs.com/)** (`@emailjs/browser`) without a custom backend.
- **Footer** — Copyright year and links to LinkedIn and GitHub.

## Tech Stack

| Area | Technology |
|------|------------|
| UI | React 18, JSX |
| Build / dev server | Vite 5 |
| Styling | Tailwind CSS 3, PostCSS, Autoprefixer |
| Animation | Framer Motion |
| Scroll navigation | react-scroll |
| Icons | Heroicons (`@heroicons/react`) |
| Contact | EmailJS |
| Linting | ESLint (React, Hooks, Refresh plugins) |

## How It Works

1. **`main.jsx`** mounts the root `<App />` inside `React.StrictMode` and loads global styles from `index.css` (Tailwind layers, CSS variables, `container-custom`, `section-padding`, `gradient-text`, `scroll-behavior: smooth`).
2. **`App.jsx`** renders a full-height layout: `Navbar`, a `<main>` region with `Hero`, `About`, `Projects`, and `Contact` (each section exposes an `id` matching scroll targets), then `Footer`.
3. **Section components** use Framer Motion for enter/exit-in-view transitions (`whileInView`, `viewport={{ once: true }}`) so animations run once when the user scrolls to a block.
4. **Contact form** — Controlled inputs update React state; on submit, `emailjs.sendForm` posts the form DOM node to the configured EmailJS service. The form ref must wrap fields whose `name` attributes align with the EmailJS template.

```text
index.html
    └── main.jsx → App.jsx
            ├── Navbar (react-scroll → #hero, #about, #projects, #contact)
            ├── Hero
            ├── About
            ├── Projects
            ├── Contact (EmailJS)
            └── Footer
```

## Project Structure

```text
Portfolio/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Projects.jsx
    │   ├── Contact.jsx
    │   └── Footer.jsx
    ├── assets/              # e.g. resume PDF (referenced by About)
    └── Profile1-Photoroom.png   # hero image (imported in Hero)
```

Paths for media and the resume follow the imports in `Hero.jsx` and `About.jsx`; keep those files in place or update the imports after moving assets.

## Getting Started

**Prerequisites:** Node.js (LTS recommended) and npm.

```bash
npm install
npm run dev
```

The dev server prints a local URL (typically `http://localhost:5173`). Edit files under `src/`; Vite enables fast HMR.

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

## EmailJS Configuration

The contact form requires an EmailJS account, an email service, a template, and a public key. Service ID, template ID, and key are passed into `emailjs.sendForm` in `src/components/Contact.jsx`. Template field names should match the form controls (`name`, `email`, `message`).