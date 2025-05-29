/**
 * @name news and event carousel
 * @function handle carousel tag
 */

$(function() {
  var $carousel = $('#news-carousel');
  // Handle carousel tag
  $carousel.slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    autoplay: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
        }
      }
    ]
  });
});