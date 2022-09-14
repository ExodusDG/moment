window.onload = function () {

    function $(selector) {
        return document.querySelector(selector)
    }

    $(".hamburger").addEventListener("click", e => {
        $('.mbMenu').classList.add('mbMenuActive');
        $('body').setAttribute('style', 'overflow: hidden')
    });

    $(".is-active").addEventListener("click", e => {
        $('.mbMenu').classList.remove('mbMenuActive');
        $('body').setAttribute('style', 'overflow: auto')
    });

    var imagePath;
    document.querySelectorAll('.howItemMain').forEach((item, i) => {
        item.setAttribute('id', `how_${i + 1}`)
    });

    document
        .querySelectorAll('.howItemMain')
        .forEach(trigger => {
            trigger.onclick = function (e) {
                var currentSlide = this;
                document.querySelectorAll('.howItemMain').forEach(e => {
                    e.classList.remove('slideActive')
                });

                document.querySelectorAll('.howItemNote').forEach(e => {
                    e.classList.remove('howItemNoteShow')
                });

                currentSlide.classList.add('slideActive')

                currentSlide.querySelectorAll('.howItemNote').forEach(e => {
                    e.classList.add('howItemNoteShow')
                });

                var slideNumber = this.getAttribute('id').replace('how_', '')
                sliderScroll(slideNumber)
            };
        });

    const event = new Event('click', { bubbles: true });
    $('#how_1').dispatchEvent(event);

    document.querySelectorAll('.galleryLeft img').forEach(e => {
        e.classList.add('galleryImageHidden')
    });

    function inViewport(element) {
        if (!element) return false;
        if (1 !== element.nodeType) return false;

        var html = document.documentElement;
        var rect = element.getBoundingClientRect();

        return !!rect &&
            rect.bottom >= 0 &&
            rect.right >= 0 &&
            rect.left <= html.clientWidth &&
            rect.top <= html.clientHeight;
    }

    document.addEventListener("scroll", function(){
        if (inViewport($('.galleryLeftWrapper_1'))) {
            $('.galleryLeftWrapper_1 img').classList.remove('galleryImageHidden')
        }

        if (inViewport($('.galleryWrapper_1'))) {
            $('.galleryWrapper_1 img').classList.remove('galleryImageHidden')
        }

        if (inViewport($('.galleryWrapper_2'))) {
            $('.galleryWrapper_2 img').classList.remove('galleryImageHidden')
            $('.galleryRight').classList.remove('galleryImageHidden')
            $('.galleryRight span').textContent = 'Lorem'
        }

        if (inViewport($('.galleryWrapper_3'))) {
            $('.galleryWrapper_3 img').classList.remove('galleryImageHidden')
        }

        if (inViewport($('.galleryWrapper_4'))) {
            $('.galleryWrapper_4 img').classList.remove('galleryImageHidden')
            $('.galleryRight span').textContent = 'Lorem 2'
        }

        if (inViewport($('.galleryWrapper_5'))) {
            $('.galleryWrapper_5 img').classList.remove('galleryImageHidden')
            $('.galleryRight span').textContent = 'Dolor '
        }
    })

    function sliderScroll(number) {
        var sliderWrapper = $('.sliderTrackWrapper')
        var slideWidth = $('.sliderTrackWrapper img').getBoundingClientRect().width;
        var translateWidth = number * slideWidth;
    
        sliderWrapper.setAttribute('style', 'transform: translateX(-' + translateWidth + 'px)')
    }

    document.querySelectorAll('.navbarLinksList a[href^="#"]')
        .forEach(trigger => {
            trigger.onclick = function (e) {
                e.preventDefault();
                let hash = this.getAttribute('href');
                let target = document.querySelector(hash);
                let headerOffset = 0;
                let elementPosition = target.offsetTop;
                let offsetPosition = elementPosition - headerOffset;
                $('.mbMenu').classList.remove('mbMenuActive');
                $('body').setAttribute('style', 'overflow: auto')

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            };
        });
};
