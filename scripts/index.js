const navLinks = document.querySelectorAll('.nav-menu a');
const currentUrl = window.location.pathname.split('/').pop(); // Get the current file name

navLinks.forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop(); // Get the file name from href
    if (linkPath === currentUrl) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});


// Hero Slideshow Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize slideshow
    const slides = document.querySelectorAll('.slideshow-slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    const slideInterval = 5000; // Change slide every 5 seconds
    
    // Function to show specific slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Deactivate all indicators
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
        
        // Show current slide and activate indicator
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        
        currentSlide = index;
    }
    
    // Auto advance slides
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Set up indicator click events
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-index'));
            showSlide(slideIndex);
            
            // Reset the timer to prevent immediate slide change after manual selection
            clearInterval(slideTimer);
            slideTimer = setInterval(nextSlide, slideInterval);
        });
    });
    
    // Start automatic slideshow
    let slideTimer = setInterval(nextSlide, slideInterval);
    
    // Pause slideshow when user hovers over it
    const slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.addEventListener('mouseenter', function() {
        clearInterval(slideTimer);
    });
    
    // Resume slideshow when user leaves
    slideshowContainer.addEventListener('mouseleave', function() {
        slideTimer = setInterval(nextSlide, slideInterval);
    });
});