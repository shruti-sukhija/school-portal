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
                ${schoolData.contactPage.info.items.map(item => `
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="${item.icon}" aria-hidden="true"></i>
                        </div>
                        <div>
                            <h3>${item.label}</h3>
                            <p>${item.value.replace(/\n/g, '<br>')}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="contact-form animate">
                <h3 style="margin-bottom: 20px;">${schoolData.contactPage.form.heading}</h3>
                <form onsubmit="handleContactSubmit(event)" data-success="${schoolData.contactPage.form.successMessage}">
                    ${schoolData.contactPage.form.fields.map((field, idx) => {
                        const id = `contactField${idx}`;
                        const req = field.required ? 'required aria-required="true"' : '';
                        const label = `<label for="${id}" class="sr-only">${field.placeholder}</label>`;
                        if (field.type === 'textarea') {
                            return `<div class="form-group">${label}<textarea id="${id}" name="${id}" placeholder="${field.placeholder}" ${req}></textarea></div>`;
                        }
                        return `<div class="form-group">${label}<input id="${id}" name="${id}" type="${field.type}" placeholder="${field.placeholder}" ${req}></div>`;
                    }).join('')}
                    <button type="submit" class="submit-btn">${schoolData.contactPage.form.buttonText}</button>
                </form>
            </div>
        `;

        // Append interactive Google Maps container
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
                </div>
            `);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadContactPage();
    initAnimations();
    initImageErrorHandling();
});
