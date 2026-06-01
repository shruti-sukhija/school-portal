// ============================================
// ABOUT PAGE - Dynamic Content Loader
// ============================================

function loadAboutPage() {
    document.title = "About Us — " + schoolData.name;

    const pageHeader = document.getElementById('pageHeader');
    if (pageHeader) {
        pageHeader.innerHTML = `
            <h1>${schoolData.aboutPage.header.title}</h1>
            <p>${schoolData.aboutPage.header.subtitle}</p>
        `;
    }

    const storySection = document.getElementById('storySection');
    if (storySection) {
        storySection.innerHTML = `
            <div class="about-content">
                <div class="about-image animate">
                    <img src="${schoolData.getImage('about')}" alt="Campus" loading="lazy" width="800" height="600">
                </div>
                <div class="about-text animate">
                    <h3>${schoolData.aboutPage.story.heading}</h3>
                    <p>${schoolData.aboutPage.story.text}</p>
                </div>
            </div>
        `;
    }

    const leadershipSection = document.getElementById('leadershipSection');
    if (leadershipSection) {
        leadershipSection.innerHTML = `
            <div class="section-header"><h2>${schoolData.aboutPage.leadership.heading}</h2></div>
            <div class="features-grid leadership-grid">
                ${schoolData.aboutPage.leadership.members.map(member => `
                    <div class="feature-card leadership-card animate">
                        <div class="leadership-image-wrapper">
                            ${member.image ? `<img src="${member.image}" alt="${member.name}" class="leadership-img" onerror="handleImageError(this)">` : `<div class="feature-icon"><i class="${member.icon}" aria-hidden="true"></i></div>`}
                        </div>
                        <div class="leadership-details">
                            <h3>${member.name}</h3>
                            <span class="leadership-position">${member.position}</span>
                            <p class="leadership-bio">${member.bio}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    const facilitiesSection = document.getElementById('facilitiesSection');
    if (facilitiesSection) {
        facilitiesSection.innerHTML = `
            <div class="section-header"><h2>${schoolData.aboutPage.facilities.heading}</h2></div>
            <div class="features-grid facilities-grid">
                ${schoolData.aboutPage.facilities.items.map(facility => `
                    <div class="feature-card facility-card animate">
                        <div class="facility-image-wrapper">
                            ${facility.image ? `<img src="${facility.image}" alt="${facility.name}" class="facility-img" onerror="handleImageError(this)">` : `<div class="feature-icon"><i class="${facility.icon}" aria-hidden="true"></i></div>`}
                        </div>
                        <div class="facility-details">
                            <h3>${facility.name}</h3>
                            <p>${facility.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        // Append a gallery section after facilities if available
        const parentSection = facilitiesSection.closest('section');
        if (parentSection && !document.getElementById('aboutGallery')) {
            parentSection.insertAdjacentHTML('afterend', `<section><div class="container" id="aboutGallery"></div></section>`);
            if (window.initGallery) window.initGallery('aboutGallery', 8);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadAboutPage();
    initAnimations();
    initImageErrorHandling();
});
