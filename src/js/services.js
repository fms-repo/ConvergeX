/**
 * @name carousel related services slider
 * @function handle carousel related services slider
 */

$(function() {
  var $carousel = $('#service-carousel');
  $('#prev_related_services').prop("disabled", true);

  // Handle carousel
  $carousel.slick({
    dots: true,
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

  $carousel.on('afterChange', function(slick, currentSlide){
    if (currentSlide.currentSlide >= 1) {
      $('#prev_related_services').prop("disabled", false);
    } else {
      $('#prev_related_services').prop("disabled", true);
    }
  });

  // Handle slick navigation
  $('#prev_related_services').click(function() {
    $carousel.slick('slickPrev');
  });
  $('#next_related_services').click(function() {
    $carousel.slick('slickNext');
  });
});