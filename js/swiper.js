const swiper = new Swiper(".swiper", {
  // Optional parameters
  autoplay: {
    delay: 2000,
  },

  direction: "horizontal",
  speed: 400,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
