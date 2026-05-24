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
            <div class="testimonial-grid">
                ${schoolData.testimonials.items.map(testimonial => `
                    <div class="testimonial-card animate">
                        <p class="testimonial-text">"${testimonial.text}"</p>
                        <div class="testimonial-author">
                            <div class="author-avatar">${testimonial.initials}</div>
                            <div><strong>${testimonial.name}</strong><br><small>${testimonial.role}</small></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadHomePage();
    initAnimations();
    initImageErrorHandling();
    initCounters();
});
