/**
 * @name Banner Slider Flip for Landing NFT v1
 * @function handle multiple slider
 */

$(function() {
  var $flip1 = $('.fade-slider #flip1'),
      $flip2 = $('.fade-slider #flip2'),
      $flip3 = $('.fade-slider #flip3'),
      $flip4 = $('.fade-slider #flip4');

  var slickOpts = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    fade: true,
    arrows: false,
    pauseOnHover: false
  };

  $flip1.slick({
    autoplaySpeed: 5000,
    ...slickOpts
  });
  $flip2.slick({
    autoplaySpeed: 6000,
    ...slickOpts
  });
  $flip3.slick({
    autoplaySpeed: 7000,
    ...slickOpts
  });
  $flip4.slick({
    autoplaySpeed: 8000,
    ...slickOpts
  });
})

/**
 * @name Banner Slider Carousel for Landing NFT v2
 * @function handle multiple slider
 */
$(function() {
  var $fadeCarousel = $('#fade-slider'),
      $rollCarousel = $('#roll-slider');

  $fadeCarousel.slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    asNavFor: '.multi-slider'
  });

  $rollCarousel.slick({
    autoplay: true,
    autoplaySpeed: 10000,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    arrows: false,
    asNavFor: '.single-slider',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});



/**
 * @name Parallax Fog Blur Effect
 * @function handle generating random blur for all nft parallax
 */
$(function() {
  $('.parallax-blur .fog .double-light').css(randomShape(100, 300, 600, 500, 120));
  $('.parallax-blur .fog .double-main').css(randomShape(200, 200, 100, 400, 9));
  $('.parallax-blur .fog .double-dark').css(randomShape(400, 100, 400, 500, 160));

  $('.parallax-blur .fog .triple-light').css(randomShape(200, 200, 100, 400, 90));
  $('.parallax-blur .fog .triple-main').css(randomShape(100, 300, 600, 500, 120));
  $('.parallax-blur .fog .triple-dark').css(randomShape(400, 100, 400, 500, 160));

  $('.parallax-blur .fog .primary-light').css(randomShape(100, 300, 600, 500, 120));
  $('.parallax-blur .fog .primary-dark').css(randomShape(300, 100, 60, 500, 200));
  
  $('.parallax-blur .fog .secondary-light').css(randomShape(300, 500, 500, 20, 60));
  $('.parallax-blur .fog .secondary-dark').css(randomShape(200, 400, 400, 300, 60));

  $('.parallax-blur .fog .accent').css(randomShape(200, 400, 400, 300, 60));
});

/**
 * @name Auction Slider
 * @function handle auction slider and slider art
 */

$(function() {
  var $carousel = $('#auction-carousel');
  $('#prev_auction').prop("disabled", true);

  if ($("html").attr("dir") === "rtl") {
    var lastSlide = Math.floor($carousel.data('length') - 2)
    setTimeout(function() {
      $carousel.slick('slickGoTo', lastSlide);
    }, 100);
  }

  if (window.innerWidth > 1279 && $("html").attr("dir") === "rtl") {
    var lastSlide = Math.floor($carousel.data('length') - 2)
    setTimeout(function() {
      $carousel.slick('slickGoTo', lastSlide);
    }, 100)
  }

  // Handle carousel
  $carousel.slick({
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 3,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  // Handle slick navigation
  $('#prev_auction').click(function() {
    $carousel.slick('slickPrev');
  });
  $('#next_auction').click(function() {
    $carousel.slick('slickNext');
  });

  // Fade effect
  var sliderArt = $('#art-nft-auction');
  $carousel.on('afterChange', function(slick, currentSlide){
    if (currentSlide.currentSlide >= 1) {
      sliderArt.addClass('faded');
      $('#prev_auction').prop("disabled", false);
      $('#nft-auction .slider-wrap').css('z-index', 11);
    } else {
      sliderArt.removeClass('faded');
      $('#prev_auction').prop("disabled", true);
      $('#nft-auction .slider-wrap').css('z-index', 0);
    }
  });

  $('.nft-slider-art .fog .triple-main').css(randomShape(100, 300, 600, 500, 120));
  $('.nft-slider-art .fog .triple-dark').css(randomShape(200, 400, 400, 300, 60));
  $('.nft-slider-art .fog .secondary-dark').css(randomShape(200, 200, 100, 400, 90));
  $('.nft-slider-art .fog .triple-light').css(randomShape(400, 500, 400, 500, 160));
  // end
});

/**
 * @name Slider Animation zIndex
 * @function handle z-index between carousel and blur animation
 */
$('#auction-carousel .item')
  .on("mouseover", function() {
    $('#nft-auction .slider-wrap').css('z-index', 11);
  })
  .on("mouseout", function() {
    $('#nft-auction .slider-wrap').css('z-index', 0);
  })

/**
 * @name Auction Slider2
 * @function handle auction fade slider
 */

$(function() {
  var $carousel = $('#auction-fade-slider');
  // Handle carousel
  $carousel.slick({
    dots: true,
    arrows: false,
    speed: 500,
    autoplaySpeed: 10000,
    infinite: true,
    autoplay: true,
    fade: true,
    cssEase: 'ease-out',
  });

  // Handle slick navigation
  $('#prev_fade_auction').click(function() {
    $carousel.slick('slickPrev');
  });
  $('#next_fade_auction').click(function() {
    $carousel.slick('slickNext');
  });
});