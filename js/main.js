// ============================================
// MAIN JAVASCRIPT - Common Functions
// ============================================

const DEFAULT_FALLBACK_IMAGE = "https://images.unsplash.com/photo-1562774053-701939374585?w=800";

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    if (!mobileMenu) return;
    const willOpen = !mobileMenu.classList.contains('active');
    mobileMenu.classList.toggle('active');
    if (hamburger) {
        hamburger.setAttribute('aria-expanded', String(willOpen));
        const icon = hamburger.querySelector('i');
        if (icon) icon.className = willOpen ? 'fas fa-times' : 'fas fa-bars';
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    if (mobileMenu && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        if (hamburger) {
            hamburger.setAttribute('aria-expanded', 'false');
            const icon = hamburger.querySelector('i');
            if (icon) icon.className = 'fas fa-bars';
        }
    }
}

document.addEventListener('click', (e) => {
    const mobileMenu = document.getElementById('mobileMenu');
    if (!mobileMenu || !mobileMenu.classList.contains('active')) return;
    if (mobileMenu.contains(e.target) || e.target.closest('.hamburger')) return;
    closeMobileMenu();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileMenu();
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar && window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else if (navbar) {
        navbar.classList.remove('scrolled');
    }
});

// Image Error Handler
function handleImageError(imgElement) {
    if (!imgElement.getAttribute('data-fallback-applied')) {
        imgElement.setAttribute('data-fallback-applied', 'true');
        imgElement.src = DEFAULT_FALLBACK_IMAGE;
    }
}

function initImageErrorHandling() {
    document.querySelectorAll('img').forEach(img => {
        img.setAttribute('onerror', 'handleImageError(this)');
        if (img.complete && img.naturalWidth === 0) {
            handleImageError(img);
        }
    });
}

// Image allocator for galleries — hands out unique images until exhausted
function _shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function ImageAllocator(images) {
    this._pool = Array.isArray(images) ? images.slice() : [];
    _shuffleArray(this._pool);
    this._pos = 0;
}

ImageAllocator.prototype.get = function(count) {
    const out = [];
    while (out.length < count && this._pos < this._pool.length) {
        out.push(this._pool[this._pos++]);
    }
    return out;
};

function _renderGalleryGrid(images) {
    return `<div class="gallery-grid">${images.map(src => `
        <div class="gallery-item"><img src="${src}" loading="lazy" onerror="handleImageError(this)"></div>
    `).join('')}</div>`;
}

// Public helper to initialize a gallery inside an element by id
function initGallery(containerId, count = 6) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const allocator = window._imageAllocator;
    let images = [];
    if (allocator) images = allocator.get(count);
    if (!images || !images.length) {
        images = (window.schoolData && window.schoolData.galleryImages) ? window.schoolData.galleryImages.slice(0, count) : [];
    }
    if (!images.length) return;
    container.innerHTML = `<div class="section-header"><h2>Gallery</h2></div>` + _renderGalleryGrid(images);
    initImageErrorHandling();
    initAnimations();
}

// Scroll Animations — safe to call repeatedly; page loaders invoke this after injecting markup
let _animationObserver = null;
function initAnimations() {
    if (!_animationObserver) {
        _animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    _animationObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
    }

    document.querySelectorAll('.animate:not(.show)').forEach(el => {
        if (el.dataset.animateObserved) return;
        el.dataset.animateObserved = 'true';
        _animationObserver.observe(el);
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('show');
            _animationObserver.unobserve(el);
        }
    });
}

// Counter Animation
function animateCounter(element, target, suffix = '+') {
    const duration = 1500;
    const start = performance.now();
    function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(target * eased);
        element.textContent = value + suffix;
        if (progress < 1) requestAnimationFrame(tick);
        else element.textContent = target + suffix;
    }
    requestAnimationFrame(tick);
}

let _counterObserver = null;
function startCounter(counter) {
    if (counter.dataset.counted) return;
    const target = parseInt(counter.getAttribute('data-target'));
    const suffix = counter.hasAttribute('data-suffix') ? counter.getAttribute('data-suffix') : '+';
    if (!target) return;
    counter.dataset.counted = 'true';
    // Years (e.g. 2005) shouldn't ramp from 0 — reads as a glitch
    const isYear = suffix === '' && target >= 1900 && target <= 2100;
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isYear || reduced) {
        counter.textContent = target + suffix;
    } else {
        animateCounter(counter, target, suffix);
    }
}

