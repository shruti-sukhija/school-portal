// ============================================
// SCHOOL WEBSITE DATA - DEV RISHI INTERNATIONAL
// ============================================

// IMAGE MODE SETTING: "local" or "stock"
const IMAGE_MODE = "local";  // Switch to local mode to use the "School_Images" folder

const schoolData = {
    name: "Dev Rishi International School",
    shortName: "DRIS",
    tagline: "Affiliated to CBSE, New Delhi | Established in 2015",
    established: "2015",
    
    navigation: [
        { label: "Home", href: "index.html", icon: "fas fa-home" },
        { label: "About", href: "about.html", icon: "fas fa-info-circle" },
        { label: "Academics", href: "academics.html", icon: "fas fa-book" },
        { label: "Admissions", href: "admissions.html", icon: "fas fa-user-plus" },
        { label: "Events", href: "events.html", icon: "fas fa-calendar" },
        { label: "Contact", href: "contact.html", icon: "fas fa-envelope" }
    ],
    
    images: {
        local: {
            hero: "School_Images/School_Building.jpeg",
            about: "School_Images/Reception.jpeg",
            events: [
                "School_Images/Robotics/IMG-20260513-WA0054.jpg.jpeg",
                "School_Images/Sports_and_Culture/IMG-20231205-WA0047.jpg.jpeg",
                "School_Images/NCC_Cadets.jpg.jpeg",
                "School_Images/Smart_Class_Rooms/IMG-20260511-WA0057.jpg.jpeg",
                "School_Images/Shooting_Range.jpeg",
                "School_Images/Physics_Bio_Lab_Staff_Room/IMG-20260512-WA0131(1).jpg.jpeg"
            ]
        },
        stock: {
            hero: "https://picsum.photos/id/20/1600/900",
            about: "https://picsum.photos/id/15/800/600",
            events: [
                "https://picsum.photos/id/24/600/400",
                "https://picsum.photos/id/26/600/400",
                "https://picsum.photos/id/28/600/400",
                "https://picsum.photos/id/29/600/400",
                "https://picsum.photos/id/30/600/400",
                "https://picsum.photos/id/31/600/400"
            ]
        }
    },
    
    getImage: function(type, index = 0) {
        const source = this.images[IMAGE_MODE];
        if (type === 'hero') return source.hero;
        if (type === 'about') return source.about;
        if (type === 'event') return source.events[index];
        return source.hero;
    },
    
    hero: {
        title: "Dev Rishi International School",
        subtitle: "Affiliated to CBSE, New Delhi | Nurturing Minds, Building Futures since 2015",
        buttons: [
            { text: "Apply Now", link: "admissions.html", class: "btn-primary" },
            { text: "Learn More", link: "about.html", class: "btn-secondary" }
        ]
    },
    
    stats: [
        { number: 500, label: "Students Enrolled", suffix: "+" },
        { number: 2015, label: "Year Founded", suffix: "" },
        { number: 30, label: "Student-Teacher Ratio", suffix: ":1" }
    ],
    
    features: {
        heading: "Why Choose Dev Rishi International School?",
        subheading: "Discover our commitments to holistic excellence and national values",
        items: [
            { icon: "fas fa-chalkboard-teacher", title: "Experienced Faculty", description: "Dedicated educators guiding students through a rich curriculum with individual care and guidance." },
            { icon: "fas fa-shield-halved", title: "NCC Wing Available", description: "Active National Cadet Corps wing to build strong character, leadership, and a spirit of service." },
            { icon: "fas fa-bullseye", title: "Indoor Shooting Range", description: "Unique indoor rifle and pistol shooting range for concentration, discipline, and competitive sports." },
            { icon: "fas fa-flask-vial", title: "Modern Labs", description: "Well-equipped Physics, Chemistry, Biology, and Computer Labs for experiential hands-on learning." },
            { icon: "fas fa-laptop-code", title: "Smart Classrooms", description: "Fully integrated digital smart classrooms offering immersive and interactive audio-visual learning." },
            { icon: "fas fa-robot", title: "Advanced Robotics", description: "A state-of-the-art Robotics and AI lab to kindle curiosity, logical thinking, and engineering skills." }
        ]
    },
    
    aboutPreview: {
        heading: "About Dev Rishi International School",
        text: "Established in 2015 and affiliated to CBSE, New Delhi, Dev Rishi International School is a premier co-educational institution located in Saharanpur. Situated just 3 km from Nakur on Sarsawa Road, our campus offers a secure, peaceful environment perfect for learning and growth. We offer holistic academic courses spanning from Pre-Nursery to Grade XII (Science, Commerce, and Humanities). With world-class infrastructure featuring digital smart classrooms, modern composite science labs, a professional shooting range, and an active NCC wing, we guide our students to excel in academics, athletics, and leadership.",
        buttonText: "Read More",
        buttonLink: "about.html"
    },
    
    eventsPreview: {
        heading: "Latest Events & Activities",
        subheading: "Stay updated with life and news at Dev Rishi",
        showCount: 3,
        buttonText: "View All Events",
        buttonLink: "events.html"
    },
    
    events: [
        { title: "Robotics & AI Lab Inauguration", date: "May 13, 2026", description: "Inaugurating our state-of-the-art Robotics Lab designed to introduce hands-on coding, engineering, and artificial intelligence.", category: "Academic" },
        { title: "Annual Sports and Culture Meet", date: "December 5, 2025", description: "Celebrating sportsmanship and physical coordination through athletic games, yoga, track and field runs, and cultural dances.", category: "Sports" },
        { title: "National Cadet Corps (NCC) Camp", date: "May 24, 2026", description: "Active drill and training camp for our NCC cadets, reinforcing self-discipline, teamwork, patriotism, and social responsibilities.", category: "NCC" },
        { title: "Smart Classroom Digital Workshop", date: "May 11, 2026", description: "Empowering dynamic conceptual learning through digital whiteboard animations, quizzes, and multimedia lessons.", category: "Technology" },
        { title: "Inter-School Shooting Tournament", date: "May 22, 2026", description: "Our rifle and pistol shooters demonstrate remarkable precision and target control inside our specialized indoor shooting range.", category: "Sports" },
        { title: "Physics and Biology Exhibition", date: "May 12, 2026", description: "Exciting practical displays of mechanics, optics, botany specimens, and human anatomy models by our senior school science students.", category: "Academic" }
    ],
    
    testimonials: {
        heading: "What Parents & Alumni Say",
        subheading: "Hear from our school community",
        items: [
            { text: "Dev Rishi has completely transformed my son's attitude towards learning. The smart classrooms and personalized attention from teachers have boosted his confidence immensely.", name: "Satish Kumar", role: "Parent of Grade 9 Student", initials: "SK" },
            { text: "The discipline I learned through the NCC wing at DRIS, combined with the excellent coaching at the indoor shooting range, shaped my career and helped me join the Armed Forces.", name: "Ankit Chaudhary", role: "Alumni, Class of 2021", initials: "AC" },
            { text: "As a parent, I value safety and academics equally. DRIS provides a fantastic environment on Sarsawa Road—spacious, safe, and academically rigorous from Pre-nursery up to XII.", name: "Meenakshi Sharma", role: "Parent of Grade 6 Student", initials: "MS" }
        ]
    },
    
    aboutPage: {
        header: { title: "About Our School", subtitle: "Our story, mission, and leadership team" },
        story: { heading: "Our Story", text: "Dev Rishi International School was founded in 2015 with the noble goal of bringing progressive, high-quality modern education to the Saharanpur region. Affiliated to the Central Board of Secondary Education (CBSE), New Delhi, we are situated in a spacious campus on Sarsawa Road, just 3 km from Nakur. Our school nurtures children from Pre-nursery all the way to Grade XII (offering specialized Science, Commerce, and Humanities streams).\n\nWe focus on a comprehensive educational approach—combining strict academic rigor with life-changing extracurricular skills. With unique facilities like a professional indoor Shooting Range, a fully active National Cadet Corps (NCC) wing, digital Smart Classrooms, highly updated Science/Computer Labs, and a pioneering Robotics program, we ensure that every student discovers their absolute potential and emerges as a responsible, resilient global citizen." },
        leadership: {
            heading: "School Leadership",
            members: [
                { name: "Subhash Chaudhary", position: "Chairman", bio: "Providing visionary leadership and steering the institution towards standard academic excellence and national values.", image: "School_Images/Chairman.jpeg", icon: "fas fa-user-tie" },
                { name: "Mayank Chaudhary", position: "Director", bio: "Driving modern operational strategies, smart infrastructure, and dynamic technology integration in sports and studies.", image: "School_Images/Director.jpeg", icon: "fas fa-user-tie" },
                { name: "Mahak Singh", position: "Principal", bio: "M.A. Education, M.A. Hindi, B.Ed., Ph.D. (Pursuing). Over 20 years of rich academic and administrative experience leading institutions with pedagogical excellence.", image: "School_Images/Principle_Vice_Principle.jpeg", icon: "fas fa-user-tie" },
                { name: "Ravish Chaudhary", position: "Vice Principal", bio: "Ph.D. (Education Pursuing), M.Ed., M.A. Education, M.Com. Dedicated to high standards of student discipline, teacher coordination, and modern curriculum management.", image: "School_Images/Principle_Vice_Principle.jpeg", icon: "fas fa-user-tie" }
            ]
        },
        facilities: {
            heading: "State-of-the-Art Facilities",
            items: [
                { name: "School Building & Campus", icon: "fas fa-school", description: "Spacious, secure, and modern campus only 3 km from Nakur on Sarsawa Road, set amidst beautiful scenery.", image: "School_Images/School_Building.jpeg" },
                { name: "Professional Shooting Range", icon: "fas fa-bullseye", description: "Top-tier indoor rifle and pistol shooting range for professional coaching, developing absolute focus and sportsmanship.", image: "School_Images/Shooting_Range.jpeg" },
                { name: "Smart Classrooms", icon: "fas fa-desktop", description: "Equipped with state-of-the-art interactive smart screens for engaging, graphic-rich learning sessions.", image: "School_Images/Smart_Class_Rooms/IMG-20260511-WA0057.jpg.jpeg" },
                { name: "Advanced Robotics Lab", icon: "fas fa-robot", description: "A futuristic workspace for hands-on robotics design, electronics coding, and artificial intelligence models.", image: "School_Images/Robotics/IMG-20260513-WA0054.jpg.jpeg" },
                { name: "Composite Science Labs", icon: "fas fa-flask-vial", description: "Fully stocked Physics, Chemistry, and Biology laboratories enabling deep experimental inquiry and research.", image: "School_Images/Physics_Bio_Lab_Staff_Room/IMG-20260512-WA0131(1).jpg.jpeg" },
                { name: "Computer Laboratory", icon: "fas fa-laptop-code", description: "Advanced systems with high-speed internet connectivity, supporting computer science training from early grades.", image: "School_Images/Computer_Lab/IMG-20260511-WA0053.jpg.jpeg" },
                { name: "Knowledge Library", icon: "fas fa-book-open", description: "A vast collection of reference volumes, academic journals, storytelling books, and digital reading tools.", image: "School_Images/Library.jpeg" },
                { name: "Sports Playground", icon: "fas fa-running", description: "Expansive outdoor playground with track facilities and fields for cricket, football, basketball, and athletic activities.", image: "School_Images/Ground/Ground.jpeg" },
                { name: "Play Class Room", icon: "fas fa-shapes", description: "A vibrant, creative, and safe play school environment with interactive toys for our pre-primary children.", image: "School_Images/Play_Class_Room/IMG-20260511-WA0042.jpg.jpeg" }
            ]
        }
    },
    
    academicsPage: {
        header: { title: "Academic Excellence", subtitle: "Pre-nursery to Grade XII Programs" },
        programs: {
            heading: "Our Academic Programs",
            items: [
                { name: "Pre-Primary School", icon: "fa-child", grades: "Pre-Nursery - UKG", description: "A warm, play-based early foundation focusing on basic motor skills, linguistic sounds, numbers, and creative play.", image: "School_Images/Play_Class_Room/IMG-20260511-WA0042.jpg.jpeg" },
                { name: "Primary School", icon: "fa-book-open", grades: "Grade I - V", description: "CBSE curriculum focusing on foundational language skills, mathematics, general science, and social sciences with practical activities.", image: "School_Images/Class_Rooms/IMG-20260512-WA0055(1).jpg.jpeg" },
                { name: "Middle School", icon: "fa-brain", grades: "Grade VI - VIII", description: "Fostering deeper logical analysis, science experiments, computational languages, and active co-curricular and sports choices.", image: "School_Images/Smart_Class_Rooms/IMG-20260512-WA0024(1).jpg.jpeg" },
                { name: "Senior Secondary", icon: "fa-graduation-cap", grades: "Grade IX - XII", description: "Specialized CBSE board preparation with highly focused streams in Science (PCM/PCB), Commerce, and Humanities alongside comprehensive career counseling.", image: "School_Images/Physics_Bio_Lab_Staff_Room/IMG-20260512-WA0131(1).jpg.jpeg" }
            ]
        },
        clubs: {
            heading: "Co-Curricular & Special Highlights",
            items: [
                { name: "National Cadet Corps (NCC)", icon: "fa-shield-halved", description: "Fostering leadership, courage, and secular ideals. Our cadets engage in camp training, drill routines, and public welfare campaigns.", image: "School_Images/NCC_Cadets.jpg.jpeg" },
                { name: "Shooting Sports Club", icon: "fa-crosshairs", description: "Unleash discipline and laser focus inside our indoor shooting range. Professional training for district, state, and national tournaments.", image: "School_Images/Shooting_Range.jpeg" },
                { name: "Robotics & AI Club", icon: "fa-microchip", description: "Learn circuit design, logic gates, microcontrollers, and Python code to design smart robots and solve real-world problems.", image: "School_Images/Robotics/IMG-20260513-WA0054.jpg.jpeg" },
                { name: "Sports & Cultural Society", icon: "fa-masks-theater", description: "Active societies promoting track & field athletics, martial arts, drama, classical music, and folk arts to nurture global perspective.", image: "School_Images/Sports_and_Culture/IMG-20231205-WA0047.jpg.jpeg" }
            ]
        }
    },
    
    admissionsPage: {
        header: { title: "Admissions 2026-27", subtitle: "Secure a bright future at Dev Rishi" },
        process: {
            heading: "How to Apply",
            steps: [
                { title: "Inquire & Collect Form", description: "Visit the school reception located at Sarsawa Road, Saharanpur or download the digital application form." },
                { title: "Submit Documents", description: "Submit the filled application along with student ID proof, past report cards, transfer certificate (TC), and passport photographs." },
                { title: "Entrance Assessment", description: "Students from Grade I and above take a basic diagnostic test on core English, Math, and General Knowledge." },
                { title: "Interaction & Admission", description: "A brief, welcoming interaction of parents and candidates with the Principal. Upon approval, finalize tuition dues to confirm enrollment." }
            ]
        },
        fees: {
            heading: "Transparent Fee Structure (Annual)",
            columns: ["Grade Level", "Tuition Fee", "Development Fee", "Total Fee"],
            rows: [
                { grade: "Pre-Nursery - UKG", tuition: "₹35,000", development: "₹5,000", total: "₹40,000" },
                { grade: "Grade I - V", tuition: "₹42,000", development: "₹6,000", total: "₹48,000" },
                { grade: "Grade VI - VIII", tuition: "₹48,000", development: "₹7,000", total: "₹55,000" },
                { grade: "Grade IX - X", tuition: "₹55,000", development: "₹8,000", total: "₹63,000" },
                { grade: "Grade XI - XII (All Streams)", tuition: "₹65,000", development: "₹10,000", total: "₹75,000" }
            ]
        },
        faq: {
            heading: "Frequently Asked Questions",
            items: [
                { question: "Is Dev Rishi International School affiliated to CBSE?", answer: "Yes, DRIS is fully affiliated to the Central Board of Secondary Education (CBSE), New Delhi, offering academic curriculum from Pre-nursery up to Grade XII." },
                { question: "What special athletic facilities are available?", answer: "We have an exceptional indoor rifle/pistol shooting range, large cricket and soccer playfields, and a track for field sports." },
                { question: "Is the National Cadet Corps (NCC) available for all senior students?", answer: "Yes, we have an active, registered NCC wing. Eligible students from middle and senior school are welcome to join and train under active instructors." },
                { question: "Where is the school located and do you provide school transport?", answer: "We are situated just 3 km from Nakur on Sarsawa Road, Saharanpur. DRIS operates safe, camera-monitored school buses covering Nakur, Sarsawa, and surrounding villages." }
            ]
        }
    },
    
    eventsPage: {
        header: { title: "News & Events", subtitle: "Catch up with the latest milestones and student stories" }
    },
    
    contactPage: {
        header: { title: "Connect With Us", subtitle: "We are eager to hear from you" },
        info: {
            heading: "Contact Information",
            items: [
                { icon: "fas fa-map-marker-alt", label: "School Address", value: "Dev Rishi International School\nOnly 3 km from Nakur, Sarsawa Road, Saharanpur, Uttar Pradesh - 247341" },
                { icon: "fas fa-phone", label: "Phone Number", value: "+91 7037535234" },
                { icon: "fas fa-envelope", label: "Email Address", value: "devrishischool123@gmail.com" },
                { icon: "fas fa-clock", label: "Working Hours", value: "Monday - Saturday: 8:00 AM - 2:00 PM" }
            ]
        },
        form: {
            heading: "Send Us a Message",
            fields: [
                { type: "text", placeholder: "Your Name", required: true },
                { type: "email", placeholder: "Your Email Address", required: true },
                { type: "text", placeholder: "Subject", required: false },
                { type: "textarea", placeholder: "Write Your Message", required: true }
            ],
            buttonText: "Send Message",
            successMessage: "Thank you for contacting Dev Rishi International School. Our office will respond to your inquiry shortly."
        }
    },
    
    footer: {
        about: { heading: "Dev Rishi International School", text: "Established in 2015 and affiliated to CBSE, New Delhi. Dedicated to offering high-quality holistic education, strong leadership values through NCC, and precision skills through shooting sports in Saharanpur." },
        quickLinks: { heading: "Quick Navigation", links: [
            { text: "About Us", href: "about.html" },
            { text: "Academics", href: "academics.html" },
            { text: "Admissions", href: "admissions.html" },
            { text: "News & Events", href: "events.html" },
            { text: "Contact Us", href: "contact.html" }
        ] },
        contact: { heading: "Contact Info", items: [
            { icon: "fas fa-map-marker-alt", text: "Nakur Sarsawa Road, Saharanpur" },
            { icon: "fas fa-phone", text: "+91 7037535234" },
            { icon: "fas fa-envelope", text: "devrishischool123@gmail.com" }
        ] },
        social: [
            { icon: "fab fa-facebook-f", link: "#" },
            { icon: "fab fa-twitter", link: "#" },
            { icon: "fab fa-instagram", link: "#" },
            { icon: "fab fa-youtube", link: "#" }
        ],
        copyright: "© 2026 Dev Rishi International School. All rights reserved."
    }
};

window.schoolData = schoolData;