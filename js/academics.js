// ============================================
// ACADEMICS PAGE - Dynamic Content Loader
// ============================================

function loadAcademicsPage() {
    document.title = "Academics — " + schoolData.name;

    const pageHeader = document.getElementById('pageHeader');
    if (pageHeader) {
        pageHeader.innerHTML = `
            <h1>${schoolData.academicsPage.header.title}</h1>
            <p>${schoolData.academicsPage.header.subtitle}</p>
        `;
    }

    const programsSection = document.getElementById('programsSection');
    if (programsSection) {
        programsSection.innerHTML = `
            <div class="section-header">
                <h2>${schoolData.academicsPage.programs.heading}</h2>
            </div>
            <div class="features-grid facilities-grid">
                ${schoolData.academicsPage.programs.items.map(program => `
                    <div class="feature-card facility-card animate">
                        <div class="facility-image-wrapper">
                            ${program.image ? `<img src="${program.image}" alt="${program.name}" class="facility-img" onerror="handleImageError(this)">` : `<div class="feature-icon"><i class="fas ${program.icon}" aria-hidden="true"></i></div>`}
                        </div>
                        <div class="facility-details">
                            <h3>${program.name}</h3>
                            <p style="margin-bottom: 8px; color: var(--secondary); font-weight: 600;">Grades: ${program.grades}</p>
                            <p>${program.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    const clubsSection = document.getElementById('clubsSection');
    if (clubsSection) {
        clubsSection.innerHTML = `
            <div class="section-header">
                <h2>${schoolData.academicsPage.clubs.heading}</h2>
            </div>
            <div class="features-grid facilities-grid">
                ${schoolData.academicsPage.clubs.items.map(club => `
                    <div class="feature-card facility-card animate">
                        <div class="facility-image-wrapper">
                            ${club.image ? `<img src="${club.image}" alt="${club.name}" class="facility-img" onerror="handleImageError(this)">` : `<div class="feature-icon"><i class="fas ${club.icon}" aria-hidden="true"></i></div>`}
                        </div>
                        <div class="facility-details">
                            <h3>${club.name}</h3>
                            <p>${club.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadAcademicsPage();
    initAnimations();
    initImageErrorHandling();
});
