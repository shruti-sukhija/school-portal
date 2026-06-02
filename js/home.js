// ============================================
// HOME PAGE - Dynamic Content Loader
// ============================================

function loadHomePage() {
    document.title = "Home — " + schoolData.name;

    const heroSection = document.getElementById('heroSection');
    if (heroSection) {
        heroSection.innerHTML = `
            <section class="hero" style="background: linear-gradient(135deg, rgba(26,58,92,0.9), rgba(13,107,110,0.8)), url('${schoolData.getImage('hero')}') center/cover;">
                <div class="hero-content">
                    <h1>${schoolData.hero.title}</h1>
                    <p>${schoolData.hero.subtitle}</p>
                    <div class="hero-buttons">
                        ${schoolData.hero.buttons.map(btn => `<a href="${btn.link}" class="${btn.class}">${btn.text}</a>`).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    const statsSection = document.getElementById('statsSection');
    if (statsSection) {
        statsSection.innerHTML = schoolData.stats.map(stat => `
            <div class="stat-item">
                <span class="stat-number" data-target="${stat.number}" data-suffix="${stat.suffix}">0</span>
                <span class="stat-label">${stat.label}</span>
            </div>
        `).join('');
    }

    const featuresSection = document.getElementById('featuresSection');
    if (featuresSection) {
        featuresSection.innerHTML = `
            <div class="section-header">
                <h2>${schoolData.features.heading}</h2>
                <p>${schoolData.features.subheading}</p>
            </div>
            <div class="features-grid">
                ${schoolData.features.items.map(feature => `
                    <div class="feature-card animate">
                        <div class="feature-icon"><i class="${feature.icon}" aria-hidden="true"></i></div>
                        <h3>${feature.title}</h3>
                        <p>${feature.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    const aboutSection = document.getElementById('aboutSection');
    if (aboutSection) {
        aboutSection.innerHTML = `
            <div class="about-content">
                <div class="about-image animate">
                    <img src="${schoolData.getImage('about')}" alt="About ${schoolData.shortName}" loading="lazy" width="800" height="600">
                </div>
                <div class="about-text animate">
                    <h3>${schoolData.aboutPreview.heading}</h3>
                    <p>${schoolData.aboutPreview.text}</p>
                    <br>
                    <a href="${schoolData.aboutPreview.buttonLink}" class="btn-primary">${schoolData.aboutPreview.buttonText}</a>
                </div>
            </div>
        `;
    }

    const eventsSection = document.getElementById('eventsSection');
    if (eventsSection) {
        const previewEvents = schoolData.events.slice(0, schoolData.eventsPreview.showCount);
        eventsSection.innerHTML = `
            <div class="section-header">
                <h2>${schoolData.eventsPreview.heading}</h2>
                <p>${schoolData.eventsPreview.subheading}</p>
            </div>
            <div class="events-grid">
                ${previewEvents.map((event, idx) => `
                    <div class="event-card animate">
                        <div class="event-image">
                            <img src="${schoolData.getImage('event', idx)}" alt="${event.title}" loading="lazy" width="600" height="400">
                        </div>
                        <div class="event-details">
                            <span class="event-date"><i class="far fa-calendar" aria-hidden="true"></i> ${event.date}</span>
                            <h4>${event.title}</h4>
                            <p>${event.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div style="text-align: center; margin-top: 30px;">
                <a href="${schoolData.eventsPreview.buttonLink}" class="btn-primary">${schoolData.eventsPreview.buttonText}</a>
            </div>
        `;
    }

    const testimonialsSection = document.getElementById('testimonialsSection');
    if (testimonialsSection) {
        testimonialsSection.innerHTML = `
            <div class="section-header">
                <h2>${schoolData.testimonials.heading}</h2>
                <p>${schoolData.testimonials.subheading}</p>
            </div>
            <div class="testimonial-carousel-container animate" id="testimonialCarousel">
                <div class="testimonial-slider" id="testimonialSlider">
                    ${schoolData.testimonials.items.map((testimonial, idx) => `
                        <div class="testimonial-slide ${idx === 0 ? 'active-slide' : ''}" data-index="${idx}">
                            <div class="testimonial-card" style="margin: 0 auto; max-width: 800px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px); padding: 35px 25px; border-radius: 15px;">
                                <p class="testimonial-text" style="font-size: 1.15em; line-height: 1.8; text-align: center; color: rgba(255,255,255,0.95); font-style: italic;">"${testimonial.text}"</p>
                                <div class="testimonial-author" style="justify-content: center; margin-top: 25px; gap: 15px; display: flex; align-items: center;">
                                    <div class="author-avatar" style="border: 2px solid var(--secondary); background: var(--secondary); color: var(--primary); font-weight: 700;">${testimonial.initials}</div>
                                    <div style="text-align: left;"><strong>${testimonial.name}</strong><br><small style="color: rgba(255,255,255,0.7); font-size: 0.8em; font-weight: 500;">${testimonial.role}</small></div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="testimonial-carousel-controls">
                    <button class="carousel-arrow" id="prevSlide" aria-label="Previous parent review" type="button"><i class="fas fa-chevron-left" aria-hidden="true"></i></button>
                    <div class="carousel-dots" id="carouselDots">
                        ${schoolData.testimonials.items.map((_, idx) => `
                            <button class="carousel-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Go to slide ${idx + 1}" type="button"></button>
                        `).join('')}
                    </div>
                    <button class="carousel-arrow" id="nextSlide" aria-label="Next parent review" type="button"><i class="fas fa-chevron-right" aria-hidden="true"></i></button>
                </div>
            </div>
        `;

        initTestimonialCarousel();
    }

    // Inject floating dismissible admissions alert card
    setTimeout(() => {
        if (document.getElementById('admissionsAlertCard')) return;
        const alertCard = document.createElement('div');
        alertCard.id = 'admissionsAlertCard';
        alertCard.className = 'floating-alert-card';
        alertCard.innerHTML = `
            <button class="alert-close-btn" onclick="dismissAdmissionsAlert()" aria-label="Dismiss alert"><i class="fas fa-times" aria-hidden="true"></i></button>
            <div class="alert-icon"><i class="fas fa-bell" aria-hidden="true"></i></div>
            <div class="alert-content">
                <h4 style="margin: 0 0 5px 0; color: var(--primary); font-size: 1.1em; font-weight: 700;">Admissions Open!</h4>
                <p style="margin: 0; font-size: 0.85em; line-height: 1.5; color: var(--text);">Secure a bright future for your child. Enrollments are now active for Academic Session 2026-27 (Play to XII).</p>
                <a href="admissions.html" class="apply-btn" style="padding: 6px 16px !important; font-size: 0.85em; display: inline-block; margin-top: 8px; border: none; cursor: pointer;">Explore Admissions</a>
            </div>
        `;
        document.body.appendChild(alertCard);
        
        // Trigger entrance animation
        setTimeout(() => alertCard.classList.add('visible'), 100);
    }, 2500);
}

function initTestimonialCarousel() {
    const slider = document.getElementById('testimonialSlider');
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const carouselContainer = document.getElementById('testimonialCarousel');
    
    if (!slider || !slides.length) return;
    
    let currentIndex = 0;
    let autoPlayTimer = null;
    const totalSlides = slides.length;
    
    function goToSlide(index) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        
        currentIndex = index;
        
        // Toggle active slide visibility class
        slides.forEach((slide, idx) => {
            if (idx === currentIndex) {
                slide.classList.add('active-slide');
            } else {
                slide.classList.remove('active-slide');
            }
        });
        
        // Shift slider position
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots state
        dots.forEach((dot, idx) => {
            if (idx === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    function startAutoPlay() {
        stopAutoPlay();
        autoPlayTimer = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 6000);
    }
    
    function stopAutoPlay() {
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer);
            autoPlayTimer = null;
        }
    }
    
    if (prevBtn) prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        startAutoPlay();
    });
    
    if (nextBtn) nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        startAutoPlay();
    });
    
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            goToSlide(idx);
            startAutoPlay();
        });
    });
    
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoPlay);
        carouselContainer.addEventListener('mouseleave', startAutoPlay);
    }
    
    startAutoPlay();
}

function dismissAdmissionsAlert() {
    const card = document.getElementById('admissionsAlertCard');
    if (card) {
        card.classList.remove('visible');
        setTimeout(() => card.remove(), 400);
    }
}
window.dismissAdmissionsAlert = dismissAdmissionsAlert;

document.addEventListener('DOMContentLoaded', () => {
    loadHomePage();
    initAnimations();
    initImageErrorHandling();
    initCounters();
});
