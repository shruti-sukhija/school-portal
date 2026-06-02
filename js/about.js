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
                ${schoolData.aboutPage.facilities.items.map(facility => {
                    const descClean = facility.description.replace(/'/g, "\\'").replace(/"/g, '&quot;');
                    return `
                        <div class="feature-card facility-card animate" onclick="openFacilityTourModal('${facility.name}', '${facility.image || ''}', '${descClean}')" style="cursor: pointer; position: relative;">
                            <div class="facility-image-wrapper">
                                ${facility.image ? `<img src="${facility.image}" alt="${facility.name}" class="facility-img" onerror="handleImageError(this)">` : `<div class="feature-icon"><i class="${facility.icon}" aria-hidden="true"></i></div>`}
                            </div>
                            <div class="facility-details">
                                <h3 style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                                    <span>${facility.name}</span>
                                    <i class="fas fa-expand-alt" style="font-size: 0.75em; color: var(--secondary); transition: transform 0.3s ease;"></i>
                                </h3>
                                <p>${facility.description}</p>
                            </div>
                        </div>
                    `;
                }).join('')}
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
                                        <div style="display: flex; gap: 10px; margin-top: 15px;">
                                            <button onclick="openLightbox('${doc.link}', 'pdf')" class="apply-btn" style="flex: 1; text-align: center; padding: 10px 0 !important; font-size: 0.9em; display: flex; align-items: center; justify-content: center; gap: 8px; border-radius: 6px; cursor: pointer; border: none;">
                                                <i class="fas fa-eye" aria-hidden="true"></i> View Online
                                            </button>
                                            <a href="${doc.link}" class="apply-btn" style="width: 44px; display: flex; align-items: center; justify-content: center; border-radius: 6px; background: var(--accent); padding: 0 !important; border: none; cursor: pointer;" download title="Download PDF" aria-label="Download PDF">
                                                <i class="fas fa-download" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </section>
                `);
            }
        }
    }
}

function openFacilityTourModal(name, image, description) {
    let modal = document.getElementById('facilityTourModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'facilityTourModal';
        modal.className = 'lightbox-modal facility-tour-modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-label', 'Facility Tour Explorer');
        modal.setAttribute('aria-modal', 'true');
        document.body.appendChild(modal);
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeFacilityTour();
        });
    }
    
    // Dynamically pick alternate gallery folder matching category
    let category = 'about';
    const nameLower = name.toLowerCase();
    if (nameLower.includes('lab') || nameLower.includes('smart') || nameLower.includes('library')) {
        category = 'academics';
    } else if (nameLower.includes('shooting') || nameLower.includes('sports') || nameLower.includes('playground') || nameLower.includes('ground') || nameLower.includes('robotics')) {
        category = 'events';
    }
    
    const pool = window.schoolData && window.schoolData.galleryImages && window.schoolData.galleryImages[category] 
        ? window.schoolData.galleryImages[category] 
        : [];
        
    modal.innerHTML = `
        <button class="lightbox-close" onclick="closeFacilityTour()"><i class="fas fa-times" aria-hidden="true"></i></button>
        <div class="facility-tour-content animate">
            <div class="facility-tour-media-section">
                <img id="tourMainImg" src="${image}" alt="${name}" onerror="handleImageError(this)">
                
                <div class="tour-thumbnails-title">Campus Alternate Views:</div>
                <div class="tour-thumbnails-grid">
                    <img class="tour-thumb active" src="${image}" onclick="setTourMainImage(this, '${image}')" onerror="handleImageError(this)">
                    ${pool.slice(0, 5).map(src => {
                        if (src.toLowerCase().endsWith('.mp4') || src === image) return '';
                        return `<img class="tour-thumb" src="${src}" onclick="setTourMainImage(this, '${src}')" onerror="handleImageError(this)">`;
                    }).join('')}
                </div>
            </div>
            
            <div class="facility-tour-info-section">
                <span class="tour-tag"><i class="fas fa-school" style="color: var(--secondary); margin-right: 4px;"></i> DRIS infrastructure tour</span>
                <h2>${name}</h2>
                <p class="tour-desc">${description}</p>
                
                <div class="tour-specs-box">
                    <h4><i class="fas fa-info-circle" style="color: var(--secondary); margin-right: 6px;"></i> Technical Specifications:</h4>
                    <div class="tour-specs-grid">
                        ${getFacilitySpecsHTML(name)}
                    </div>
                </div>
                
                <a href="admissions.html" class="apply-btn" style="text-align: center; border: none; cursor: pointer; color: white !important; margin-top: auto; border-radius: 8px;">Explore DRIS Admissions</a>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scroll
    
    // Trigger slide entrance after render
    setTimeout(() => {
        const content = modal.querySelector('.facility-tour-content');
        if (content) content.classList.add('show');
    }, 50);
}
window.openFacilityTourModal = openFacilityTourModal;

