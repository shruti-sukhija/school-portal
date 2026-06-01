Project Report
===============

Title: Dev Rishi International School — Data-driven Static Website
Author: [Your Name]
Degree: MSc (Information Technology)
Institution: [Indian Institution Name]
Date: June 1, 2026

Abstract
--------
This project is a multi-page, data-driven static website for Dev Rishi International School built with vanilla HTML, CSS, and JavaScript. The site centralizes all content in a single JavaScript data file and dynamically renders pages to the DOM. The work demonstrates web engineering practices appropriate for an MSc project: modular architecture, accessibility considerations, responsive design, client-side templating, and progressive enhancement.

1. Introduction
---------------
Motivation: Present an accessible, responsive, and easily updatable brochure-style website for a school that does not require a backend. The project focuses on clarity, maintainability, and local deployment.

Scope: The website supports pages for Home, About, Academics, Admissions, Events, and Contact. Content lives in `js/data.js` and page-specific JS files render sections at DOMContentLoaded.

2. Objectives
-------------
- Design a single-source-of-truth content model.
- Implement dynamic rendering of pages using template literals.
- Provide graceful handling of missing resources (image fallbacks).
- Ensure responsive UI and accessible semantics.
- Add a gallery allocator to avoid image repetition across pages.

3. System Architecture
----------------------
- No server-side code; static hosting compatible (GitHub Pages, Netlify, or simple `python -m http.server`).
- Files of interest:
  - `index.html`, `about.html`, `academics.html`, `admissions.html`, `events.html`, `contact.html`
  - `js/data.js` — centralized content (schoolData)
  - `js/main.js` — shared utilities (nav, footer, image fallback, animations)
  - `js/*.js` — page-specific renderers (home.js, about.js, academics.js, admissions.js, events.js, contact.js)
  - `css/style.css` — site styling and responsive rules
  - `School_Images/` — local image assets

4. Data Model and Content Strategy
---------------------------------
The `schoolData` object in `js/data.js` contains: navigation, hero content, stats, features, pages (aboutPage, academicsPage, admissionsPage, eventsPage, contactPage), events and testimonials, and a `galleryImages` array. `IMAGE_MODE` ("local" or "stock") controls image sources.

5. Implementation Details
-------------------------
- Navigation: `loadNavigation()` populates header and mobile menu and marks the active page.
- Footer: `loadFooter()` renders footer content from `schoolData.footer`.
- Image Handling: `handleImageError()` replaces broken images with a default fallback URL and `initImageErrorHandling()` wires onerror handlers.
- Animations: IntersectionObserver-based `initAnimations()` for `.animate` elements.
- Counters: IntersectionObserver-based counter animation for `.stat-number` elements, with reduced-motion respect.
- Admissions fees: Updated to a monthly + registration table and rendered dynamically to support multiple schemas.
- Gallery: `galleryImages` array and an `ImageAllocator` (in `main.js`) hand out unique images for inserted gallery sections to prevent duplication on the same session.

6. Files Added / Modified (summary)
-----------------------------------
- Modified: `js/data.js` — updated `admissionsPage.fees`, added `galleryImages`.
- Modified: `js/admissions.js` — dynamic fees renderer.
- Modified: `js/main.js` — added `ImageAllocator`, `initGallery`, and global initializer.
- Modified: `css/style.css` — gallery styles.
- Modified: `js/about.js`, `js/academics.js`, `js/events.js` — injected gallery containers and init calls.
- Added: `docs/report.md`, `docs/presentation.md`, `docs/README.md` (presentation conversion instructions).

7. Testing and Validation
-------------------------
- Manual review of pages in a browser to check layout and image fallbacks.
- Unit tests were not added since the project is static; recommended checks include link validation and image path auditing.

8. Deployment
-------------
The site can be deployed to GitHub Pages or any static host. For local testing:

```bash
# From project root
python -m http.server 8000
# Then open http://localhost:8000 in a browser
```

9. Limitations and Future Work
------------------------------
- No server-side storage for contact messages (form shows inline success message only).
- Gallery allocation is session-scoped (page load). To persist assignment across sessions, store used indices in localStorage.
- Accessibility audit can be extended (aria landmarks, contrast ratios, keyboard navigation tests).
- Optionally add a build step to optimize images and generate responsive srcsets.

10. Conclusion
--------------
This project delivers a maintainable, accessible, and responsive static website suitable as a capstone for an MSc project. The single-source data approach simplifies content updates and encourages separation of concerns between content and presentation.

References
----------
- MDN Web Docs — HTML, CSS, JavaScript
- A11y Project — Accessibility guidance

Appendix
--------
- List of image files used: see `School_Images/` folder in the repository.


