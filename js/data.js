// ============================================
// SCHOOL WEBSITE DATA - WITH WORKING STOCK IMAGES
// ============================================

// IMAGE MODE SETTING: "local" or "stock"
const IMAGE_MODE = "stock";  // Change to "local" to use your images folder

const schoolData = {
    name: "Excellence Academy",
    shortName: "EA",
    tagline: "Nurturing Minds, Building Futures",
    established: "2005",
    
    navigation: [
        { label: "Home", href: "index.html", icon: "fas fa-home" },
        { label: "About", href: "about.html", icon: "fas fa-info-circle" },
        { label: "Academics", href: "academics.html", icon: "fas fa-book" },
        { label: "Admissions", href: "admissions.html", icon: "fas fa-user-plus" },
        { label: "Events", href: "events.html", icon: "fas fa-calendar" },
        { label: "Contact", href: "contact.html", icon: "fas fa-envelope" }
    ],
    
    // Image sources for both modes - using guaranteed working Picsum URLs
    images: {
        local: {
            hero: "images/hero-bg.jpg",
            about: "images/campus-aerial.jpg",
            events: [
                "images/events/science-exhibition.jpg",
                "images/events/sports-day.jpg",
                "images/events/cultural-fest.jpg",
                "images/events/ptm.jpg",
                "images/events/graduation.jpg",
                "images/events/book-fair.jpg"
            ]
        },
        stock: {
            // Using Picsum (LoremFlick) - guaranteed to work forever
            hero: "https://picsum.photos/id/20/1600/900",     // Typing on laptop
            about: "https://picsum.photos/id/15/800/600",     // Green leaves
            events: [
                "https://picsum.photos/id/24/600/400",        // Bridge
                "https://picsum.photos/id/26/600/400",        // Stairs
                "https://picsum.photos/id/28/600/400",        // Mountain stream
                "https://picsum.photos/id/29/600/400",        // City walk
                "https://picsum.photos/id/30/600/400",        // Coffee beans
                "https://picsum.photos/id/31/600/400"         // Path in forest
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
        title: "Welcome to Excellence Academy",
        subtitle: "Nurturing Minds, Building Futures",
        buttons: [
            { text: "Apply Now", link: "admissions.html", class: "btn-primary" },
            { text: "Learn More", link: "about.html", class: "btn-secondary" }
        ]
    },
    
    stats: [
        { number: 2500, label: "Students Enrolled", suffix: "+" },
        { number: 2005, label: "Year Founded", suffix: "" },
        { number: 15, label: "Student-Teacher Ratio", suffix: ":1" }
    ],
    
    features: {
        heading: "Why Choose Excellence Academy?",
        subheading: "Discover what makes our institution special",
        items: [
            { icon: "fas fa-chalkboard-teacher", title: "Expert Faculty", description: "Our highly qualified teachers bring years of experience and passion to the classroom." },
            { icon: "fas fa-flask", title: "Modern Labs", description: "State-of-the-art science and computer laboratories for hands-on learning." },
            { icon: "fas fa-futbol", title: "Sports Facilities", description: "Extensive sports infrastructure including indoor and outdoor facilities." },
            { icon: "fas fa-music", title: "Arts & Culture", description: "Rich programs in music, dance, drama, and visual arts for creative expression." },
            { icon: "fas fa-laptop-code", title: "Digital Learning", description: "Smart classrooms equipped with the latest educational technology." },
            { icon: "fas fa-shield-alt", title: "Safe Campus", description: "24/7 security with CCTV surveillance and a secure, nurturing environment." }
        ]
    },
    
    aboutPreview: {
        heading: "About Excellence Academy",
        text: "Founded in 2005, Excellence Academy has been a beacon of quality education. We believe in holistic development, combining academic rigor with character building. Our campus spreads across 10 acres of lush greenery, providing an ideal environment for learning and growth.",
        buttonText: "Read More",
        buttonLink: "about.html"
    },
    
    eventsPreview: {
        heading: "Latest Events",
        subheading: "Stay updated with our school activities",
        showCount: 3,
        buttonText: "View All Events",
        buttonLink: "events.html"
    },
    
    events: [
        { title: "Annual Science Exhibition", date: "March 15, 2024", description: "Students showcase innovative science projects and experiments.", category: "Academic" },
        { title: "Sports Day 2024", date: "February 28, 2024", description: "Annual inter-house sports competition with track and field events.", category: "Sports" },
        { title: "Cultural Fest", date: "January 20, 2024", description: "A vibrant celebration of art, music, dance, and cultural diversity.", category: "Cultural" },
        { title: "Parent-Teacher Meeting", date: "December 10, 2023", description: "Regular interaction between parents and teachers for student progress.", category: "Meeting" },
        { title: "Graduation Ceremony", date: "May 25, 2024", description: "Celebrating the achievements of our graduating senior students.", category: "Ceremony" },
        { title: "Book Fair", date: "November 5, 2023", description: "Annual book fair with thousands of titles and author interactions.", category: "Academic" }
    ],
    
    testimonials: {
        heading: "What People Say",
        subheading: "Hear from our community",
        items: [
            { text: "The transformation in my child's confidence and academic performance since joining Excellence Academy has been remarkable. The teachers truly care about each student.", name: "Rajesh Kumar", role: "Parent of Grade 8 Student", initials: "RK" },
            { text: "EA provided me with a strong foundation that helped me excel in my engineering studies. The practical learning approach made complex concepts easy to understand.", name: "Amit Patel", role: "Alumni, Class of 2018", initials: "AP" },
            { text: "I'm impressed by the holistic development focus. My daughter loves going to school every day, thanks to the engaging activities and supportive environment.", name: "Priya Singh", role: "Parent of Grade 5 Student", initials: "PS" }
        ]
    },
    
    aboutPage: {
        header: { title: "About Excellence Academy", subtitle: "Our story, mission and values" },
        story: { heading: "Our Story", text: "Founded in 2005, Excellence Academy has been a beacon of quality education. We believe in holistic development, combining academic rigor with character building. Our campus spreads across 10 acres of lush greenery, providing an ideal environment for learning and growth. With a student-centered approach, we prepare our students not just for examinations, but for life." },
        leadership: {
            heading: "Our Leadership",
            members: [
                { name: "Dr. Sarah Johnson", position: "Principal", bio: "Ph.D. in Education with 20+ years of experience in academic leadership.", icon: "fas fa-user-tie" },
                { name: "Prof. Michael Chen", position: "Vice Principal", bio: "Masters in Mathematics Education, dedicated to innovative teaching methods.", icon: "fas fa-user-tie" },
                { name: "Mrs. Priya Sharma", position: "Head of Academics", bio: "Curriculum specialist with expertise in student-centered learning approaches.", icon: "fas fa-user-tie" }
            ]
        },
        facilities: {
            heading: "Our Facilities",
            items: [
                { name: "Library", icon: "fas fa-book", description: "A vast collection of over 25,000 books, journals, and digital resources." },
                { name: "Science Labs", icon: "fas fa-microscope", description: "Fully equipped Physics, Chemistry, and Biology laboratories." },
                { name: "Computer Lab", icon: "fas fa-desktop", description: "Modern computer lab with high-speed internet and latest software." },
                { name: "Sports Complex", icon: "fas fa-running", description: "Basketball court, swimming pool, cricket ground, and indoor gym." },
                { name: "Auditorium", icon: "fas fa-theater-masks", description: "A 500-seat auditorium for events, performances, and assemblies." },
                { name: "Cafeteria", icon: "fas fa-utensils", description: "Hygienic and nutritious meals prepared in our modern kitchen." }
            ]
        }
    },
    
    academicsPage: {
        header: { title: "Academics", subtitle: "Our curriculum and academic programs" },
        programs: {
            heading: "Academic Programs",
            items: [
                { name: "Pre-Primary", icon: "fa-child", grades: "Nursery - KG", description: "Play-based learning approach focusing on foundational skills and social development." },
                { name: "Primary School", icon: "fa-book-open", grades: "Grade 1-5", description: "Comprehensive curriculum covering languages, mathematics, science, and social studies." },
                { name: "Middle School", icon: "fa-brain", grades: "Grade 6-8", description: "Advanced curriculum with project-based learning and critical thinking development." },
                { name: "Senior School", icon: "fa-graduation-cap", grades: "Grade 9-12", description: "Specialized streams in Science, Commerce, and Humanities with career guidance." }
            ]
        },
        clubs: {
            heading: "Co-Curricular Activities",
            items: [
                { name: "Robotics Club", icon: "fa-robot", description: "Design, build, and program robots for competitions and exhibitions." },
                { name: "Debate Society", icon: "fa-comments", description: "Develop public speaking and critical thinking through regular debates." },
                { name: "Eco Club", icon: "fa-leaf", description: "Environmental awareness and sustainability projects in and around campus." },
                { name: "Photography Club", icon: "fa-camera", description: "Learn photography techniques and participate in exhibitions." }
            ]
        }
    },
    
    admissionsPage: {
        header: { title: "Admissions", subtitle: "Join the Excellence Academy family" },
        process: {
            heading: "Admission Process",
            steps: [
                { title: "Online Application", description: "Fill out the online application form with student and parent details." },
                { title: "Document Submission", description: "Upload required documents including previous academic records and ID proofs." },
                { title: "Entrance Assessment", description: "Students take a grade-appropriate assessment test on scheduled dates." },
                { title: "Interview", description: "Shortlisted candidates and parents meet with the admissions committee." },
                { title: "Admission Confirmation", description: "Selected candidates receive admission offer and complete fee payment." }
            ]
        },
        fees: {
            heading: "Fee Structure",
            columns: ["Grade", "Tuition Fee", "Development Fee", "Total"],
            rows: [
                { grade: "Nursery - KG", tuition: "₹85,000", development: "₹15,000", total: "₹1,00,000" },
                { grade: "Grade 1-5", tuition: "₹95,000", development: "₹18,000", total: "₹1,13,000" },
                { grade: "Grade 6-8", tuition: "₹1,05,000", development: "₹20,000", total: "₹1,25,000" },
                { grade: "Grade 9-10", tuition: "₹1,15,000", development: "₹22,000", total: "₹1,37,000" },
                { grade: "Grade 11-12", tuition: "₹1,25,000", development: "₹25,000", total: "₹1,50,000" }
            ]
        },
        faq: {
            heading: "Frequently Asked Questions",
            items: [
                { question: "What is the age criteria for admission?", answer: "The age criteria varies by grade level. For Nursery, the child should be 3+ years as of March 31st." },
                { question: "Is transportation available?", answer: "Yes, we provide bus transportation covering major routes within a 15km radius." },
                { question: "What curriculum do you follow?", answer: "We follow the CBSE curriculum from Grade 1 to 12." },
                { question: "Are scholarships available?", answer: "Yes, we offer merit-based and sports scholarships for deserving students." }
            ]
        }
    },
    
    eventsPage: {
        header: { title: "News & Events", subtitle: "Stay updated with our school community" }
    },
    
    contactPage: {
        header: { title: "Contact Us", subtitle: "Get in touch with us" },
        info: {
            heading: "Contact Information",
            items: [
                { icon: "fas fa-map-marker-alt", label: "Address", value: "123 Education Lane, Knowledge City, State - 400001" },
                { icon: "fas fa-phone", label: "Phone", value: "+91 98765 43210" },
                { icon: "fas fa-envelope", label: "Email", value: "info@excellenceacademy.edu" },
                { icon: "fas fa-clock", label: "Working Hours", value: "Monday - Friday: 8:00 AM - 4:00 PM\nSaturday: 8:00 AM - 12:00 PM" }
            ]
        },
        form: {
            heading: "Send Us a Message",
            fields: [
                { type: "text", placeholder: "Your Name", required: true },
                { type: "email", placeholder: "Your Email", required: true },
                { type: "text", placeholder: "Subject", required: false },
                { type: "textarea", placeholder: "Your Message", required: true }
            ],
            buttonText: "Send Message",
            successMessage: "Thank you for your message! We will get back to you soon."
        }
    },
    
    footer: {
        about: { heading: "Excellence Academy", text: "Nurturing minds, building futures. A place where learning meets excellence and every child discovers their potential." },
        quickLinks: { heading: "Quick Links", links: [
            { text: "About Us", href: "about.html" },
            { text: "Academics", href: "academics.html" },
            { text: "Admissions", href: "admissions.html" },
            { text: "Events", href: "events.html" },
            { text: "Contact", href: "contact.html" }
        ] },
        contact: { heading: "Contact Info", items: [
            { icon: "fas fa-map-marker-alt", text: "123 Education Lane, Knowledge City" },
            { icon: "fas fa-phone", text: "+91 98765 43210" },
            { icon: "fas fa-envelope", text: "info@excellenceacademy.edu" }
        ] },
        social: [
            { icon: "fab fa-facebook-f", link: "#" },
            { icon: "fab fa-twitter", link: "#" },
            { icon: "fab fa-instagram", link: "#" },
            { icon: "fab fa-youtube", link: "#" }
        ],
        copyright: "© 2024 Excellence Academy. All rights reserved."
    }
};

window.schoolData = schoolData;