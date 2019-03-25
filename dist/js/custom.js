jQuery(function ($) {

    var $document = jQuery(document),
            $topMenu = $('.top-menu'),
            className = 'fixed';

    $document.scroll(function () {
        $topMenu.toggleClass(className, $document.scrollTop() >= 50);
    });


    $document.ready(function () {
        $topMenu.toggleClass(className, $document.scrollTop() >= 50);
    });
    

if (jQuery('.image-slider').length >= 1) {
    jQuery('.image-slider').slick({
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        dots: false,
        infinite: true,
        autoplay: true,
        draggable: true,
        focusOnSelect: true,
        speed: 500,
        autoplaySpeed: 4000,
        adaptiveHeight: false,
        centerMode: true,
        centerPadding: '40%',
        slidesToShow: 1,
        fade: false,
        cssEase: 'ease-in-out',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    centerPadding: '33.333%',
                }
            },
            {
                breakpoint: 576,
                settings: {
                    centerPadding: '15%',
                }
            }
        ]
    });
}


});

