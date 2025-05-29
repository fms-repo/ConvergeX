/**
 * @name banner hero banner slider
 * @function handle slider banner
 */

var $carousel = $('#banner-slider');
var $carouselNav = $('#banner_nav a');

$(function () {
  // slick carousel config
  $carousel.slick({
    dots: false,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    infinite: true,
    autoplay: false,
    cssEase: 'ease-out',
    responsive: [
      {
        breakpoint: 960,
        settings: {
          dots: true,
          fade: true
        }
      }
    ]
  });

  // Auto-click slides every 4 seconds
  let currentSlide = 0;
  setInterval(() => {
    $carouselNav.eq(currentSlide).click();
    currentSlide = (currentSlide + 1) % $carouselNav.length;
  }, 4000);
});

$carouselNav.click(function () {
  var index = $(this).data("slide");
  $carousel.slick('slickGoTo', index);
});

$carousel.on('afterChange', function (event, slick, currentSlide) {
  var active = currentSlide;
  $carouselNav.removeClass("active");
  $('#banner_nav > a[data-slide=' + active + ']').addClass("active");
});
