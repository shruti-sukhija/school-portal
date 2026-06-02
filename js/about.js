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

            <!-- Vision & Mission Side-by-Side Cards -->
            ${schoolData.aboutPage.visionMission ? `
            <div class="features-grid vision-mission-grid animate" style="margin-top: 50px; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 30px;">
                <div class="feature-card vision-card animate" style="text-align: left; padding: 35px; border-radius: 15px; border-top: 4px solid var(--secondary); box-shadow: var(--shadow);">
                    <div class="feature-icon" style="margin: 0 0 20px 0;"><i class="${schoolData.aboutPage.visionMission.vision.icon}" aria-hidden="true"></i></div>
                    <h3 style="color: var(--primary); font-size: 1.5em; margin-bottom: 15px;">${schoolData.aboutPage.visionMission.vision.heading}</h3>
                    <p style="color: var(--text); line-height: 1.7; font-size: 1em;">${schoolData.aboutPage.visionMission.vision.text}</p>
                </div>
                <div class="feature-card mission-card animate" style="text-align: left; padding: 35px; border-radius: 15px; border-top: 4px solid var(--accent); box-shadow: var(--shadow);">
                    <div class="feature-icon" style="margin: 0 0 20px 0; background: linear-gradient(135deg, var(--accent), var(--primary));"><i class="${schoolData.aboutPage.visionMission.mission.icon}" aria-hidden="true"></i></div>
                    <h3 style="color: var(--primary); font-size: 1.5em; margin-bottom: 15px;">${schoolData.aboutPage.visionMission.mission.heading}</h3>
                    <p style="color: var(--text); line-height: 1.7; font-size: 1em;">${schoolData.aboutPage.visionMission.mission.text}</p>
                </div>
            </div>
            ` : ''}

            <!-- Principal's Welcome Desk Panel -->
            ${schoolData.aboutPage.principalMessage ? `
            <div class="principal-showcase animate">
                <div class="principal-showcase-image">
                    <img src="${schoolData.aboutPage.principalMessage.image}" alt="${schoolData.aboutPage.principalMessage.name}" onerror="handleImageError(this)">
                </div>
                <div class="principal-showcase-text">
                    <h3>${schoolData.aboutPage.principalMessage.heading}</h3>
                    <span class="principal-showcase-subtitle">
                        ${schoolData.aboutPage.principalMessage.name} &nbsp;|&nbsp; <small>${schoolData.aboutPage.principalMessage.credentials}</small>
                    </span>
                    <div class="principal-message-content">
                        ${schoolData.aboutPage.principalMessage.message.split('\n\n').map(p => `<p>"${p}"</p>`).join('')}
                    </div>
                </div>
            </div>
            ` : ''}
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

            ${schoolData.aboutPage.staff ? `
            <div class="staff-showcase animate">
                <div class="staff-showcase-info">
                    <h3>${schoolData.aboutPage.staff.heading}</h3>
                    <p>${schoolData.aboutPage.staff.description}</p>
                </div>
                <div class="staff-image-wrapper">
                    <img src="${schoolData.aboutPage.staff.image}" alt="Excellence Academy Complete Staff and Faculty Team" loading="lazy" onerror="handleImageError(this)">
                </div>
            </div>
            ` : ''}
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
        // Append CBSE Public Disclosures section dynamically if available in data
        const parentSection = facilitiesSection.closest('section');
        if (parentSection) {
            if (schoolData.aboutPage.disclosures && !document.getElementById('disclosureSection')) {
                parentSection.insertAdjacentHTML('afterend', `
                    <section style="background: var(--light);">
                        <div class="container" id="disclosureSection">
                            <div class="section-header">
                                <h2>${schoolData.aboutPage.disclosures.heading}</h2>
                                <p style="max-width: 800px; margin: 20px auto 0;">${schoolData.aboutPage.disclosures.description}</p>
                            </div>
                            <div class="features-grid disclosure-grid" style="grid-template-columns: repeat(auto-fit, minmax(285px, 1fr)); gap: 20px;">
                                ${schoolData.aboutPage.disclosures.items.map(doc => `
                                    <div class="feature-card disclosure-card animate" style="text-align: left; padding: 24px; border-radius: 12px; display: flex; flex-direction: column; justify-content: space-between; border-left: 4px solid var(--secondary);">
                                        <div>
                                            <span style="font-size: 0.8em; font-weight: 700; color: var(--accent); text-transform: uppercase; letter-spacing: 1px;">${doc.category}</span>
                                            <h3 style="font-size: 1.1em; color: var(--primary); margin: 8px 0 12px; line-height: 1.4;">${doc.title}</h3>
                                            <p style="font-size: 0.85em; color: var(--text); margin-bottom: 20px;">
                                                <span><i class="far fa-calendar-alt" aria-hidden="true"></i> Updated: ${doc.date}</span><br>
                                                <span><i class="far fa-file-pdf" aria-hidden="true" style="color: #dc3545;"></i> Size: ${doc.size}</span>
                                            </p>
                                        </div>
                                        <a href="${doc.link}" class="apply-btn" style="text-align: center; padding: 10px 0 !important; font-size: 0.9em; display: flex; align-items: center; justify-content: center; gap: 8px; border-radius: 6px;" download>
                                            <i class="fas fa-download" aria-hidden="true"></i> Download PDF
                                        </a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </section>
                `);
            }
            if (!document.getElementById('aboutGallery')) {
                const afterSection = document.getElementById('disclosureSection') ? document.getElementById('disclosureSection').closest('section') : parentSection;
                afterSection.insertAdjacentHTML('afterend', `<section><div class="container" id="aboutGallery"></div></section>`);
                if (window.initGallery) window.initGallery('aboutGallery', 8);
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadAboutPage();
    initAnimations();
    initImageErrorHandling();
});
