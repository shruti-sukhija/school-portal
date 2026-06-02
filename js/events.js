// ============================================
// EVENTS PAGE - Dynamic Content Loader
// ============================================

function loadEventsPage() {
    document.title = "Events — " + schoolData.name;

    const pageHeader = document.getElementById('pageHeader');
    if (pageHeader) {
        pageHeader.innerHTML = `
            <h1>${schoolData.eventsPage.header.title}</h1>
            <p>${schoolData.eventsPage.header.subtitle}</p>
        `;
    }

    const eventsGrid = document.getElementById('eventsGrid');
    if (eventsGrid) {
        eventsGrid.innerHTML = schoolData.events.map((event, idx) => `
            <div class="event-card animate">
                <div class="event-image">
                    <img src="${schoolData.getImage('event', idx)}" alt="${event.title}" loading="lazy" width="600" height="400">
                </div>
                <div class="event-details">
                    <span class="event-date">
                        <span><i class="far fa-calendar" aria-hidden="true"></i> ${event.date}</span>
                        <span class="event-category">${event.category}</span>
                    </span>
                    <h4>${event.title}</h4>
                    <p>${event.description}</p>
                </div>
            </div>
        `).join('');
        // Add a wider events gallery showcasing more images
        const wrapper = eventsGrid.closest('.container') || eventsGrid.parentElement;
        if (wrapper) {
            if (!document.getElementById('roboticsVideoShowcase')) {
                wrapper.insertAdjacentHTML('beforeend', `
                    <div id="roboticsVideoShowcase" class="animate" style="margin-top: 60px;">
                        <div class="section-header" style="margin-bottom: 30px;">
                            <h3>Robotics Lab in Action</h3>
                            <p>Watch our students' smart robot creations and electronics coding projects operating inside our advanced laboratory.</p>
                        </div>
                        <div class="features-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; max-width: 900px; margin: 0 auto 50px;">
                            <div class="feature-card facility-card animate" style="padding: 0; overflow: hidden; border-radius: 15px; box-shadow: var(--shadow); border: 3px solid var(--secondary);">
                                <div class="facility-image-wrapper" style="height: 240px; border-bottom: none;">
                                    <video src="School_Images/Robotics/VID-20260513-WA0062.mp4" controls muted loop style="width: 100%; height: 100%; object-fit: cover; display: block;"></video>
                                </div>
                                <div class="facility-details" style="padding: 20px;">
                                    <h3 style="font-size: 1.2em; margin-bottom: 8px;">Autonomous Navigating Robot</h3>
                                    <p style="font-size: 0.9em; line-height: 1.5; color: var(--text);">Student-built robot testing sensory inputs, real-time path planning, and automatic obstacle avoidance routines.</p>
                                </div>
                            </div>
                            <div class="feature-card facility-card animate" style="padding: 0; overflow: hidden; border-radius: 15px; box-shadow: var(--shadow); border: 3px solid var(--secondary);">
                                <div class="facility-image-wrapper" style="height: 240px; border-bottom: none;">
                                    <video src="School_Images/Robotics/VID-20260513-WA0066.mp4" controls muted loop style="width: 100%; height: 100%; object-fit: cover; display: block;"></video>
                                </div>
                                <div class="facility-details" style="padding: 20px;">
                                    <h3 style="font-size: 1.2em; margin-bottom: 8px;">Precision Arm Manipulation</h3>
                                    <p style="font-size: 0.9em; line-height: 1.5; color: var(--text);">Custom micro-controller programming for pickup routines, spatial grid coordinates tracking, and sorting operations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `);
            }
            if (!document.getElementById('eventsGallery')) {
                wrapper.insertAdjacentHTML('beforeend', `<div id="eventsGallery" style="margin-top: 40px;"></div>`);
                if (window.initGallery) window.initGallery('eventsGallery', 10);
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadEventsPage();
    initAnimations();
    initImageErrorHandling();
});
