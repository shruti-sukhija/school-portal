// ============================================
// ADMISSIONS PAGE - Dynamic Content Loader
// ============================================

function loadAdmissionsPage() {
    document.title = "Admissions — " + schoolData.name;

    const pageHeader = document.getElementById('pageHeader');
    if (pageHeader) {
        pageHeader.innerHTML = `
            <h1>${schoolData.admissionsPage.header.title}</h1>
            <p>${schoolData.admissionsPage.header.subtitle}</p>
        `;
    }

    const processSection = document.getElementById('processSection');
    if (processSection) {
        processSection.innerHTML = `
            <div class="section-header">
                <h2>${schoolData.admissionsPage.process.heading}</h2>
            </div>
            <div class="process-timeline">
                ${schoolData.admissionsPage.process.steps.map((step, index) => `
                    <div class="process-step animate">
                        <div class="step-number">${index + 1}</div>
                        <div>
                            <h3>${step.title}</h3>
                            <p>${step.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    const feesSection = document.getElementById('feesSection');
    if (feesSection) {
        feesSection.innerHTML = `
            <div class="section-header">
                <h2>${schoolData.admissionsPage.fees.heading}</h2>
            </div>
            <div style="overflow-x: auto;">
                <table class="fee-table">
                    <thead>
                        <tr>
                            ${schoolData.admissionsPage.fees.columns.map(col => `<th>${col}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${schoolData.admissionsPage.fees.rows.map(row => {
                            const getCell = (col) => {
                                const key = col.toLowerCase();
                                if (key.includes('class') || key.includes('grade')) return row.grade || '';
                                if (key.includes('monthly')) return row.monthly || row.tuition || '';
                                if (key.includes('reg') || key.includes('registration')) return row.registration || row.development || '';
                                if (key.includes('tuition')) return row.tuition || '';
                                if (key.includes('development')) return row.development || '';
                                if (key.includes('total')) return row.total || '';
                                return row[col] || '';
                            };
                            return `\n                                <tr>\n                                    ${schoolData.admissionsPage.fees.columns.map(col => `<td>${getCell(col)}</td>`).join('')}\n                                </tr>\n                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }

    const faqSection = document.getElementById('faqSection');
    if (faqSection) {
        faqSection.innerHTML = `
            <div class="section-header">
                <h2>${schoolData.admissionsPage.faq.heading}</h2>
            </div>
            ${schoolData.admissionsPage.faq.items.map(item => `
                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFAQ(this)">
                        ${item.question}
                        <i class="fas fa-chevron-down" aria-hidden="true"></i>
                    </div>
                    <div class="faq-answer">
                        <p>${item.answer}</p>
                    </div>
                </div>
            `).join('')}
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadAdmissionsPage();
    initAnimations();
    initImageErrorHandling();
});
