// Swiper JavaScript Code
let swiperCards = new Swiper(".cards_box", {
    loop: true,
    spaceBetween: 20,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
