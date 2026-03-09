document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.add('scrolled'); // Ensure it starts transparent, adding scrolled adds bg
            // Actually, let's keep it clean
            if (window.scrollY > 20) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // 2. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle icon
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // 3. Typing Effect
    const texts = [
        "Full Stack Python Django Developer",
        "React Frontend Enthusiast",
        "API & Backend Architect",
        "Problem Solver"
    ];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    const typingElement = document.querySelector('.typing-text');

    function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        typingElement.textContent = letter;

        if (letter.length === currentText.length) {
            setTimeout(() => {
                index = 0;
                count++;
                type();
            }, 2000); // Wait before starting next word
        } else {
            setTimeout(type, 100);
        }
    }

    // Start typing effect
    setTimeout(type, 1000);

    // 4. Scroll Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Once revealed, stop observing to keep it visible
            }
        });
    };

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 5. Active Nav Link Update on Scroll
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 6. Contact Form Submission (Mock)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;

            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            btn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                contactForm.reset();
                btn.innerHTML = '<span>Message Sent!</span> <i class="fas fa-check"></i>';
                btn.classList.replace('btn-primary', 'btn-outline');

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.replace('btn-outline', 'btn-primary');
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // 7. Set Current Year in Footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});