function setTourMainImage(thumbElement, src) {
    const mainImg = document.getElementById('tourMainImg');
    if (mainImg) {
        mainImg.src = src;
    }
    
    // Toggle active border ring on thumbnails
    const thumbs = document.querySelectorAll('.tour-thumb');
    thumbs.forEach(t => t.classList.remove('active'));
    if (thumbElement) thumbElement.classList.add('active');
}
window.setTourMainImage = setTourMainImage;

function closeFacilityTour() {
    const modal = document.getElementById('facilityTourModal');
    if (modal) {
        modal.classList.remove('active');
        const content = modal.querySelector('.facility-tour-content');
        if (content) content.classList.remove('show');
        document.body.style.overflow = '';
    }
}
window.closeFacilityTour = closeFacilityTour;

function getFacilitySpecsHTML(name) {
    const nameLower = name.toLowerCase();
    
    let specs = [];
    if (nameLower.includes('shooting')) {
        specs = [
            { key: "Target Lanes", val: "6 Professional Lanes" },
            { key: "Target Distance", val: "10 Meters (ISSF Standard)" },
            { key: "Equipment", val: "Imported German Rifles & Match Pistols" },
            { key: "Safety Protocols", val: "Soundproof acoustic panels & double ventilation backing" }
        ];
    } else if (nameLower.includes('robotics')) {
        specs = [
            { key: "Lab Platform", val: "AI, IoT & Microcontroller Sandbox" },
            { key: "Hardware Blocks", val: "Arduino boards, Raspberry Pi controllers, circuit sensors" },
            { key: "Integrated Software", val: "Python consoles, Scratch visual blocks, Arduino IDE" },
            { key: "Focus Outcomes", val: "Autonomous navigation, circuitry engineering, coding reasoning" }
        ];
    } else if (nameLower.includes('smart')) {
        specs = [
            { key: "Display Units", val: "86-inch 4K Interactive Flat Panels" },
            { key: "Audio System", val: "Dynamic surround sound with wireless mic receivers" },
            { key: "Study Library", val: "CBSE animated whiteboards library, integrated quiz widgets" },
            { key: "Capabilities", val: "Real-time concept illustrations, dynamic lessons record" }
        ];
    } else if (nameLower.includes('labs') || nameLower.includes('science')) {
        specs = [
            { key: "Lab Layout", val: "Composite Physics, Chemistry & Biology modules" },
            { key: "Capacity", val: "40+ students simultaneously per session" },
            { key: "Stock Equipment", val: "Compound microscopes, optical benches, standard chemical sets" },
            { key: "Safety Features", val: "Fume hood exhaust ventilation, immediate eye wash taps" }
        ];
    } else if (nameLower.includes('computer')) {
        specs = [
            { key: "Terminal Count", val: "High-speed modern desktop units" },
            { key: "Connection", val: "Secure internet grid with content firewalls" },
            { key: "Syllabus Focus", val: "Python coding, web layouts, basic smart computer operation" },
            { key: "Environment", val: "Centralized air-conditioning & power backup grids" }
        ];
    } else {
        // Fallback for standard facilities
        specs = [
            { key: "Maintenance", val: "Supervised daily housekeeping sanitations" },
            { key: "Accreditation", val: "CBSE infrastructure layout directives fully compliant" },
            { key: "Access Limits", val: "Monitored security entries & teacher supervisor checks" },
            { key: "Campus Safety", val: "24/7 active CCTV camera coverage" }
        ];
    }
    
    return specs.map(s => `
        <div style="border-bottom: 1px solid rgba(0,0,0,0.06); padding: 8px 0; display: flex; justify-content: space-between; font-size: 0.85em; gap: 15px;">
            <strong style="color: var(--primary); text-align: left;">${s.key}:</strong>
            <span style="color: var(--text); text-align: right;">${s.val}</span>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    loadAboutPage();
    initAnimations();
    initImageErrorHandling();
});
