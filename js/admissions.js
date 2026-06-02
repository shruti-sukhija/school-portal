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
            
            <!-- Dynamic Fee Estimator Widget -->
            <div class="fee-calculator-widget animate" style="margin-top: 50px; background: var(--white); padding: 35px 25px; border-radius: 15px; box-shadow: var(--shadow); border: 2px dashed var(--secondary);">
                <h3 style="color: var(--primary); text-align: center; margin-bottom: 25px; font-size: 1.5em; font-weight: 700;"><i class="fas fa-calculator" aria-hidden="true" style="color: var(--secondary); margin-right: 6px;"></i> Dynamic Annual Fee Estimator</h3>
                <div class="calculator-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; align-items: start;">
                    <div class="calculator-inputs" style="text-align: left;">
                        <div class="form-group" style="margin-bottom: 20px;">
                            <label for="calcGrade" style="font-weight: 700; color: var(--primary); display: block; margin-bottom: 8px;">Select Admission Class:</label>
                            <select id="calcGrade" onchange="calculateEstimatedFees()" style="width: 100%; padding: 12px 15px; border: 2px solid #e2e8f0; border-radius: 8px; font-family: inherit; font-size: 1.05em; background: var(--white); color: var(--text); outline: none;">
                                ${schoolData.admissionsPage.fees.rows.map(row => `
                                    <option value="${row.grade}" data-monthly="${parseInt(row.monthly.replace(/[^\d]/g, ''))}" data-reg="${parseInt(row.registration.replace(/[^\d]/g, ''))}">Class ${row.grade}</option>
                                `).join('')}
                            </select>
                        </div>
                        
                        <div class="calculator-addons" style="margin-top: 25px;">
                            <strong style="color: var(--primary); display: block; margin-bottom: 12px; font-weight: 700;">Optional Facility Add-Ons:</strong>
                            <label class="calculator-checkbox" style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px; cursor: pointer; font-size: 0.95em;">
                                <input type="checkbox" id="calcTransport" onchange="calculateEstimatedFees()" style="width: 18px; height: 18px; cursor: pointer;">
                                <span>School Transport / camera-buses (+₹1,200/mo)</span>
                            </label>
                            <label class="calculator-checkbox" style="display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 0.95em;">
                                <input type="checkbox" id="calcNcc" onchange="calculateEstimatedFees()" style="width: 18px; height: 18px; cursor: pointer;">
                                <span>NCC Uniform & Activity Kit (+₹1,500 one-time)</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="calculator-outputs" style="background: var(--light); padding: 25px; border-radius: 12px; border-left: 5px solid var(--secondary); text-align: left;">
                        <strong style="color: var(--primary); display: block; font-size: 1.1em; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700;">Estimated Dues Breakdown:</strong>
                        <div style="display: grid; gap: 12px;">
                            <div style="display: flex; justify-content: space-between; font-size: 1em;">
                                <span>Registration Dues (One-Time):</span>
                                <strong id="calcOutputReg" style="color: var(--primary);">₹1,000</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between; font-size: 1em;">
                                <span>Monthly School Tuition:</span>
                                <strong id="calcOutputMonthly" style="color: var(--primary);">₹1,000</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between; font-size: 1.1em; border-top: 1px solid rgba(0,0,0,0.08); padding-top: 10px; margin-top: 5px;">
                                <span>Estimated Quarterly Dues:</span>
                                <strong id="calcOutputQuarterly" style="color: var(--accent); font-weight: 700;">₹4,000</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between; font-size: 1.3em; border-top: 2px solid var(--secondary); padding-top: 10px; margin-top: 5px;">
                                <span>Estimated Annual Total:</span>
                                <strong id="calcOutputAnnual" style="color: var(--primary); font-weight: 800;">₹13,000</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        setTimeout(calculateEstimatedFees, 100);
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

function calculateEstimatedFees() {
    const select = document.getElementById('calcGrade');
    const transport = document.getElementById('calcTransport');
    const ncc = document.getElementById('calcNcc');
    
    const regOutput = document.getElementById('calcOutputReg');
    const monthlyOutput = document.getElementById('calcOutputMonthly');
    const quarterlyOutput = document.getElementById('calcOutputQuarterly');
    const annualOutput = document.getElementById('calcOutputAnnual');
    
    if (!select || !regOutput || !monthlyOutput || !quarterlyOutput || !annualOutput) return;
    
    const option = select.options[select.selectedIndex];
    const baseMonthly = parseInt(option.getAttribute('data-monthly')) || 0;
    const baseReg = parseInt(option.getAttribute('data-reg')) || 0;
    
    const transportFee = transport.checked ? 1200 : 0;
    const nccFee = ncc.checked ? 1500 : 0;
    
    const finalMonthly = baseMonthly + transportFee;
    const finalReg = baseReg + nccFee;
    const finalQuarterly = 3 * finalMonthly;
    const finalAnnual = finalReg + (12 * finalMonthly);
    
    const format = (num) => "₹" + num.toLocaleString('en-IN');
    
    const animateText = (element, start, target) => {
        const duration = 450;
        const startTime = performance.now();
        const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const value = Math.round(start + (target - start) * progress);
            element.textContent = format(value);
            if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    };
    
    const parseVal = (str) => parseInt(str.replace(/[^\d]/g, '')) || 0;
    
    animateText(regOutput, parseVal(regOutput.textContent), finalReg);
    animateText(monthlyOutput, parseVal(monthlyOutput.textContent), finalMonthly);
    animateText(quarterlyOutput, parseVal(quarterlyOutput.textContent), finalQuarterly);
    animateText(annualOutput, parseVal(annualOutput.textContent), finalAnnual);
}
window.calculateEstimatedFees = calculateEstimatedFees;

document.addEventListener('DOMContentLoaded', () => {
    loadAdmissionsPage();
    initAnimations();
    initImageErrorHandling();
});
