/**
 * @name carousel blockchain/project slider art
 * @function handle carousel with graphic art
 */

$(function() {
  var $carousel = $('#projects-carousel');
  $('#prev_project').prop("disabled", true);

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
    dots: true,
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
  $('#prev_project').click(function() {
    $carousel.slick('slickPrev');
  });
  $('#next_project').click(function() {
    $carousel.slick('slickNext');
  });

  // Fade effect
  var sliderArt = $('#art-blockchain-projects');
  $carousel.on('afterChange', function(slick, currentSlide){
    if (currentSlide.currentSlide >= 1) {
      sliderArt.addClass('faded');
      $('#prev_project').prop("disabled", false);
    } else {
      sliderArt.removeClass('faded');
      $('#prev_project').prop("disabled", true);
    }
  });
});


/**
 * @name Animation Slider blockchain/event slider
 * @function event slider carousel
 */

var transition = {
  section: {
    show: "slideInUp",
    hide: "slideOutUp",
    delayShow: "delay0s"
  },
  figure: {
    show: "slideInUp",
    hide: "slideOutUp",
    delayShow: "delay0s"
  },
  h1: {
    show: "fadeInUp",
    hide: "fadeOutDown",
    delayShow: "delay0s"
  },
  article: {
    show: "fadeInUp",
    hide: "fadeOutDown",
    delayShow: "delay0s"
  },
}

$(function(){
  // animate slider
  $(".anim-slider").animateSlider({
    autoplay: true,
    interval: 20000,
    pagination: false,
    animations: {
      0: transition,
      1: transition,
      2: transition,
      3: transition,
    }
  });

  // Swipe
  $(".anim-slider").swipe( {
    //Generic swipe handler for all directions
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
      if (direction === 'left') {
        $('.anim-arrows-prev').click()
      } else {
        $('.anim-arrows-next').click()
      }
    }
  });
});