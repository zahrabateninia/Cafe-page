export default function initializeSwiper(){
    var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
    })
};