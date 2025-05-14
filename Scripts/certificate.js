document.addEventListener('DOMContentLoaded', function() {
    // Get the certificate ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const certId = urlParams.get('id');
    
    // Certificate data
    const certificates = {
        '1': {
            title: 'CMD',
            description: 'Windows Command Line Certification covering all essential commands and scripting techniques for effective system administration and automation.',
            issuer: 'Udemy',
            date: 'Issued: October 2023',
            imageUrl: '../images/UC-eb7d17b4-9788-4b0e-ae0a-98d9621d634c.jpg'
        },
        '2': {
            title: 'Linux Administration',
            description: 'Comprehensive Linux administration certification covering system management, shell scripting, and server configuration.',
            issuer: 'Udemy',
            date: 'Issued: October 2023',
            imageUrl: '../images/linux.jpg'
        },
        '3': {
            title: 'OSINT',
            description: 'Open Source Intelligence certification focusing on information gathering techniques from public sources for security analysis.',
            issuer: 'Udemy',
            date: 'Issued: October 2023',
            imageUrl: '../images/osint.jpg'
        },
        '4': {
            title: 'Cybersecurity Fundamentals',
            description: 'Fundamental cybersecurity concepts including threat analysis, vulnerability assessment, and security protocols.',
            issuer: 'Udemy',
            date: 'Issued: October 2023',
            imageUrl: '../images/Ethical_Hacking (1).png'
        },
        '5': {
            title: 'Web Development',
            description: 'Modern web development certification covering HTML5, CSS3, JavaScript, and responsive design principles.',
            issuer: 'IEEE',
            date: 'Issued: 2023',
            imageUrl: '../images/CC6.png'
        },
        '6': {
            title: 'Python Programming',
            description: 'Python programming basics including data structures, algorithms, and object-oriented programming concepts.',
            issuer: 'Udemy',
            date: 'Issued: 2024',
            imageUrl: '../images/Python_Programming_Basics.png'
        },
        '7': {
            title: 'Certified Ethical Hacker',
            description: 'Ethical hacking certification covering penetration testing methodologies and security assessment techniques.',
            issuer: 'Mahara Tech',
            date: 'Issued: 2025',
            imageUrl: '../images/CHE.png'
        },
        '8': {
            title: 'Network Fundamentals',
            description: 'Computer networking fundamentals including TCP/IP, routing, switching, and network protocols.',
            issuer: 'Mahara Tech',
            date: 'Issued: 2025',
            imageUrl: '../images/network1.png'
        },
        '9': {
            title: 'Network Security',
            description: 'Network security principles including firewalls, VPNs, intrusion detection, and prevention systems.',
            issuer: 'Mahara Tech',
            date: 'Issued: 2025',
            imageUrl: '../images/network2.png'
        },
        '10': {
            title: 'Python Programming',
            description: 'Advanced Python programming including web development, automation.',
            issuer: 'Mahara Tech',
            date: 'Issued: 2025',
            imageUrl: '../images/python.png'
        },
        '11': {
            title: 'Database Fundamentals',
            description: 'Introduction to database systems covering SQL, database design, and management principles.',
            issuer: 'Mahara Tech',
            date: 'Issued: 2025',
            imageUrl: '../images/db_intro.png'
        },
        '12':{
            title: 'start CyberSecurity learning',
            description: 'Introduction to Cybersecurity covering basic concepts, tools, Courses, Fields, and resources for beginners.',
            issuer: 'Udemy',
            date: 'Issued: 2023',
            imageUrl: './../images/guide.jpg'
        },
        '13': {
            title: 'JavaScript Programming Language',
            description: 'Comprehensive course on core JavaScript concepts including data types, functions, OOP, DOM manipulation, JSON, AJAX, and event handling. Covers both client-side and server-side applications, ideal for beginners and new developers.',
            issuer: 'Mahara Tech',
            date: 'Issued: 2025',
            imageUrl: './../images/js.png'
        }

    };

    // If on certificate details page, load the certificate data
    if (window.location.pathname.includes('certificate.html')) {
        if (certId && certificates[certId]) {
            const cert = certificates[certId];
            document.getElementById('certificate-img').src = cert.imageUrl;
            document.getElementById('certificate-img').alt = cert.title + ' Certificate';
            document.getElementById('certificate-title').textContent = cert.title;
            document.getElementById('certificate-description').textContent = cert.description;
            document.getElementById('certificate-issuer').textContent = 'Issuer: ' + cert.issuer;
            document.getElementById('certificate-date').textContent = cert.date;
            document.title = cert.title + ' Certificate | Amr Khaled';
        } else {
            // Redirect if certificate not found
            window.location.href = 'certifications.html';
        }
    }
});