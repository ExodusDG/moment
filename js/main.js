var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
    return false;
}); //плавный скролл


$('.hamburger').click(function() {
    $('.mbMenu').toggleClass('mbMenuActive')

    if ($('.mbMenu').hasClass('mbMenuActive')) {
        $('body').attr('style', 'overflow: hidden')
    } else {
        $('body').attr('style', 'overflow: auto')
    }

})

$('.navbarLinksList a').click(function() {
    $('.mbMenu').removeClass('mbMenuActive')

    $('body').attr('style', 'overflow: auto')
})



/* HOW SLIDER */
var imagePath;
$.each($('.howItemMain'), function(key, value) {
    key = key + 1;
    $(this).attr('id', `how_${key}`)
})

$('.howItemMain').click(function() {
    var currentSlide = $(this);
    $('.howItemMain').removeClass('slideActive')
    $('.howItemNote').removeClass('howItemNoteShow')

    currentSlide.addClass('slideActive')
    currentSlide.find('.howItemNote').addClass('howItemNoteShow')

    //imagePath = $(this).find('.phoneImageSlider').attr('src')
    //$('.howSliderWrapper img').attr('src', imagePath)

    var slideNumber = $(this).attr('id').replace('how_', '')
    console.log(slideNumber)
    sliderScroll(slideNumber)
})

$('#how_1').trigger('click')


$.each($('.galleryLeft img'), function(key, value) {
    $(this).addClass('galleryImageHidden')
})

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
    if ($('.galleryLeftWrapper_1').isInViewport()) {

        $('.galleryLeftWrapper_1 img').removeClass('galleryImageHidden')
    } else {}

    if ($('.galleryWrapper_1').isInViewport()) {
        $('.galleryWrapper_1 img').removeClass('galleryImageHidden')
    } else {}

    if ($('.galleryWrapper_2').isInViewport()) {
        $('.galleryRight span').text('Lorem')
        $('.galleryWrapper_2 img').removeClass('galleryImageHidden')
    } else {}

    if ($('.galleryWrapper_3').isInViewport()) {
        $('.galleryWrapper_3 img').removeClass('galleryImageHidden')
    } else {}

    if ($('.galleryWrapper_4').isInViewport()) {
        $('.galleryRight span').text('Ipsum')
        $('.galleryWrapper_4 img').removeClass('galleryImageHidden')
    } else {}
    if ($('.galleryWrapper_5').isInViewport()) {
        $('.galleryRight span').text('Lorem 2')
        $('.galleryWrapper_5 img').removeClass('galleryImageHidden')
    } else {}

    if ($('.galleryWrapper_4').isInViewport()) {
        $('.galleryRight span').text('Dolor')
        $('.galleryWrapper_4 img').removeClass('galleryImageHidden')
    } else {}
    if ($('.galleryRight').isInViewport()) {
        $('.galleryRight').removeClass('galleryImageHidden')
    } else {}
});


function sliderScroll(number) {
    var sliderWrapper = $('.sliderTrackWrapper')
    var slideWidth = $('.sliderTrackWrapper img').width()
    var translateWidth = number * slideWidth;

    sliderWrapper.attr('style', 'transform: translateX(-' + translateWidth + 'px)')
}