$(document).ready(function () {

  AOS.init();

  if($('.header-slider').length){
    $(".header-slider").slick({
      dots: true,
      arrows: false,
      rtl: true,
    });
  }

  if($('.product-slider').length){
    $('.product-slider').slick({
      dots: false,
      arrows: true,
      rtl: true,
    })
  }

  $('.more-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
    infinite: true,
    rtl: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.to-day-offer-colm-slider').slick({
    dots: false,
    arrows: true,
  });

  $('.slider-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    asNavFor: '.slider-bottom'
  });
  $('.slider-bottom').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-top',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });

  // $("#example").htmlNumberSpinner();
  // $("#example2").htmlNumberSpinner();
});
