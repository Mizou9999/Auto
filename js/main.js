
$(function() {

    /* mask phone */
    $(".phone-mask").mask("+7(999) 999-9999");

    /* mobile menu */
    $('.burger-menu').on('click', function() {
        $(this).toggleClass("burger-menu--opened");
        $(this).toggleClass("burger-menu--closed");
        $('.header-menu').slideToggle();
    });

    /* form-popup */
    $("a[href='#form-popup']").magnificPopup({
        mainClass: 'my-mfp-zoom-in',
        removalDelay: 300,
        type: 'inline', 
        closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close"></button>'
    });

    /* popup-gallery */
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        }
    });

    /* slider */
    var swiper1 = new Swiper('.steps-swiper', {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 0,
        pagination: {
            el: '.steps-pagination',
            clickable: true,
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
                slidesPerColumn: 1,
            },
            768: {
                slidesPerView: 'auto',
                slidesPerColumn: 1,
                centeredSlides: true,
                spaceBetween: 30,
            }
        }
    });

    var swiper2 = new Swiper('.certificates-swiper', {
        slidesPerView: 5,
        spaceBetween: 30,
        //loop: true,
        pagination: {
            el: '.certificates-pagination',
            clickable: true,
        },
        breakpoints: {
            1200: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 'auto',
                centeredSlides: true,
                loop: true,
            }
        }
    });

    var swiper3 = new Swiper('.clients-swiper', {
        slidesPerView: 5,
        spaceBetween: 60,
        loop: true,
        pagination: {
            el: '.clients-pagination',
            clickable: true,
        },
        breakpoints: {
            1200: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15
            }
        }
    });



});
