<div align="center">

# Ihnat Tryhub — Portfolio

### Full-Stack / Frontend Developer · React · TypeScript · Node.js · Express · MongoDB

<br/>

[![React](https://img.shields.io/badge/React-149eca?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ihnat-tryhub/)

<br/>

**[🚀 Live Site](https://portfolio-ihnat-tryhub.vercel.app)** &nbsp;·&nbsp; **[GitHub](https://github.com/ihnat-tryhub)** &nbsp;·&nbsp; **[LinkedIn](https://www.linkedin.com/in/ihnat-tryhub/)**

</div>

---

## 📌 About

Personal portfolio website for **Ihnat Tryhub**, a junior full-stack / frontend developer.  
The site is a static single-page application built with Vite + React + TypeScript, styled with plain CSS, and deployable to Vercel with zero configuration.

---

## ✨ Sections

| Section | Content |
|---|---|
| **Hero** | Name, title, tagline, CTA buttons |
| **About** | Developer bio and focus areas |
| **Skills** | Grouped skill badges (Frontend / Backend / Tools) |
| **Projects** | GoTours and Shop — two deployed full-stack projects |
| **What I Demonstrate** | Engineering practices applied across projects |
| **Contact** | Email, GitHub, open-to-work statement |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 + TypeScript |
| **Build tool** | Vite 8 |
| **Styling** | Plain CSS with custom properties |
| **Fonts** | Inter (Google Fonts) |
| **Routing** | Smooth-scroll (no router needed for one-page) |
| **Deployment** | Vercel (static) |

No external UI libraries, no backend, no database.

---

## 🏗 Project Structure

```
Portfolio/
├── index.html              # Entry HTML with SEO meta tags
├── vite.config.ts
├── tsconfig.json
├── package.json
└── src/
    ├── main.tsx            # React entry point
    ├── App.tsx             # Root component
    ├── index.css           # Global design system (tokens, layout, components)
    ├── data/
    │   └── projects.ts     # Project cards, skill groups, demo items
    └── components/
        ├── Header.tsx      # Sticky nav with smooth scroll + mobile hamburger
        ├── Hero.tsx        # Name, tagline, CTA buttons
        ├── About.tsx       # Developer bio
        ├── Skills.tsx      # Skill badges grouped by category
        ├── Projects.tsx    # Two large feature project cards
        ├── WhatIDemo.tsx   # "What these projects demonstrate" grid
        └── Contact.tsx     # Email, GitHub, footer
```

---

## 🚀 Local Development

### Prerequisites
- Node.js 20+
- npm

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Dev server runs on → `http://localhost:5173`

---

## 📦 Build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build:

```bash
npm run preview
```

---

## ☁️ Deployment (Vercel)

The site is a fully static SPA — no server required.

**Deploy via Vercel CLI:**
```bash
npx vercel --prod
```

**Or connect via Vercel dashboard:**
1. Import this repository
2. Framework: `Vite`
3. Build command: `npm run build`
4. Output directory: `dist`
5. No environment variables required

---

## 📁 Featured Projects

### GoTours — Full-stack tour booking platform
- **Live:** https://go-tours-liard.vercel.app
- **API:**  https://documenter.getpostman.com/view/39911722/2sAYQiATE5
- **Code:** https://github.com/ihnat-tryhub/GoTours
- Stack: React, TypeScript, Vite, Express, MongoDB, Mongoose, JWT, Stripe, Mapbox

### Shop — Full-stack e-commerce platform
- **Live:** https://shop-lovat-seven.vercel.app
- **Code:** https://github.com/ihnat-tryhub/Shop
- Stack: React, Redux Toolkit, Vite, Tailwind CSS, Express, MongoDB, JWT, Stripe, Cloudinary, Chart.js


<img width="1250" height="839" alt="image" src="https://github.com/user-attachments/assets/5f6f63c1-0572-480c-ae11-b2f085751848" />


---

<div align="center">

Made with ☕ · [GitHub](https://github.com/ihnat-tryhub)

</div>

