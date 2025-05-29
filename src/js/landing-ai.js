/**
 * @name carousel ai/research slider art
 * @function handle carousel with graphic art
 */

$(function() {
  var $carousel = $('#research-carousel');
  $('#prev_research').prop("disabled", true);

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
    slidesToShow: 4,
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
  $('#prev_research').click(function() {
    $carousel.slick('slickPrev');
  });
  $('#next_research').click(function() {
    $carousel.slick('slickNext');
  });

  // Fade effect
  var sliderArt = $('#art-ai-research');
  $carousel.on('afterChange', function(slick, currentSlide){
    if (currentSlide.currentSlide >= 1) {
      sliderArt.addClass('faded');
      $('#prev_research').prop("disabled", false);
    } else {
      sliderArt.removeClass('faded');
      $('#prev_research').prop("disabled", true);
    }
  });
});