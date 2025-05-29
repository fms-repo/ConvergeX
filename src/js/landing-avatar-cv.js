/**
 @name Header
 @function initial dropdown menu
 @function initial side navigation for mobile
 */

$(document).ready(function(){  
  var $header = $('#header'),
      $menu = $('#mobile_menu_profile'),
      $slideMenu = $('.mobile-nav'),
      isOpen = false;

  // Hamburger menu
  function openMenu() {
    $('#main_menu').fadeIn();
    $menu.addClass('is-active');
    $slideMenu.addClass('menu-open');
    setTimeout(function(){
      $header.addClass('open-drawer');
    }, 10)
  }
  function closeMenu() {
    $('#main_menu').fadeOut();
    $header.removeClass('open-drawer');
    $menu.removeClass('is-active');
    $slideMenu.removeClass('menu-open');
  }
  $menu.click(function() {
    isOpen = !isOpen;
    if(isOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  });
  
  $('#main_menu a').click(function() {
    closeMenu();
    isOpen = false;
  })
})

/**
 * @name testimonial carousel
 * @function handle carousel tag
 */

$(function() {
  var showSlide = 3;
  var $carousel = $('#testimonial_carousel');
  // Slick go to the last slide
  if (window.innerWidth > 1279) {
    var limit = window.innerWidth > 1400 ? 0 : 1
    var lastSlide = Math.floor($carousel.data('length') - showSlide + limit)
    setTimeout(function() {
      $carousel.slick('slickGoTo', lastSlide);
    }, 100)
  }
  // Handle carousel tag
  $carousel.slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: showSlide,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Fade effect
  var sliderArt = $('#art-avatar-testimonial');
  $carousel.on('afterChange', function(slick, currentSlide){
    var limit = window.innerWidth > 1400 ? 1 : 0
    var edge = Math.floor($carousel.data('length') - showSlide - limit);
    if (currentSlide.currentSlide <= edge) {
      sliderArt.addClass('faded');
    } else {
      sliderArt.removeClass('faded');
    }
  });
});

/**
 * @name news and event carousel
 * @function handle carousel tag
 */

$(function() {
  var $carousel = $('#blog_carousel'),
      $prevNav = $('#prev_blog');
  $prevNav.prop("disabled", true);

  if (window.innerWidth > 1279 && $("html").attr("dir") === "rtl") {
    var lastSlide = Math.floor($carousel.data('length') - 2)
    setTimeout(function() {
      $carousel.slick('slickGoTo', lastSlide);
    }, 100)
  }
  // Handle carousel tag
  $carousel.slick({
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 4,
    arrows: false,
    pauseOnHover: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1080,
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
      $prevNav.prop("disabled", false);
    } else {
      $prevNav.prop("disabled", true);
    }
  });

  // Handle slick navigation
  $('#prev_blog').click(function() {
    $carousel.slick('slickPrev');
  });
  $('#next_blog').click(function() {
    $carousel.slick('slickNext');
  });
});


/**
 * @name statistic icon carousel
 * @function handle statistic icon carousel
 */

$(function() {
  var $carousel = $('#stats-expertise-carousel');
  // Handle carousel tag
  $carousel.slick({
    dots: false,
    infinite: true,
    speed: 5000,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 3,
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

/**
 * @name gallery carousel
 * @function handle carousel gallery
 */

$(function() {
  var $carousel = $('#gallery_cv_carousel');
  // Handle carousel tag
  $carousel.slick({
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    arrows: false
  });
  
  $("#filter_cv_gallery.filter button").click(function(){
    var name = $(this).data("filter");
    $("#filter_cv_gallery.filter button").removeClass("selected");
    $(this).addClass("selected");
    if($(".massonry .item[data-category="+name+"]").length < 1) {
      $('#no_data').removeClass("hide")
    } else {
      $('#no_data').addClass("hide")
    }

    if (name !== 'all') {
      $(".massonry .item").css({"visibility": "hidden"}).hide();
      setTimeout(function() {
        $(".massonry .item[data-category="+name+"]").css({"visibility": "visible"}).show();
      }, 10)
    } else {
      setTimeout(function() {
        $(".massonry .item").css({"visibility": "visible"}).show();
      }, 10)
    }
    $(".massonry .item").removeClass("loaded");
    setTimeout(function() {
      $(".massonry .item").addClass("loaded");
    }, 700)
  });

  // Handle popup detail
  $('#image_cv_gallery').each(function() { 
    $(this).magnificPopup({
      delegate: '.item a',
      type: 'image',
      mainClass: 'mfp-with-zoom', // this class is for CSS animation below
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  });
  $('#gallery_cv_carousel').each(function() { 
    $(this).magnificPopup({
      delegate: '.item-carousel a',
      type: 'image',
      mainClass: 'mfp-with-zoom', // this class is for CSS animation below
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  });
});