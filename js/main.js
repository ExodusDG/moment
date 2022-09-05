var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    }); //плавный скролл


$('.hamburger').click(function(){
  $('.mbMenu').toggleClass('mbMenuActive')
})

const swiperTop = new Swiper('.swiperTop', {
  slidesPerView: 1,
  spaceBetween: 30,

  loop: true,
  navigation: {
    nextEl: '.sliderTopRight',
    prevEl: '.sliderTopLeft',
  },
  
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 30,
    }
  }
});

const swiperMiddle = new Swiper('.sliderVertWrapper', {
  direction: "vertical",
});

const swiperBottom = new Swiper('.swiperBottom', {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  navigation: {
    nextEl: '.sliderBottomRight',
    prevEl: '.sliderBottomLeft',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const swiperFeatures = new Swiper('.swiperFeatures', {
  slidesPerView: 1,
  spaceBetween: 30,
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


/* HOW SLIDER */
var imagePath;
$.each($('.howItemMain'), function (key, value) {
  key = key + 1;
  $(this).attr('id', `how_${key}`)
})

$('.howItemMain').click(function () {
  var currentSlide = $(this);
  $('.howItemMain').removeClass('slideActive')
  $('.howItemNote').removeClass('howItemNoteShow')

  currentSlide.addClass('slideActive')
  currentSlide.find('.howItemNote').addClass('howItemNoteShow')

  imagePath = $(this).find('.phoneImageSlider').attr('src')
  $('.howSliderWrapper img').attr('src', imagePath)
})

$('#how_1').trigger('click')