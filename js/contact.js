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
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadContactPage();
    initAnimations();
    initImageErrorHandling();
});