function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    if (!counters.length) return;
    if (!_counterObserver) {
        _counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounter(entry.target);
                    _counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
    }
    counters.forEach(c => {
        if (c.dataset.counted || c.dataset.counterObserved) return;
        c.dataset.counterObserved = 'true';
        _counterObserver.observe(c);
        const rect = c.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            startCounter(c);
            _counterObserver.unobserve(c);
        }
    });
}

// FAQ Toggle
function toggleFAQ(element) {
    const faqItem = element.closest('.faq-item');
    if (faqItem) faqItem.classList.toggle('active');
}

// Contact Form Handler — inline banner instead of blocking alert
function handleContactSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const successMessage = form.getAttribute('data-success') || 'Thank you for your message!';
    form.reset();
    let banner = form.querySelector('.form-success');
    if (!banner) {
        banner = document.createElement('div');
        banner.className = 'form-success';
        banner.setAttribute('role', 'status');
        banner.setAttribute('aria-live', 'polite');
        form.appendChild(banner);
    }
    banner.textContent = successMessage;
    banner.classList.add('visible');
    clearTimeout(handleContactSubmit._t);
    handleContactSubmit._t = setTimeout(() => banner.classList.remove('visible'), 5000);
}

// Load Navigation
function loadNavigation() {
    const navContainer = document.getElementById('navContainer');
    const mobileMenu = document.getElementById('mobileMenu');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    if (navContainer) {
        navContainer.innerHTML = schoolData.navigation.map(item => {
            const isActive = currentPage === item.href;
            return `<li><a href="${item.href}" class="${isActive ? 'active' : ''}"${isActive ? ' aria-current="page"' : ''}>
                <i class="${item.icon}" aria-hidden="true"></i> ${item.label}
            </a></li>`;
        }).join('') + `<li><a href="admissions.html" class="apply-btn">Apply Now</a></li>`;
    }

    if (mobileMenu) {
        mobileMenu.innerHTML = schoolData.navigation.map(item => {
            const isActive = currentPage === item.href;
            return `<a href="${item.href}"${isActive ? ' aria-current="page"' : ''}>${item.label}</a>`;
        }).join('') + `<a href="admissions.html" class="apply-btn">Apply Now</a>`;
        mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileMenu));
    }
}

// Load Footer
function loadFooter() {
    const footerContainer = document.getElementById('footerContainer');
    if (!footerContainer) return;
    footerContainer.innerHTML = `
        <div class="container">
            <div class="footer-grid">
                <div class="footer-section">
                    <h4>${schoolData.footer.about.heading}</h4>
                    <p>${schoolData.footer.about.text}</p>
                    <div class="social-links">
                        ${schoolData.footer.social.map(s => {
                            const name = (s.icon.match(/fa-([a-z-]+)/) || [, 'social'])[1].replace(/-/g, ' ');
                            const label = name.charAt(0).toUpperCase() + name.slice(1);
                            return `<a href="${s.link}" aria-label="${label}" rel="noopener"><i class="${s.icon}" aria-hidden="true"></i></a>`;
                        }).join('')}
                    </div>
                </div>
                <div class="footer-section">
                    <h4>${schoolData.footer.quickLinks.heading}</h4>
                    <ul class="footer-links">
                        ${schoolData.footer.quickLinks.links.map(link => `
                            <li><a href="${link.href}">${link.text}</a></li>
                        `).join('')}
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>${schoolData.footer.contact.heading}</h4>
                    <ul class="footer-links">
                        ${schoolData.footer.contact.items.map(item => {
                            const isPhone = item.icon.includes('fa-phone');
                            const isEmail = item.icon.includes('fa-envelope');
                            let inner = item.text;
                            if (isPhone) {
                                const tel = item.text.replace(/[^+\d]/g, '');
                                inner = `<a href="tel:${tel}">${item.text}</a>`;
                            } else if (isEmail) {
                                inner = `<a href="mailto:${item.text}">${item.text}</a>`;
                            }
                            return `<li><i class="${item.icon}" aria-hidden="true"></i> ${inner}</li>`;
                        }).join('')}
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>${schoolData.footer.copyright}</p>
            </div>
        </div>
    `;
}

// Initialize Common Elements
document.addEventListener('DOMContentLoaded', () => {
    loadNavigation();
    loadFooter();
    initAnimations();
    initImageErrorHandling();
    // initialize global image allocator for galleries
    try {
        window._imageAllocator = new ImageAllocator(window.schoolData && window.schoolData.galleryImages ? window.schoolData.galleryImages : []);
        window.initGallery = initGallery;
    } catch (e) {
        console.warn('Gallery allocator init failed', e);
    }
});
