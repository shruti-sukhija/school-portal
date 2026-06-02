// ============================================
// MAIN JAVASCRIPT - Common Functions
// ============================================

const DEFAULT_FALLBACK_IMAGE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'><rect width='100%' height='100%' fill='%231a3a5c'/><circle cx='400' cy='260' r='60' fill='%23e8a817' opacity='0.15'/><path d='M380 230 L420 230 L400 280 Z' fill='%23e8a817'/><text x='50%' y='390' font-family='system-ui, -apple-system, sans-serif' font-size='26' font-weight='bold' fill='%23e8a817' text-anchor='middle'>DRIS CAMPUS MEDIA</text><text x='50%' y='430' font-family='system-ui, -apple-system, sans-serif' font-size='14' fill='rgba(255,255,255,0.7)' text-anchor='middle'>Dev Rishi International School</text></svg>";

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
        img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
        if (img.complete) {
            img.classList.add('loaded');
            if (img.naturalWidth === 0) {
                handleImageError(img);
            }
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
    return `<div class="gallery-grid">${images.map(src => {
        const isVideo = src.toLowerCase().endsWith('.mp4');
        if (isVideo) {
            return `
                <div class="gallery-item video-item" onclick="openLightbox('${src}', 'video')">
                    <video src="${src}" autoplay muted loop playsinline></video>
                </div>
            `;
        }
        return `
            <div class="gallery-item" onclick="openLightbox('${src}', 'image')"><img src="${src}" loading="lazy" onerror="handleImageError(this)"></div>
        `;
    }).join('')}</div>`;
}

// Lightbox / Full View Functions
function openLightbox(src, type) {
    let modal = document.getElementById('lightboxModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'lightboxModal';
        modal.className = 'lightbox-modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-label', 'Media Full View');
        modal.setAttribute('aria-modal', 'true');
        modal.innerHTML = `
            <button class="lightbox-close" aria-label="Close full view" onclick="closeLightbox()"><i class="fas fa-times" aria-hidden="true"></i></button>
            <div class="lightbox-content" id="lightboxContent"></div>
        `;
        document.body.appendChild(modal);
        
        // Close modal when clicking outside the media content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeLightbox();
        });
    }
    
    const content = document.getElementById('lightboxContent');
    if (type === 'video') {
        content.innerHTML = `<video src="${src}" controls autoplay loop playsinline class="lightbox-media"></video>`;
    } else if (type === 'pdf') {
        content.innerHTML = `<iframe src="${src}" class="lightbox-media lightbox-iframe" title="Document Preview"></iframe>`;
    } else {
        content.innerHTML = `<img src="${src}" alt="Full view" class="lightbox-media" onerror="handleImageError(this)">`;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Disable body scroll
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    if (modal) {
        modal.classList.remove('active');
        const content = document.getElementById('lightboxContent');
        if (content) content.innerHTML = ''; // Terminate media playback
        document.body.style.overflow = ''; // Restore body scroll
    }
}

// Global Keyboard controls
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

