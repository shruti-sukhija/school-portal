// ============================================
// GALLERY PAGE - Central Dynamic Media Loader
// ============================================

function loadGalleryPage() {
    document.title = "Gallery — " + schoolData.name;

    const pageHeader = document.getElementById('pageHeader');
    if (pageHeader) {
        pageHeader.innerHTML = `
            <h1>School Gallery</h1>
            <p>Capturing campus achievements, sports milestones, and digital highlights at Dev Rishi</p>
        `;
    }

    const gallerySection = document.getElementById('gallerySection');
    if (gallerySection) {
        gallerySection.innerHTML = `
            <div class="gallery-filter-bar" id="galleryFilterBar"></div>
            <div class="gallery-grid-filtered" id="galleryGridFiltered"></div>
        `;
        initCentralFilteredGallery();
    }
}

function initCentralFilteredGallery() {
    const filterBar = document.getElementById('galleryFilterBar');
    const grid = document.getElementById('galleryGridFiltered');
    if (!filterBar || !grid || !window.schoolData || !window.schoolData.galleryImages) return;

    // Dynamic tagging buckets
    const categories = {
        'All': [],
        'Labs & Tech': [],
        'Sports & Culture': [],
        'Classrooms & Play': [],
        'NCC Cadets': []
    };

    const allImages = [
        ...window.schoolData.galleryImages.about,
        ...window.schoolData.galleryImages.academics,
        ...window.schoolData.galleryImages.events
    ];

    // Filter duplicates
    const uniqueImages = [...new Set(allImages)];

    uniqueImages.forEach(src => {
        let tag = '';
        if (src.includes('Computer_Lab') || src.includes('Physics_Bio_Lab') || src.includes('Robotics')) {
            tag = 'Labs & Tech';
        } else if (src.includes('Ground') || src.includes('Sports_and_Culture')) {
            tag = 'Sports & Culture';
        } else if (src.includes('Class_Rooms') || src.includes('Play_Class_Room') || src.includes('Smart_Class_Rooms')) {
            tag = 'Classrooms & Play';
        } else if (src.includes('NCC')) {
            tag = 'NCC Cadets';
        }

        if (tag) {
            categories[tag].push(src);
            categories['All'].push(src);
        }
    });

    const activeTags = Object.keys(categories).filter(t => categories[t].length > 0);
    
    // Render tag buttons
    filterBar.innerHTML = activeTags.map((tag, idx) => `
        <button class="filter-btn ${idx === 0 ? 'active' : ''}" data-tag="${tag}" type="button">${tag} (${categories[tag].length})</button>
    `).join('');

    // Render interactive media items
    grid.innerHTML = categories['All'].map(src => {
        const isVideo = src.toLowerCase().endsWith('.mp4');
        let cardTag = '';
        if (src.includes('Computer_Lab') || src.includes('Physics_Bio_Lab') || src.includes('Robotics')) {
            cardTag = 'Labs & Tech';
        } else if (src.includes('Ground') || src.includes('Sports_and_Culture')) {
            cardTag = 'Sports & Culture';
        } else if (src.includes('Class_Rooms') || src.includes('Play_Class_Room') || src.includes('Smart_Class_Rooms')) {
            cardTag = 'Classrooms & Play';
        } else if (src.includes('NCC')) {
            cardTag = 'NCC Cadets';
        }

        if (isVideo) {
            return `
                <div class="gallery-card-filtered video-item" data-tag="${cardTag}" onclick="openLightbox('${src}', 'video')" style="cursor: pointer; overflow: hidden; border-radius: 12px; height: 180px; box-shadow: var(--shadow); position: relative;">
                    <video src="${src}" autoplay muted loop playsinline style="width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.3s ease;"></video>
                    <div style="position: absolute; bottom: 8px; right: 8px; background: rgba(0,0,0,0.6); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75em; display: flex; align-items: center; gap: 4px; z-index: 2;">
                        <i class="fas fa-play" style="font-size: 0.7em;"></i> Video
                    </div>
                </div>
            `;
        }
        
        return `
            <div class="gallery-card-filtered" data-tag="${cardTag}" onclick="openLightbox('${src}', 'image')" style="cursor: pointer; overflow: hidden; border-radius: 12px; height: 180px; box-shadow: var(--shadow);">
                <img src="${src}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.3s ease;" onerror="handleImageError(this)">
            </div>
        `;
    }).join('');

    // Attach click events to filters
    const buttons = filterBar.querySelectorAll('.filter-btn');
    const cards = grid.querySelectorAll('.gallery-card-filtered');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const selectedTag = btn.getAttribute('data-tag');
            
            cards.forEach(card => {
                const cardTag = card.getAttribute('data-tag');
                if (selectedTag === 'All' || cardTag === selectedTag) {
                    card.classList.remove('filtered-out');
                } else {
                    card.classList.add('filtered-out');
                }
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadGalleryPage();
    initAnimations();
    initImageErrorHandling();
});
