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

        // Prepend our premium Admissions Countdown and Seat Tracker Bar
        if (!document.getElementById('admissionsCountdownBanner')) {
            const countdownHTML = `
                <div id="admissionsCountdownBanner" class="countdown-banner container animate" style="margin-top: 50px;">
                    <div class="countdown-grid-container">
                        <div class="countdown-info-text">
                            <h3><i class="fas fa-clock" style="color: var(--secondary); margin-right: 6px;"></i> Admissions Enrollment Countdown</h3>
                            <p>Seats are filling up quickly for the 2026-2027 academic session. Secure your child's seat before final late-registration closure.</p>
                            
                            <div class="countdown-occupancy-wrapper" style="margin-top: 15px;">
                                <div style="display: flex; justify-content: space-between; font-size: 0.85em; font-weight: 700; color: var(--primary); margin-bottom: 6px;">
                                    <span>Seat Occupancy Rate:</span>
                                    <span style="color: var(--accent);">92% Filled (18 vacancies remaining)</span>
                                </div>
                                <div class="occupancy-track-bar">
                                    <div class="occupancy-fill-bar"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="countdown-clocks-wrapper">
                            <div class="clock-circle-item">
                                <svg class="clock-svg" viewBox="0 0 100 100">
                                    <circle class="clock-bg" cx="50" cy="50" r="42"></circle>
                                    <circle class="clock-progress" id="countdownCircleDays" cx="50" cy="50" r="42" style="stroke-dasharray: 264; stroke-dashoffset: 0;"></circle>
                                </svg>
                                <div class="clock-val-container">
                                    <span id="countdownDays" class="clock-val">00</span>
                                    <span class="clock-unit">Days</span>
                                </div>
                            </div>
                            <div class="clock-circle-item">
                                <svg class="clock-svg" viewBox="0 0 100 100">
                                    <circle class="clock-bg" cx="50" cy="50" r="42"></circle>
                                    <circle class="clock-progress" id="countdownCircleHours" cx="50" cy="50" r="42" style="stroke-dasharray: 264; stroke-dashoffset: 0;"></circle>
                                </svg>
                                <div class="clock-val-container">
                                    <span id="countdownHours" class="clock-val">00</span>
                                    <span class="clock-unit">Hours</span>
                                </div>
                            </div>
                            <div class="clock-circle-item">
                                <svg class="clock-svg" viewBox="0 0 100 100">
                                    <circle class="clock-bg" cx="50" cy="50" r="42"></circle>
                                    <circle class="clock-progress" id="countdownCircleMins" cx="50" cy="50" r="42" style="stroke-dasharray: 264; stroke-dashoffset: 0;"></circle>
                                </svg>
                                <div class="clock-val-container">
                                    <span id="countdownMins" class="clock-val">00</span>
                                    <span class="clock-unit">Mins</span>
                                </div>
                            </div>
                            <div class="clock-circle-item">
                                <svg class="clock-svg" viewBox="0 0 100 100">
                                    <circle class="clock-bg" cx="50" cy="50" r="42"></circle>
                                    <circle class="clock-progress" id="countdownCircleSecs" cx="50" cy="50" r="42" style="stroke-dasharray: 264; stroke-dashoffset: 0;"></circle>
                                </svg>
                                <div class="clock-val-container">
                                    <span id="countdownSecs" class="clock-val">00</span>
                                    <span class="clock-unit">Secs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            statsSection.insertAdjacentHTML('beforebegin', countdownHTML);
            initAdmissionsTimer();
        }
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

function initAdmissionsTimer() {
    // Target admissions late-registration closure: July 31, 2026
    const targetDate = new Date("July 31, 2026 23:59:59").getTime();
    
    const daysCircle = document.getElementById('countdownCircleDays');
    const hoursCircle = document.getElementById('countdownCircleHours');
    const minsCircle = document.getElementById('countdownCircleMins');
    const secsCircle = document.getElementById('countdownCircleSecs');
    
    const daysText = document.getElementById('countdownDays');
    const hoursText = document.getElementById('countdownHours');
    const minsText = document.getElementById('countdownMins');
    const secsText = document.getElementById('countdownSecs');
    
    const circ = 264; // Circumference matching r=42 SVG track circles (2 * PI * 42 = 263.89)
    
    function updateClocks() {
        const now = new Date().getTime();
        const diff = targetDate - now;
        
        if (diff <= 0) {
            if (daysText) daysText.textContent = "00";
            if (hoursText) hoursText.textContent = "00";
            if (minsText) minsText.textContent = "00";
            if (secsText) secsText.textContent = "00";
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);
        
        if (daysText) daysText.textContent = String(days).padStart(2, '0');
        if (hoursText) hoursText.textContent = String(hours).padStart(2, '0');
        if (minsText) minsText.textContent = String(mins).padStart(2, '0');
        if (secsText) secsText.textContent = String(secs).padStart(2, '0');
        
        // Days remaining out of maximum 60 days in our countdown loop
        const daysPercent = Math.min(days / 60, 1);
        if (daysCircle) daysCircle.style.strokeDashoffset = String(circ - (daysPercent * circ));
        
        const hoursPercent = hours / 24;
        if (hoursCircle) hoursCircle.style.strokeDashoffset = String(circ - (hoursPercent * circ));
        
        const minsPercent = mins / 60;
        if (minsCircle) minsCircle.style.strokeDashoffset = String(circ - (minsPercent * circ));
        
        const secsPercent = secs / 60;
        if (secsCircle) secsCircle.style.strokeDashoffset = String(circ - (secsPercent * circ));
    }
    
    updateClocks();
    setInterval(updateClocks, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    loadHomePage();
    initAnimations();
    initImageErrorHandling();
    initCounters();
});
