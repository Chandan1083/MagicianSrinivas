// document.addEventListener("DOMContentLoaded", () => {
//   const burger = document.querySelector(".bb-hamburger");
//   const nav = document.getElementById("bb-nav");
//   burger.addEventListener("click", () => {
//     nav.classList.toggle("show");
//   });
// });


// document.addEventListener('DOMContentLoaded', function () {
//   const menuIcon = document.getElementById('menu-icon');
//   const headerCenter = document.getElementById('header-center');

//   menuIcon.addEventListener('click', () => {
//     headerCenter.classList.toggle('show');
//   });

//   // Hide mobile menu when link is clicked
//   document.querySelectorAll('.nav-links a').forEach(link => {
//     link.addEventListener('click', () => {
//       headerCenter.classList.remove('show');
//     });
//   });

  // Carousel logic
  const carouselImages = document.querySelector('.carousel-images');
  const images = document.querySelectorAll('.carousel-images img');
  let index = 0;
  let direction = 1;

  function updateCarousel() {
    const slideWidth = images[0].clientWidth;
    carouselImages.style.transition = "transform 0.5s ease-in-out";
    carouselImages.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  function autoSlide() {
    index += direction;
    if (index >= images.length - 1 || index <= 0) {
      direction *= -1;
    }
    updateCarousel();
  }

  let interval = setInterval(autoSlide, 1200);

  carouselImages.addEventListener('mouseenter', () => clearInterval(interval));
  carouselImages.addEventListener('mouseleave', () => interval = setInterval(autoSlide, 3000));
;
