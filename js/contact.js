// ============================================
// CONTACT PAGE - Dynamic Content Loader
// ============================================

function loadContactPage() {
    document.title = "Contact Us — " + schoolData.name;

    const pageHeader = document.getElementById('pageHeader');
    if (pageHeader) {
        pageHeader.innerHTML = `
            <h1>${schoolData.contactPage.header.title}</h1>
            <p>${schoolData.contactPage.header.subtitle}</p>
        `;
    }

    const contactGrid = document.getElementById('contactGrid');
    if (contactGrid) {
        contactGrid.innerHTML = `
            <div class="contact-info animate">
                ${schoolData.contactPage.info.items.map(item => {
                    const isHours = item.label.includes('Working Hours');
                    return `
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="${item.icon}" aria-hidden="true"></i>
                            </div>
                            <div>
                                <h3>${item.label}</h3>
                                <p>${item.value.replace(/\n/g, '<br>')}</p>
                                ${isHours ? `<div class="office-hours-status-container" style="margin-top: 5px;"></div>` : ''}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
            <div class="contact-form animate">
                <h3 style="margin-bottom: 20px;">${schoolData.contactPage.form.heading}</h3>
                <form onsubmit="handleContactSubmit(event)" data-success="${schoolData.contactPage.form.successMessage}">
                    ${schoolData.contactPage.form.fields.map((field, idx) => {
                        const id = `contactField${idx}`;
                        const req = field.required ? 'required aria-required="true"' : '';
                        if (field.type === 'textarea') {
                            return `
                                <div class="form-group material-group">
                                    <textarea id="${id}" name="${id}" placeholder=" " ${req}></textarea>
                                    <label for="${id}">${field.placeholder}</label>
                                </div>
                            `;
                        }
                        return `
                            <div class="form-group material-group">
                                <input id="${id}" name="${id}" type="${field.type}" placeholder=" " ${req}>
                                <label for="${id}">${field.placeholder}</label>
                            </div>
                        `;
                    }).join('')}
                    <button type="submit" class="submit-btn">${schoolData.contactPage.form.buttonText}</button>
                </form>
            </div>
        `;

        // Append interactive Google Maps container with Directions Route Assistant
        const sectionContainer = contactGrid.closest('.container') || contactGrid.parentElement;
        if (sectionContainer && !document.getElementById('contactMapContainer')) {
            sectionContainer.insertAdjacentHTML('beforeend', `
                <div id="contactMapContainer" class="animate" style="margin-top: 50px;">
                    <div class="section-header" style="margin-bottom: 25px;">
                        <h2>Our Location</h2>
                        <p>Situated in Saharanpur, only 3 km from Nakur on Sarsawa Road. Visit our secure green campus today.</p>
                    </div>
                    <div style="width: 100%; height: 400px; border-radius: 20px; overflow: hidden; border: 4px solid var(--secondary); box-shadow: var(--shadow); background: var(--light);">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.1611081533967!2d77.3135542!3d30.2323719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ee5877864dd1f%3A0xe9ce64e48b8fe1d9!2sNakur%20Sarsawa%20Rd%2C%20Uttar%20Pradesh%20247341!5e0!3m2!1sen!2sin!4v1717286100000!5m2!1sen!2sin" 
                            width="100%" 
                            height="100%" 
                            style="border: 0; display: block;" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                            title="Dev Rishi International School Nakur Campus Location Map">
                        </iframe>
                    </div>
                    
                    <!-- Directions Route Assistant -->
                    <div class="transit-assistant" style="margin-top: 25px; background: var(--white); padding: 25px; border-radius: 15px; box-shadow: var(--shadow); border-left: 5px solid var(--secondary); display: flex; flex-wrap: wrap; gap: 20px; align-items: center; justify-content: space-between;">
                        <div style="flex: 1; min-width: 280px; text-align: left;">
                            <h4 style="margin: 0 0 5px 0; color: var(--primary); font-size: 1.15em; font-weight: 700;"><i class="fas fa-route" aria-hidden="true" style="color: var(--secondary); margin-right: 6px;"></i> Transit Directions Assistant</h4>
                            <p style="margin: 0; font-size: 0.9em; color: var(--text);">Plan your route to our campus. Enter your starting city/location below to get instant driving directions.</p>
                        </div>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100%; max-width: 480px; justify-content: flex-end;">
                            <input type="text" id="transitOrigin" placeholder="e.g., Saharanpur, Sarsawa, Yamunanagar" style="flex: 1; min-width: 200px; padding: 12px 15px; border: 2px solid #e2e8f0; border-radius: 8px; font-family: inherit; font-size: 0.95em; outline: none; background: var(--white); color: var(--text);">
                            <button type="button" onclick="getDirectionsToDRIS()" class="apply-btn" style="border: none; cursor: pointer; display: flex; align-items: center; gap: 8px; font-size: 0.95em;">
                                <i class="fas fa-directions" aria-hidden="true"></i> Get Route
                            </button>
                        </div>
                    </div>
                </div>
            `);
        }
    }
}

function getDirectionsToDRIS() {
    const originInput = document.getElementById('transitOrigin');
    const origin = originInput ? originInput.value.trim() : '';
    const destination = "Dev Rishi International School Nakur Saharanpur Uttar Pradesh 247341";
    let url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
    if (origin) {
        url += `&origin=${encodeURIComponent(origin)}`;
    }
    window.open(url, '_blank');
}
window.getDirectionsToDRIS = getDirectionsToDRIS;

document.addEventListener('DOMContentLoaded', () => {
    loadContactPage();
    initAnimations();
    initImageErrorHandling();
});
