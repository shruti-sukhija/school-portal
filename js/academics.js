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
                <p>Click on any program card below to explore dynamic CBSE syllabus focus areas and available streams.</p>
            </div>
            <div class="features-grid facilities-grid">
                ${schoolData.academicsPage.programs.items.map((program, idx) => `
                    <div class="feature-card facility-card animate" onclick="toggleProgramDetail(${idx})" style="cursor: pointer; position: relative;">
                        <div class="facility-image-wrapper">
                            ${program.image ? `<img src="${program.image}" alt="${program.name}" class="facility-img" onerror="handleImageError(this)">` : `<div class="feature-icon"><i class="fas ${program.icon}" aria-hidden="true"></i></div>`}
                        </div>
                        <div class="facility-details">
                            <h3 style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                                <span>${program.name}</span>
                                <i class="fas fa-chevron-down stream-chevron" style="font-size: 0.75em; transition: transform 0.3s ease;"></i>
                            </h3>
                            <p style="margin-bottom: 8px; color: var(--secondary); font-weight: 600;">Grades: ${program.grades}</p>
                            <p style="margin-bottom: 8px;">${program.description}</p>
                            
                            <!-- Interactive Details Drawer -->
                            <div class="program-drawer" id="programDrawer${idx}">
                                ${getProgramCurriculumDetails(idx)}
                            </div>
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

function getProgramCurriculumDetails(idx) {
    if (idx === 0) {
        return `
            <div style="border-top: 1px solid rgba(255,255,255,0.08); margin-top: 15px; padding-top: 15px; text-align: left;">
                <h4 style="font-size: 0.9em; color: var(--primary); margin-bottom: 8px; font-weight: 700;">Early Years Key Focus Areas:</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                    <span class="stream-pill">Motor Skills Development</span>
                    <span class="stream-pill">Linguistic Phonics</span>
                    <span class="stream-pill">Numerical Play</span>
                    <span class="stream-pill">Creative & Social Arts</span>
                </div>
            </div>
        `;
    }
    if (idx === 1) {
        return `
            <div style="border-top: 1px solid rgba(255,255,255,0.08); margin-top: 15px; padding-top: 15px; text-align: left;">
                <h4 style="font-size: 0.9em; color: var(--primary); margin-bottom: 8px; font-weight: 700;">Foundational Curriculum:</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                    <span class="stream-pill">English Literature</span>
                    <span class="stream-pill">Hindi Grammar</span>
                    <span class="stream-pill">Mathematics</span>
                    <span class="stream-pill">Environmental Studies</span>
                    <span class="stream-pill">Smart Computer Basics</span>
                </div>
            </div>
        `;
    }
    if (idx === 2) {
        return `
            <div style="border-top: 1px solid rgba(255,255,255,0.08); margin-top: 15px; padding-top: 15px; text-align: left;">
                <h4 style="font-size: 0.9em; color: var(--primary); margin-bottom: 8px; font-weight: 700;">Middle School Electives:</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                    <span class="stream-pill">Sanskrit Language</span>
                    <span class="stream-pill">Algebra & Geometry</span>
                    <span class="stream-pill">Physics & Chemistry Labs</span>
                    <span class="stream-pill">History & Civics</span>
                    <span class="stream-pill">Advanced Coding & AI</span>
                </div>
            </div>
        `;
    }
    if (idx === 3) {
        return `
            <div style="border-top: 1px solid rgba(255,255,255,0.08); margin-top: 15px; padding-top: 15px; text-align: left;">
                <h4 style="font-size: 0.9em; color: var(--primary); margin-bottom: 12px; font-weight: 700;">CBSE Elective High School Streams:</h4>
                <div style="margin-bottom: 12px;">
                    <strong style="font-size: 0.82em; color: var(--accent); display: block; margin-bottom: 6px; text-transform: uppercase;">1. Science (PCM/PCB)</strong>
                    <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                        <span class="stream-pill">Physics</span><span class="stream-pill">Chemistry</span>
                        <span class="stream-pill">Mathematics</span><span class="stream-pill">Biology</span>
                        <span class="stream-pill">Robotics Lab CS</span>
                    </div>
                </div>
                <div style="margin-bottom: 12px;">
                    <strong style="font-size: 0.82em; color: var(--accent); display: block; margin-bottom: 6px; text-transform: uppercase;">2. Commerce</strong>
                    <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                        <span class="stream-pill">Accountancy</span><span class="stream-pill">Business Studies</span>
                        <span class="stream-pill">Economics</span><span class="stream-pill">Informatics Practice</span>
                    </div>
                </div>
                <div>
                    <strong style="font-size: 0.82em; color: var(--accent); display: block; margin-bottom: 6px; text-transform: uppercase;">3. Humanities</strong>
                    <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                        <span class="stream-pill">History & Geography</span><span class="stream-pill">Political Science</span>
                        <span class="stream-pill">Hindi Elective</span><span class="stream-pill">Physical Education</span>
                    </div>
                </div>
            </div>
        `;
    }
    return '';
}

function toggleProgramDetail(idx) {
    const card = document.querySelectorAll('.facility-card')[idx];
    if (card) {
        card.classList.toggle('active-program');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadAcademicsPage();
    initAnimations();
    initImageErrorHandling();
});
