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
    
    announcements: [
        "Admissions open for Academic Session 2026-27! Secure a bright future for your child today.",
        "National Cadet Corps (NCC) registration is now open for Grades VIII to XI.",
        "Dev Rishi International School has launched a state-of-the-art Advanced Robotics & AI lab.",
        "Indoor Shooting Range practice schedule updated for the upcoming CBSE Zonal Tournament."
    ],
    
    navigation: [
        { label: "Home", href: "index.html", icon: "fas fa-home" },
        { label: "About", href: "about.html", icon: "fas fa-info-circle" },
        { label: "Academics", href: "academics.html", icon: "fas fa-book" },
        { label: "Admissions", href: "admissions.html", icon: "fas fa-user-plus" },
        { label: "Gallery", href: "gallery.html", icon: "fas fa-images" },
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
                "School_Images/Sports_and_Culture/Shooting_Range.jpeg",
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

    // A flattened gallery image list (used for on-demand galleries).
    // Populate with available images from the School_Images folder.
    galleryImages: {
        about: [
            "School_Images/Class_Rooms/IMG-20260512-WA0063.jpg.jpeg",
            "School_Images/Class_Rooms/WhatsApp Image 2026-06-01 at 10.21.45 AM.jpeg",
            "School_Images/Class_Rooms/WhatsApp Image 2026-06-01 at 10.22.48 AM.jpeg",
            "School_Images/Class_Rooms/WhatsApp Image 2026-06-01 at 10.23.29 AM.jpeg",
            "School_Images/Class_Rooms/WhatsApp Image 2026-06-01 at 10.24.24 AM.jpeg",
            "School_Images/Class_Rooms/WhatsApp Image 2026-06-01 at 10.24.51 AM.jpeg",
            "School_Images/Play_Class_Room/IMG-20260511-WA0043.jpg.jpeg",
            "School_Images/Play_Class_Room/IMG-20260511-WA0045.jpg.jpeg",
            "School_Images/Play_Class_Room/IMG-20260511-WA0046.jpg.jpeg",
            "School_Images/Play_Class_Room/IMG-20260511-WA0047.jpg.jpeg",
            "School_Images/Ground/Ground 1.jpeg",
            "School_Images/Ground/20260511_170659.jpg",
            "School_Images/Ground/20260511_170723.jpg"
        ],
        academics: [
            "School_Images/Computer_Lab/IMG-20250710-WA0007(1).jpg.jpeg",
            "School_Images/Computer_Lab/IMG-20260511-WA0054.jpg.jpeg",
            "School_Images/Smart_Class_Rooms/IMG-20260512-WA0042(1).jpg.jpeg",
            "School_Images/Smart_Class_Rooms/IMG-20260512-WA0051.jpg.jpeg",
            "School_Images/Smart_Class_Rooms/IMG-20260512-WA0070.jpg.jpeg",
            "School_Images/Physics_Bio_Lab_Staff_Room/IMG-20260512-WA0136.jpg.jpeg",
            "School_Images/Physics_Bio_Lab_Staff_Room/IMG-20260512-WA0143(1).jpg.jpeg",
            "School_Images/Physics_Bio_Lab_Staff_Room/IMG-20260512-WA0164(1).jpg.jpeg",
            "School_Images/Physics_Bio_Lab_Staff_Room/IMG-20260512-WA0168(1).jpg.jpeg",
            "School_Images/Physics_Bio_Lab_Staff_Room/IMG-20260512-WA0170.jpg.jpeg"
        ],
        events: [
            "School_Images/Robotics/IMG-20260513-WA0056.jpg.jpeg",
            "School_Images/Robotics/IMG-20260513-WA0063.jpg.jpeg",
            "School_Images/Robotics/IMG-20260513-WA0064.jpg.jpeg",
            "School_Images/Robotics/IMG-20260513-WA0065.jpg.jpeg",
            "School_Images/Robotics/VID-20260513-WA0062.mp4",
            "School_Images/Robotics/VID-20260513-WA0066.mp4",
            "School_Images/Sports_and_Culture/IMG-20231205-WA0063(1).jpg.jpeg",
            "School_Images/Sports_and_Culture/WhatsApp Image 2026-05-24 at 1.40.44 PM.jpeg",
            "School_Images/Sports_and_Culture/WhatsApp Image 2026-05-24 at 1.40.45 PM.jpeg",
            "School_Images/Sports_and_Culture/WhatsApp Image 2026-05-24 at 1.40.46 PM (1).jpeg",
            "School_Images/Sports_and_Culture/WhatsApp Image 2026-05-24 at 1.40.46 PM.jpeg",
            "School_Images/Sports_and_Culture/WhatsApp Image 2026-06-01 at 10.32.41 AM (1).jpeg",
            "School_Images/Sports_and_Culture/WhatsApp Image 2026-06-01 at 10.32.41 AM.jpeg",
            "School_Images/Sports_and_Culture/WhatsApp Image 2026-06-01 at 10.32.42 AM.jpeg",
            "School_Images/Sports_and_Culture/WhatsApp Image 2026-06-01 at 10.32.44 AM.jpeg",
            "School_Images/Sports_and_Culture/WhatsApp Image 2026-06-01 at 10.32.45 AM.jpeg",
            "School_Images/Sports_and_Culture/WhatsApp Image 2026-06-01 at 10.35.50 AM (1).jpeg",
            "School_Images/Sports_and_Culture/WhatsApp Image 2026-06-01 at 10.35.50 AM.jpeg",
            "School_Images/Physics_Bio_Lab_Staff_Room/WhatsApp Image 2026-05-24 at 1.19.00 PM.jpeg",
            "School_Images/Physics_Bio_Lab_Staff_Room/WhatsApp Image 2026-06-01 at 10.32.43 AM.jpeg"
        ]
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
        visionMission: {
            vision: {
                heading: "Our Vision",
                text: "To build a benchmark institution of holistic learning that nurtures intellectually brilliant, emotionally resilient, and morally upright leaders who are deeply rooted in national values and equipped to excel in a globalized world.",
                icon: "fas fa-eye"
            },
            mission: {
                heading: "Our Mission",
                text: "We commit to offering state-of-the-art digital infrastructure, competitive sports complexes (like our professional shooting range), and character-building wings (like the NCC) that challenge students to master their strengths, cultivate patriotic service, and emerge as responsible, progressive global citizens.",
                icon: "fas fa-bullseye"
            }
        },
        principalMessage: {
            heading: "Principal's Welcome Desk",
            name: "Dr. Mahak Singh",
            credentials: "M.A. Education, M.A. Hindi, B.Ed., Ph.D. (Pursuing)",
            image: "School_Images/Staff/Principal.jpeg",
            message: "Dear Parents, Students, and Well-wishers,\n\nWelcome to Dev Rishi International School. Since our foundation in 2015, our guiding light has been to provide a holistic, progressive educational environment that balances strict academic excellence with practical extracurricular life skills. We believe that every child possesses a unique spark of potential. Our digital smart classrooms, pioneering robotics lab, active NCC cadets wing, and professional indoor shooting range are designed to ignite that spark and cultivate discipline, leadership, and focus.\n\nWe do not just prepare students for examinations; we prepare them for life. I invite you to join hands with us in this beautiful journey of nurturing the future leaders of our nation.\n\nWarm regards,\nDr. Mahak Singh\nPrincipal, DRIS"
        },
        leadership: {
            heading: "School Leadership",
            members: [
                { name: "Subhash Chaudhary", position: "Chairman", bio: "Providing visionary leadership and steering the institution towards standard academic excellence and national values.", image: "School_Images/Staff/Chairman.jpeg", icon: "fas fa-user-tie" },
                { name: "Mayank Chaudhary", position: "Director", bio: "Driving modern operational strategies, smart infrastructure, and dynamic technology integration in sports and studies.", image: "School_Images/Staff/Director.jpeg", icon: "fas fa-user-tie" },
                { name: "Mahak Singh", position: "Principal", bio: "M.A. Education, M.A. Hindi, B.Ed., Ph.D. (Pursuing). Over 20 years of rich academic and administrative experience leading institutions with pedagogical excellence.", image: "School_Images/Staff/Principal.jpeg", icon: "fas fa-user-tie" },
                { name: "Ravish Chaudhary", position: "Vice Principal", bio: "Ph.D. (Education Pursuing), M.Ed., M.A. Education, M.Com. Dedicated to high standards of student discipline, teacher coordination, and modern curriculum management.", image: "School_Images/Staff/Vice_Principal.jpeg", icon: "fas fa-user-tie" }
            ]
        },
        staff: {
            heading: "Our Dedicated Team & Staff",
            description: "At Dev Rishi International School, our teachers, administrators, and support staff work hand-in-hand to cultivate a nurturing and supportive environment for every student. Our team brings a rich blend of experience, academic brilliance, and heart to the campus every single day.",
            image: "School_Images/Staff/CompleteStaff.jpeg"
        },
        disclosures: {
            heading: "CBSE Mandatory Public Disclosures",
            description: "In compliance with the Central Board of Secondary Education (CBSE) directives, Dev Rishi International School maintains absolute transparency by publishing official accreditation, safety compliance certificates, and administrative details.",
            items: [
                { title: "CBSE Affiliation Extension Letter", category: "General Info", date: "April 2025", size: "1.4 MB", link: "docs/Affiliation_Extension_Letter.pdf" },
                { title: "Society Registration Certificate", category: "Management", date: "June 2014", size: "820 KB", link: "docs/Society_Registration_Certificate.pdf" },
                { title: "No Objection Certificate (NOC)", category: "Government NOC", date: "December 2014", size: "910 KB", link: "docs/No_Objection_Certificate.pdf" },
                { title: "School Building Safety Certificate", category: "Safety Compliance", date: "March 2026", size: "1.1 MB", link: "docs/Building_Safety_Certificate.pdf" },
                { title: "Fire Safety Compliance Certificate", category: "Safety Compliance", date: "February 2026", size: "1.3 MB", link: "docs/Fire_Safety_Certificate.pdf" },
                { title: "Water and Health Sanitation Certificate", category: "Safety Compliance", date: "April 2026", size: "640 KB", link: "docs/Water_Sanitation_Certificate.pdf" },
                { title: "Official Fee Structure 2026-27", category: "Finance", date: "May 2026", size: "520 KB", link: "docs/Fee_Structure_2026-27.pdf" },
                { title: "Academic Calendar & Holiday List", category: "Academic Resources", date: "May 2026", size: "980 KB", link: "docs/Academic_Calendar_2026-27.pdf" }
            ]
        },
        facilities: {
            heading: "State-of-the-Art Facilities",
            items: [
                { name: "School Building & Campus", icon: "fas fa-school", description: "Spacious, secure, and modern campus only 3 km from Nakur on Sarsawa Road, set amidst beautiful scenery.", image: "School_Images/School_Building.jpeg" },
                { name: "Professional Shooting Range", icon: "fas fa-bullseye", description: "Top-tier indoor rifle and pistol shooting range for professional coaching, developing absolute focus and sportsmanship.", image: "School_Images/Sports_and_Culture/Shooting_Range.jpeg" },
                { name: "Smart Classrooms", icon: "fas fa-desktop", description: "Equipped with state-of-the-art interactive smart screens for engaging, graphic-rich learning sessions.", image: "School_Images/Smart_Class_Rooms/IMG-20260511-WA0057.jpg.jpeg" },
                { name: "Advanced Robotics Lab", icon: "fas fa-robot", description: "A futuristic workspace for hands-on robotics design, electronics coding, and artificial intelligence models.", image: "School_Images/Robotics/IMG-20260513-WA0054.jpg.jpeg" },
                { name: "Composite Science Labs", icon: "fas fa-flask-vial", description: "Fully stocked Physics, Chemistry, and Biology laboratories enabling deep experimental inquiry and research.", image: "School_Images/Physics_Bio_Lab_Staff_Room/IMG-20260512-WA0131(1).jpg.jpeg" },
                { name: "Computer Laboratory", icon: "fas fa-laptop-code", description: "Advanced systems with high-speed internet connectivity, supporting computer science training from early grades.", image: "School_Images/Computer_Lab/IMG-20260511-WA0053.jpg.jpeg" },
                { name: "Knowledge Library", icon: "fas fa-book-open", description: "A vast collection of reference volumes, academic journals, storytelling books, and digital reading tools.", image: "School_Images/Class_Rooms/Library.jpeg" },
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
                { name: "Shooting Sports Club", icon: "fa-crosshairs", description: "Unleash discipline and laser focus inside our indoor shooting range. Professional training for district, state, and national tournaments.", image: "School_Images/Sports_and_Culture/Shooting_Range.jpeg" },
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
            heading: "Fee Structure",
            columns: ["Class", "Monthly Fee", "Reg. Fee"],
            rows: [
                { grade: "PLAY", monthly: "₹1,000", registration: "₹1,000" },
                { grade: "NURSERY", monthly: "₹1,000", registration: "₹1,000" },
                { grade: "L.K.G.", monthly: "₹1,000", registration: "₹1,000" },
                { grade: "U.K.G.", monthly: "₹1,000", registration: "₹1,000" },
                { grade: "I", monthly: "₹1,300", registration: "₹1,000" },
                { grade: "II", monthly: "₹1,300", registration: "₹1,000" },
                { grade: "III", monthly: "₹1,300", registration: "₹1,000" },
                { grade: "IV", monthly: "₹1,300", registration: "₹1,000" },
                { grade: "V", monthly: "₹1,300", registration: "₹1,000" },
                { grade: "VI", monthly: "₹1,700", registration: "₹1,000" },
                { grade: "VII", monthly: "₹1,700", registration: "₹1,000" },
                { grade: "VIII", monthly: "₹1,700", registration: "₹1,000" },
                { grade: "IX", monthly: "₹2,000", registration: "₹1,000" },
                { grade: "X", monthly: "₹2,000", registration: "₹1,000" },
                { grade: "XI (PCM)", monthly: "₹2,500", registration: "₹1,000" },
                { grade: "XI (COM.)", monthly: "₹2,400", registration: "₹1,000" },
                { grade: "XI (PCB)", monthly: "₹2,500", registration: "₹1,000" },
                { grade: "XI (HUM.)", monthly: "₹2,400", registration: "₹1,000" },
                { grade: "XII (PCM)", monthly: "₹2,500", registration: "₹1,000" },
                { grade: "XII (COM.)", monthly: "₹2,400", registration: "₹1,000" },
                { grade: "XII (PCB)", monthly: "₹2,500", registration: "₹1,000" },
                { grade: "XII (HUM.)", monthly: "₹2,400", registration: "₹1,000" }
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
            { text: "Gallery", href: "gallery.html" },
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