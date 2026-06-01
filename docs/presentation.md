% Dev Rishi International School — Project Presentation
% [Your Name]
% MSc Project — [Institution Name] | June 1, 2026

# Title Slide

## Dev Rishi International School Website

- A data-driven static website
- Built with HTML, CSS, vanilla JS

---

# Problem Statement

- Need for an easily maintainable, accessible school website
- Low-cost deployment using static hosting

---

# Objectives

- Single source of truth for content
- Responsive UI + accessibility
- Image gallery with unique allocation
- Easy content updates for non-technical staff

---

# Architecture

- `js/data.js` holds all content
- `js/main.js` contains shared utilities (nav, footer, fallback)
- Page loaders: `home.js`, `about.js`, `academics.js`, `admissions.js`, `events.js`, `contact.js`

---

# Key Features

- Data-driven rendering
- Image fallback handling
- Counter and scroll animations
- Admissions fee table (monthly + registration)
- Dynamic gallery allocation

---

# Gallery & Images

- Images stored under `School_Images/`
- `galleryImages` array centralizes assets
- `ImageAllocator` ensures no repeated images during a session

---

# Admissions & Fees

- Updated fee structure to monthly + registration
- Table rendered dynamically (supports old and new schemas)

---

# Accessibility & UX

- Skip link, aria attributes, focus styles
- Reduced motion preference respected
- Responsive layout for mobile/tablet/desktop

---

# Deployment & Testing

- Local test: `python -m http.server 8000`
- Host on GitHub Pages/Netlify for production

---

# Future Work

- Persistent gallery assignment (localStorage)
- Image optimization and responsive srcsets
- Server-side contact form and analytics

---

# Contact

[Your Name]
MSc Candidate — [Institution Name]
Email: youremail@example.com

