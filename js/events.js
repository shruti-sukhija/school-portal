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
        if (wrapper && !document.getElementById('eventsGallery')) {
            wrapper.insertAdjacentHTML('beforeend', `<div id="eventsGallery" style="margin-top: 40px;"></div>`);
            if (window.initGallery) window.initGallery('eventsGallery', 10);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadEventsPage();
    initAnimations();
    initImageErrorHandling();
});
