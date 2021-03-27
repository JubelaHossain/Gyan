$('.banner-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-angle-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-right next"></i>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows:true,
                dots: false,
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:true,
                dots:false,
            }
    },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite:true,
                arrows: false,
                dots: true,
            }
    }
  ]
});
var rev = $('.rev_slider');
rev.on('init', function (event, slick, currentSlide) {
    var
        cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        next2 = cur.next().next(),
        prev = cur.prev(),
        prev2 = cur.prev().prev();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    prev2.addClass('slick-sprev2');
    next2.addClass('slick-snext2');
    cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
    slick.$prev = prev;
    slick.$next = next;
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log('beforeChange');
    var
        cur = $(slick.$slides[nextSlide]);
    console.log(slick.$prev, slick.$next);
    slick.$prev.removeClass('slick-sprev');
    slick.$next.removeClass('slick-snext');
    slick.$prev.prev().removeClass('slick-sprev2');
    slick.$next.next().removeClass('slick-snext2');
    next = cur.next(),
        prev = cur.prev();
    //prev2.prev().prev();
    //next2.next().next();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    prev.prev().addClass('slick-sprev2');
    next.next().addClass('slick-snext2');
    slick.$prev = prev;
    slick.$next = next;
    cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
});

rev.slick({
    speed: 1000,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    prevArrow: '<button> prev</button>',
    nextArrow: '<button> next</button>',
    infinite: true,
    centerMode: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0',
    swipe: true,
    autoplay: true,
    customPaging: function (slider, i) {
        return '';
    },
    /*infinite: false,*/
});
//$('.slider-img').slick({
//    dots: true,
//    infinite: true,
//    arrows: false,
//    speed: 300,
//    slidesToShow: 1,
//    slidesToScroll: 1,
//    autoplay:true,
//
//});
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$('.courses-slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: '<i class="fas fa-angle-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-right next"></i>',
    centerMode: true,
    centerPadding: "0",
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                infinite:true,
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
                dots:false,
                infinite:true,
            }
    },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
            }
    }
  ]
});

$('.slide-testimonial').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-angle-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-right next"></i>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                infinite:true,
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
                dots:false,
                infinite:true,
            }
    },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
            }
    }
  ]
});
$('.slider-teacher').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll:1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
    },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
            }
    }
  ]
});
$('.footer-slider').slick({
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "30px",
    autoplay: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
    },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
            }
    }
  ]
});
