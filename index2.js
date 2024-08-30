const carousel = document.querySelector('.crsl');
const images = ['images1.jpg', 'images2.jpg', 'images3.jpg', 'images.jpg'];
let currentIndex = 0;

function changeBackground() {
  carousel.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 5000); // Change background every 5 seconds