// Public helper to initialize a gallery inside an element by id
function initGallery(containerId, count = 6) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Extract the category name (e.g. 'aboutGallery' -> 'about')
    const category = containerId.replace('Gallery', '');
    
    // Resolve the category pool or fallback to a flat list
    let pool = [];
    if (window.schoolData && window.schoolData.galleryImages) {
        if (window.schoolData.galleryImages[category]) {
            pool = window.schoolData.galleryImages[category];
        } else if (Array.isArray(window.schoolData.galleryImages)) {
            pool = window.schoolData.galleryImages;
        }
    }

    if (!pool || !pool.length) return;

    // Instantiate an allocator specifically for this page category
    const allocator = new ImageAllocator(pool);
    const images = allocator.get(count);

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

    const navbar = document.getElementById('navbar');
    if (navbar && !document.getElementById('announcementBar') && window.schoolData && window.schoolData.announcements && window.schoolData.announcements.length) {
        const bar = document.createElement('div');
        bar.id = 'announcementBar';
        bar.className = 'announcement-bar';
        bar.innerHTML = `
            <div class="ticker-wrapper container">
                <div class="ticker-label"><i class="fas fa-bullhorn" aria-hidden="true"></i> Announcements</div>
                <div class="ticker-content">
                    <div class="ticker-items">
                        ${schoolData.announcements.map(ann => `<span class="ticker-item">${ann}</span>`).join(' <i class="fas fa-star" aria-hidden="true" style="margin: 0 15px; font-size: 0.8em; color: var(--secondary);"></i> ')}
                    </div>
                </div>
            </div>
        `;
        navbar.prepend(bar);
    }

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

    // Theme Switcher Injection
    const navCont = document.querySelector('.nav-container');
    if (navCont && !document.getElementById('themeToggleBtn')) {
        const toggle = document.createElement('button');
        toggle.id = 'themeToggleBtn';
        toggle.className = 'theme-toggle-btn';
        toggle.setAttribute('aria-label', 'Toggle light/dark theme');
        toggle.setAttribute('type', 'button');
        toggle.innerHTML = `<i class="fas fa-moon" aria-hidden="true"></i>`;
        
        // Insert right before hamburger button
        const hamburger = navCont.querySelector('.hamburger');
        if (hamburger) {
            navCont.insertBefore(toggle, hamburger);
        } else {
            navCont.appendChild(toggle);
        }
        
        toggle.addEventListener('click', toggleTheme);
        updateThemeToggleIcon(document.documentElement.getAttribute('data-theme') || 'light');
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
                        <li><i class="fas fa-clock" aria-hidden="true"></i> Office Hours: 8:00 AM - 2:00 PM <div class="office-hours-status-container" style="margin-left: 20px;"></div></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>${schoolData.footer.copyright.replace(/202\d/, new Date().getFullYear())}</p>
            </div>
        </div>
    `;
}

// Preloader setup (injects immediately as script parses, before assets block rendering)
(function() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }
    const loader = document.createElement('div');
    loader.className = 'preloader';
    loader.id = 'sitePreloader';
    loader.innerHTML = `
        <div class="preloader-emblem">
            <i class="fas fa-graduation-cap" aria-hidden="true"></i>
        </div>
        <div class="preloader-spinner"></div>
        <div class="preloader-text">Dev Rishi Int. School</div>
    `;
    document.body.appendChild(loader);

    const fadeOut = () => {
        loader.classList.add('fade-out');
        setTimeout(() => {
            if (loader.parentNode) loader.parentNode.removeChild(loader);
        }, 600);
    };

    window.addEventListener('load', fadeOut);
    // Timeout backup (2.5s max)
    setTimeout(() => {
        if (document.getElementById('sitePreloader')) fadeOut();
    }, 2500);
})();

// Smart scroll triggers (Navbar hide-reveal & Back-to-Top show)
function initSmartScroll() {
    let lastScrollY = window.scrollY;
    const threshold = 8;
    
    // Inject Back-to-Top button
    const topBtn = document.createElement('button');
    topBtn.className = 'back-to-top';
    topBtn.id = 'backToTopBtn';
    topBtn.setAttribute('aria-label', 'Scroll back to top');
    topBtn.innerHTML = `<i class="fas fa-chevron-up" aria-hidden="true"></i>`;
    document.body.appendChild(topBtn);

    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const navbar = document.getElementById('navbar');
        
        // Back-to-top visibility
        if (currentScrollY > 300) {
            topBtn.classList.add('active');
        } else {
            topBtn.classList.remove('active');
        }

        // Smart navbar hide/reveal
        if (navbar) {
            if (Math.abs(currentScrollY - lastScrollY) >= threshold) {
                if (currentScrollY > lastScrollY && currentScrollY > 150) {
                    navbar.classList.add('nav-hidden');
                } else {
                    navbar.classList.remove('nav-hidden');
                }
                lastScrollY = currentScrollY;
            }
        }
    }, { passive: true });
}

// Theme management functions
function initTheme() {
    const savedTheme = localStorage.getItem('dris-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('dris-theme', nextTheme);
    updateThemeToggleIcon(nextTheme);
}

function updateThemeToggleIcon(theme) {
    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
        const icon = btn.querySelector('i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

// WhatsApp Quick-Inquiry Badge Injection
function initInquiryBadge() {
    if (document.getElementById('whatsappInquiryBadge')) return;
    const badge = document.createElement('a');
    badge.id = 'whatsappInquiryBadge';
    badge.className = 'whatsapp-inquiry-badge';
    badge.href = 'https://wa.me/917037535234';
    badge.target = '_blank';
    badge.rel = 'noopener noreferrer';
    badge.setAttribute('aria-label', 'Inquire on WhatsApp');
    badge.innerHTML = `
        <div class="whatsapp-badge-pulse"></div>
        <i class="fab fa-whatsapp" aria-hidden="true"></i>
        <span>Quick Inquiry</span>
    `;
    document.body.appendChild(badge);
}

// Immediately initialize theme state during parsing to prevent visual flashing
initTheme();

// Live Office Hours Status Checker
function initLiveOfficeHours() {
    const checkOpen = () => {
        const now = new Date();
        const day = now.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday
        const hour = now.getHours();
        const min = now.getMinutes();
        
        const isSunday = day === 0;
        const timeInMinutes = hour * 60 + min;
        const openTime = 8 * 60; // 8:00 AM
        const closeTime = 14 * 60; // 2:00 PM
        
        let isOpen = false;
        let statusText = "";
        let badgeClass = "";
        
        if (isSunday) {
            isOpen = false;
            statusText = "Closed (Opens Monday at 8:00 AM)";
            badgeClass = "office-closed";
        } else if (timeInMinutes >= openTime && timeInMinutes < closeTime) {
            isOpen = true;
            statusText = "Open Now (Office closes at 2:00 PM)";
            badgeClass = "office-open";
        } else {
            isOpen = false;
            badgeClass = "office-closed";
            if (day === 6) { // Saturday afternoon
                statusText = "Closed (Opens Monday at 8:00 AM)";
            } else {
                statusText = "Closed (Opens tomorrow at 8:00 AM)";
            }
        }
        
        document.querySelectorAll('.office-hours-status-container').forEach(el => {
            el.innerHTML = `<span class="office-hours-badge ${badgeClass}"><span class="badge-dot"></span> ${statusText}</span>`;
        });
    };
    
    checkOpen();
    setInterval(checkOpen, 60000); // Check once per minute
}

// Copy to Clipboard Utility with visual checkmark bubble
function initCopyToClipboard() {
    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="tel:"], a[href^="mailto:"]');
        if (!link) return;

        const text = link.textContent.trim();
        const isEmail = text.includes('@') || link.href.startsWith('mailto:');
        const isPhone = text.includes('+91') || link.href.startsWith('tel:');
        
        if (!isEmail && !isPhone) return;
        
        // Prevent navigating immediately so copying can finish, unless standard link
        e.preventDefault();

        const cleanText = isEmail 
            ? (text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/) || [text])[0]
            : (text.match(/\+?\d[\d\s-]{8,14}/) || [text])[0];

        navigator.clipboard.writeText(cleanText).then(() => {
            let tooltip = document.getElementById('clipboardTooltip');
            if (!tooltip) {
                tooltip = document.createElement('div');
                tooltip.id = 'clipboardTooltip';
                tooltip.className = 'clipboard-tooltip';
                document.body.appendChild(tooltip);
            }
            tooltip.innerHTML = `<i class="fas fa-check-circle" style="color: #25d366; margin-right: 6px;"></i> Copied to Clipboard!`;
            tooltip.classList.add('visible');
            
            tooltip.style.left = `${e.pageX}px`;
            tooltip.style.top = `${e.pageY - 40}px`;

            clearTimeout(initCopyToClipboard._t);
            initCopyToClipboard._t = setTimeout(() => {
                tooltip.classList.remove('visible');
            }, 2000);
        }).catch(err => {
            console.warn('Could not copy to clipboard automatically', err);
            // Fallback: trigger standard href navigation
            window.location.href = link.href;
        });
    });
}

// Immediately initialize theme state during parsing to prevent visual flashing
initTheme();

// Branded Help Desk Assistant (Global Floating Chat Widget)
function initHelpDesk() {
    if (document.getElementById('helpDeskBadge')) return;
    
    // Inject Help Desk Badge and Panel
    const helpContainer = document.createElement('div');
    helpContainer.id = 'helpDeskContainer';
    helpContainer.className = 'help-desk-container';
    helpContainer.innerHTML = `
        <button id="helpDeskBadge" class="help-desk-badge" aria-label="Open Campus Help Desk" type="button">
            <i class="fas fa-headset" aria-hidden="true"></i>
            <span class="badge-ping"></span>
        </button>
        <div id="helpDeskPanel" class="help-desk-panel">
            <div class="chat-header">
                <div class="chat-operator-avatar">
                    <i class="fas fa-graduation-cap" aria-hidden="true"></i>
                </div>
                <div style="text-align: left; flex: 1;">
                    <strong style="display: block; font-size: 0.95em;">DRIS Help Desk</strong>
                    <div class="chat-status-indicator" id="chatStatusText" style="font-size: 0.75em; font-weight: 600; display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                        <span class="status-indicator-dot"></span> Loading...
                    </div>
                </div>
                <button class="chat-panel-close" aria-label="Close help desk" onclick="toggleHelpDeskPanel()"><i class="fas fa-times" aria-hidden="true"></i></button>
            </div>
            <div class="chat-feed" id="chatFeed">
                <div class="chat-msg operator">
                    <p>Namaste! Welcome to Dev Rishi International School. I am your campus assistant. How can I help you today?</p>
                </div>
            </div>
            <div class="chat-pills-container" id="chatPills">
                <button class="chat-pill" onclick="askHelpDesk(0)" type="button">How do I apply for admission?</button>
                <button class="chat-pill" onclick="askHelpDesk(1)" type="button">Show me school tuition fees</button>
                <button class="chat-pill" onclick="askHelpDesk(2)" type="button">Is the office open right now?</button>
                <button class="chat-pill" onclick="askHelpDesk(3)" type="button">Tell me about the NCC wing & sports</button>
                <button class="chat-pill" onclick="askHelpDesk(4)" type="button">Where is the campus located?</button>
            </div>
        </div>
    `;
    document.body.appendChild(helpContainer);
    
    const badge = document.getElementById('helpDeskBadge');
    if (badge) badge.addEventListener('click', toggleHelpDeskPanel);
    
    // Live update help desk status bar based on office open hours
    updateChatStatusHeader();
}

function updateChatStatusHeader() {
    const statusText = document.getElementById('chatStatusText');
    if (!statusText) return;
    
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const min = now.getMinutes();
    
    const isSunday = day === 0;
    const timeInMinutes = hour * 60 + min;
    const openTime = 8 * 60; // 8:00 AM
    const closeTime = 14 * 60; // 2:00 PM
    
    let isOpen = false;
    if (!isSunday && timeInMinutes >= openTime && timeInMinutes < closeTime) {
        isOpen = true;
    }
    
    const dot = statusText.querySelector('.status-indicator-dot');
    if (isOpen) {
        statusText.innerHTML = `<span class="status-indicator-dot" style="width: 8px; height: 8px; border-radius: 50%; display: inline-block; background: %2325d366; background-color: #25d366; box-shadow: 0 0 8px #25d366;"></span> Support Active (Online)`;
        statusText.style.color = '#25d366';
    } else {
        statusText.innerHTML = `<span class="status-indicator-dot" style="width: 8px; height: 8px; border-radius: 50%; display: inline-block; background: %23ff9f43; background-color: #ff9f43;"></span> Office Offline (Leave message)`;
        statusText.style.color = '#ff9f43';
    }
}

function toggleHelpDeskPanel() {
    const panel = document.getElementById('helpDeskPanel');
    const badge = document.getElementById('helpDeskBadge');
    if (panel) {
        panel.classList.toggle('active');
        if (panel.classList.contains('active')) {
            const feed = document.getElementById('chatFeed');
            if (feed) feed.scrollTop = feed.scrollHeight;
            if (badge) {
                const ping = badge.querySelector('.badge-ping');
                if (ping) ping.style.display = 'none'; // Dismiss ping notification when opened
            }
        }
    }
}
window.toggleHelpDeskPanel = toggleHelpDeskPanel;

function askHelpDesk(idx) {
    const feed = document.getElementById('chatFeed');
    const pillsContainer = document.getElementById('chatPills');
    if (!feed || !pillsContainer) return;
    
    const questions = [
        "How do I apply for admission?",
        "Show me school tuition fees",
        "Is the office open right now?",
        "Tell me about the NCC wing & sports",
        "Where is the campus located?"
    ];
    
    // Temporarily hide pills to prevent spamming
    pillsContainer.style.pointerEvents = 'none';
    pillsContainer.style.opacity = '0.5';
    
    // Push visitor question bubble
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-msg visitor';
    userMsg.innerHTML = `<p>${questions[idx]}</p>`;
    feed.appendChild(userMsg);
    feed.scrollTop = feed.scrollHeight;
    
    // Push Typing Indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'chat-msg operator typing';
    typingIndicator.id = 'chatTypingIndicator';
    typingIndicator.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;
    feed.appendChild(typingIndicator);
    feed.scrollTop = feed.scrollHeight;
    
    setTimeout(() => {
        // Remove typing indicator
        const indicator = document.getElementById('chatTypingIndicator');
        if (indicator) indicator.remove();
        
        // Formulate dynamic answers
        let answer = '';
        if (idx === 0) {
            answer = `
                <p>Applying is easy! Dev Rishi admissions are open for Play up to XII (Session 2026-27). Here are the steps:</p>
                <ol style="margin-left: 15px; margin-top: 8px; font-size: 0.9em; display: grid; gap: 4px; padding-left: 5px;">
                    <li>Collect application form from the Sarsawa Road campus.</li>
                    <li>Submit ID proof, passport photos, and transfer certificates.</li>
                    <li>Take a diagnostic entry test (Class I+).</li>
                    <li>Meet the Principal for final approval.</li>
                </ol>
                <a href="admissions.html" class="apply-btn" style="padding: 6px 14px !important; font-size: 0.85em; display: inline-block; margin-top: 8px; border: none; cursor: pointer; color: white !important;">Admissions Portal</a>
            `;
        } else if (idx === 1) {
            answer = `
                <p>Tuition fees at DRIS are highly competitive, starting at just ₹1,000/month for pre-primary classes.</p>
                <p style="margin-top: 5px;">We have a <strong>Dynamic Annual Fee Estimator</strong> ready on our admissions page! You can toggle transport, NCC uniforms, and choose specific grades to calculate exact totals instantly.</p>
                <a href="admissions.html#feesSection" class="apply-btn" style="padding: 6px 14px !important; font-size: 0.85em; display: inline-block; margin-top: 8px; border: none; cursor: pointer; color: white !important;">Calculate My Fees</a>
            `;
        } else if (idx === 2) {
            // Check dynamic office hours status
            const now = new Date();
            const day = now.getDay();
            const hour = now.getHours();
            const min = now.getMinutes();
            const isSunday = day === 0;
            const timeInMinutes = hour * 60 + min;
            const openTime = 8 * 60;
            const closeTime = 14 * 60;
            
            let status = "";
            if (isSunday) {
                status = "Closed for Sunday. Our administrative team will return on Monday morning at 8:00 AM.";
            } else if (timeInMinutes >= openTime && timeInMinutes < closeTime) {
                status = "Open Now! You are welcome to visit our reception or dial +91 7037535234 to connect with us immediately.";
            } else {
                status = "Closed. Our standard working hours are Monday - Saturday, 8:00 AM - 2:00 PM.";
            }
            
            answer = `<p><strong>Office Status:</strong> ${status}</p>`;
        } else if (idx === 3) {
            answer = `
                <p>We believe in character development! Dev Rishi offers outstanding co-curricular facilities:</p>
                <ul style="margin-left: 15px; margin-top: 8px; font-size: 0.9em; display: grid; gap: 4px; padding-left: 5px;">
                    <li><strong>NCC Cadets Wing:</strong> Official drill training, social campaigns, and camp exercises.</li>
                    <li><strong>Indoor Shooting Range:</strong> State-of-the-art rifle and pistol lanes for concentration and zonal tournaments.</li>
                    <li><strong>Advanced Robotics Lab:</strong> AI clubs, circuitry, and hands-on mechanical designs.</li>
                </ul>
            `;
        } else if (idx === 4) {
            answer = `
                <p>Our beautiful campus is located in Saharanpur, Uttar Pradesh.</p>
                <p style="margin-top: 5px;"><strong>Address:</strong> Nakur Sarsawa Road, only 3 km from Nakur.</p>
                <p style="margin-top: 5px;">You can view the campus map and generate driving routes from your exact starting city using our Location Assistant!</p>
                <a href="contact.html#contactMapContainer" class="apply-btn" style="padding: 6px 14px !important; font-size: 0.85em; display: inline-block; margin-top: 8px; border: none; cursor: pointer; color: white !important;">Campus Map & Route</a>
            `;
        }
        
        const responseMsg = document.createElement('div');
        responseMsg.className = 'chat-msg operator';
        responseMsg.innerHTML = answer;
        feed.appendChild(responseMsg);
        feed.scrollTop = feed.scrollHeight;
        
        // Re-enable pills
        pillsContainer.style.pointerEvents = 'auto';
        pillsContainer.style.opacity = '1';
    }, 900);
}
window.askHelpDesk = askHelpDesk;

// Initialize Common Elements
document.addEventListener('DOMContentLoaded', () => {
    loadNavigation();
    loadFooter();
    initAnimations();
    initImageErrorHandling();
    initSmartScroll();
    initInquiryBadge();
    initLiveOfficeHours();
    initCopyToClipboard();
    initHelpDesk();
    
    // initialize global image allocator for galleries
    try {
        window._imageAllocator = new ImageAllocator(window.schoolData && window.schoolData.galleryImages ? window.schoolData.galleryImages : []);
        window.initGallery = initGallery;
    } catch (e) {
        console.warn('Gallery allocator init failed', e);
    }
});
