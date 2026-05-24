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
            <div class="features-grid">
                ${schoolData.aboutPage.leadership.members.map(member => `
                    <div class="feature-card animate">
                        <div class="feature-icon"><i class="${member.icon}" aria-hidden="true"></i></div>
                        <h3>${member.name}</h3>
                        <p><strong>${member.position}</strong></p>
                        <p>${member.bio}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    const facilitiesSection = document.getElementById('facilitiesSection');
    if (facilitiesSection) {
        facilitiesSection.innerHTML = `
            <div class="section-header"><h2>${schoolData.aboutPage.facilities.heading}</h2></div>
            <div class="features-grid">
                ${schoolData.aboutPage.facilities.items.map(facility => `
                    <div class="feature-card animate">
                        <div class="feature-icon"><i class="${facility.icon}" aria-hidden="true"></i></div>
                        <h3>${facility.name}</h3>
                        <p>${facility.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadAboutPage();
    initAnimations();
    initImageErrorHandling();
});
