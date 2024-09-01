const carousel = document.querySelector('.crsl');
const images = ['images1.jpg', 'images2.jpg', 'images3.jpg', 'images.jpg'];
let currentIndex = 0;

function changeBackground() {
  carousel.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 5000); // Change background every 5 seconds
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Show specific slide
function showSlides(n) {
    let slides = document.getElementsByClassName("review");
    
    if (n > slides.length) {
        slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Show the current slide
    slides[slideIndex-1].style.display = "block";  
}

