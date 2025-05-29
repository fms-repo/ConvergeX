/**
 * @name about call action
 * @function to generate random shape for blur effect
 */

$(function() {
  $('#about-call-action .fog .double-main').css(randomShape(100, 300, 600, 500, 120));
  $('#about-call-action .fog .triple-light').css(randomShape(200, 200, 100, 400, 90));
  $('#about-call-action .fog .triple-main').css(randomShape(400, 500, 400, 500, 160));
});

/**
 * @name about carousel collage
 * @function to handle carousel
 */
$(function() {
  var $carousel = $('#collage-carousel');
  // Handle carousel tag
  $carousel.slick({
    dots: false,
    infinite: true,
    speed: 7000,
    autoplaySpeed: 7000,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    cssEase: 'linear',
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }]
  });
});

/**
 * @name profile gallery
 * @function filter for profile
 */

$("#filter_about_gallery.filter button").click(function(){
  var name = $(this).data("filter");
  $("#filter_about_gallery.filter button").removeClass("selected");
  $(this).addClass("selected");

  if (name !== 'all') {
    $("#image_about_gallery .item").css({"visibility": "hidden"}).hide();
    setTimeout(function() {
      $("#image_about_gallery .item[data-category="+name+"]").css({"visibility": "visible"}).show();
    }, 10);
  } else {
    setTimeout(function() {
      $("#image_about_gallery .item").css({"visibility": "visible"}).show();
    }, 10);
  }
  $("#image_about_gallery .item").removeClass("loaded");
  setTimeout(function() {
    $("#image_about_gallery .item").addClass("loaded");
  }, 700);
});

/**
 * @name counter carausel
 * @function marquee carousel for counter with caro
 */

$(function() {
  var $carousel = $('#counter-logo-carousel');
  // Handle carousel tag
  $carousel.slick({
    dots: false,
    infinite: true,
    speed: 9000,
    autoplaySpeed: 9000,
    autoplay: true,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    variableWidth: true,
    cssEase: 'linear',
    responsive: [{
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});