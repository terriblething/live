// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove("active");
            hamburger.classList.remove("active");
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add active state to current page in navigation
const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Rotating photo on homepage with glitch effect
const rotatingPhoto = document.getElementById('rotating-photo');
if (rotatingPhoto) {
    const photos = [
        'images/full_band.jpg',
        'images/sam.jpg',
        'images/spence.jpg',
        'images/crowd_1.jpg',
        'images/michael_1.jpg',
        'images/tony.jpg',
        'images/pete_and_spence.jpg',
        'images/brendan.jpg',
        'images/pete.jpg'
    ];
    
    let currentPhotoIndex = 0;
    
    setInterval(() => {
        // Glitch animation
        let glitchCount = 0;
        const glitchInterval = setInterval(() => {
            rotatingPhoto.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
            rotatingPhoto.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
            glitchCount++;
            
            if (glitchCount > 8) {
                clearInterval(glitchInterval);
                rotatingPhoto.style.opacity = '0';
                
                setTimeout(() => {
                    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
                    rotatingPhoto.src = photos[currentPhotoIndex];
                    rotatingPhoto.style.transform = 'translate(0, 0)';
                    rotatingPhoto.style.filter = 'none';
                    rotatingPhoto.style.opacity = '1';
                }, 200);
            }
        }, 50);
    }, 5000);
}
