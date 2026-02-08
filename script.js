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

// Rotating photo on homepage with fade effect
const rotatingPhoto = document.getElementById('rotating-photo');
if (rotatingPhoto) {
    const photos = [
        'images/crowd_1.jpg',
        'images/sam.jpg',
        'images/michael_1.jpg',
        'images/tony.jpg',
        'images/pete_and_spence.jpg',
        'images/pete.jpg'
    ];
    
    let currentPhotoIndex = 0;
    
    setInterval(() => {
        // Fade out
        rotatingPhoto.style.opacity = '0';
        
        setTimeout(() => {
            // Change image while invisible
            currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
            rotatingPhoto.src = photos[currentPhotoIndex];
            
            // Fade back in
            rotatingPhoto.style.opacity = '1';
        }, 300);
        
    }, 5000);
}
