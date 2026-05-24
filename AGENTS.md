# Excellence Academy School Website - Agent Instructions

## Project Overview
This is a **multi-page school website** built with vanilla JavaScript and CSS. The site uses a **data-driven architecture** where all content is centralized in `js/data.js`, and page-specific JavaScript files dynamically render that content.

## Architecture & Key Patterns

### Content Structure
- **Single Source of Truth**: All school data (navigation, text, images, statistics) lives in the `schoolData` object in `js/data.js`
- **No Backend**: This is a static site with no database or server
- **Dynamic Rendering**: Content from `schoolData` is rendered to the DOM using template literals and `.map()` for arrays

### Page Architecture
Each page follows this pattern:
1. **HTML page** (e.g., `index.html`) - Static container with div placeholders
2. **Loads three scripts**: `data.js` → `main.js` → `page-specific.js`
3. **Page-specific loader** (e.g., `home.js`) - Implements `loadXYZPage()` function that:
   - Retrieves content from `schoolData`
   - Renders it to the DOM using template literals
   - Initializes page-specific event listeners
   - Called on `DOMContentLoaded` event

Example:
```javascript
// In home.js
function loadHomePage() {
    const heroSection = document.getElementById('heroSection');
    heroSection.innerHTML = `<section class="hero">...</section>`;
}
document.addEventListener('DOMContentLoaded', loadHomePage);
```

### Image Handling
- **Two Modes**: `IMAGE_MODE = "stock"` (Picsum URLs) or `"local"` (images/ folder)
- **Flexible Method**: `schoolData.getImage(type, index)` retrieves images based on mode
- **Fallback System**: `handleImageError()` in `main.js` replaces broken images with fallback

### Shared Utilities (main.js)
- `toggleMobileMenu()` - Mobile navigation toggle
- `handleImageError()` - Image fallback handling
- `initImageErrorHandling()` - Attach error handlers to all images
- `initAnimations()` - Intersection Observer for scroll animations
- Navbar scroll effect listener

## Styling & Design System

**CSS Variables** (in `css/style.css`):
- `--primary: #1a3a5c` (dark blue - main brand color)
- `--secondary: #e8a817` (gold - accents)
- `--accent: #0d6b6e` (teal)
- `--light: #f8f9fa`, `--dark: #212529`
- `--text: #495057` (body text)
- `--shadow`, `--transition` - Standard effects

**Responsive Design**:
- Fixed navbar with scroll effect (`.scrolled` class added when scrollY > 50)
- Mobile menu toggle with hamburger icon
- `.animate` class used with Intersection Observer for scroll animations

## File Organization

```
school-website/
├── index.html, about.html, academics.html, admissions.html, events.html, contact.html
├── css/
│   └── style.css          # All styling with CSS variables
├── js/
│   ├── data.js            # Central data repository (EDIT THIS FOR CONTENT)
│   ├── main.js            # Shared utilities (navigation, images, animations)
│   ├── home.js            # Home page loader
│   ├── about.js           # About page loader
│   ├── academics.js       # Academics page loader
│   ├── admissions.js      # Admissions page loader
│   ├── events.js          # Events page loader
│   └── contact.js         # Contact page loader
└── images/                # Local images (if IMAGE_MODE = "local")
```

## Common Tasks & Where to Edit

| Task | File | Pattern |
|------|------|---------|
| Change school name, tagline, etc. | `js/data.js` → `schoolData` | Update property in object |
| Add/edit navigation links | `js/data.js` → `schoolData.navigation` | Array of {label, href, icon} |
| Update hero section text | `js/data.js` → `schoolData.hero` | title, subtitle, buttons |
| Add/edit features grid | `js/data.js` → `schoolData.features.items` | Array with icon, title, description |
| Add/edit page content | `js/data.js` → `schoolData.aboutPage`, `academicsPage`, etc. | Nested objects with sections |
| Change colors/fonts | `css/style.css` | Update CSS variables or class rules |
| Add page-specific logic | `js/[page].js` | Add to `load[Page]Page()` function |
| Add shared functionality | `js/main.js` | Add utility functions |

## Development Tips

1. **Always update `js/data.js` first** - It's the single source of truth for all content
2. **Use `schoolData.getImage()` for images** - Allows easy switching between local/stock
3. **Use CSS variables for colors** - Ensures design consistency
4. **Template literals and .map()** - Standard for rendering arrays of content
5. **`animate` class** - Add to elements that should fade in on scroll
6. **Font Awesome icons** - Already loaded in HTML; use icon classes from `fontawesome.com`
7. **DOMContentLoaded event** - Page loaders wait for this before rendering

## Image Sources
- **Stock Mode** (default): Picsum (picsum.photos) - Free, reliable placeholder images
- **Local Mode**: Images in `images/` folder (you can switch by changing `IMAGE_MODE` in `data.js`)

## No Build Process
This is a **vanilla HTML/CSS/JS site** with:
- No npm/build tools
- No bundling needed
- Open any HTML file directly in browser to test
- Best viewed via a local server (use `python -m http.server` or VS Code Live Server)
