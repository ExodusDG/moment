const swiperFeatures = new Swiper('.swiperFeatures', {
    slidesPerView: 1,
    spaceBetween: 30,
    preloadImages: false,
    lazy: true,
    autoplay: true,
    loop: true,
    navigation: {
        nextEl: '.sliderFeaturesRight',
        prevEl: '.sliderFeaturesLeft',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});