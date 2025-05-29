/**
 * @name Banner Animation
 * @function handle canvas animation using vanta.js
 */

var vantaEl = document.getElementById('vanta_art');
$(function(){
  setTimeout(function() {
    if(vantaEl !== null) {
      window.VANTA.HALO({
        el: '#vanta_art',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 400.00,
        minWidth: 400.00,
        size: 3.00
      })
    }
  }, 1000);
});


/**
 * @name Banner Animation
 * @function handle canvas animation using particles.js
 */

var particlesEl = document.getElementById('particles_background');
$(function(){
  if (particlesEl === null || particlesEl === undefined) {
    return;
  }
  setTimeout(function() {
    window.particlesJS('particles_background', {
      "particles": {
        "number": {
          "value": 6,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#b39ddb"
        },
        "shape": {
          "type": "polygon",
          "stroke": {
            "width": 0,
            "color": "#b39ddb"
          },
          "polygon": {
            "nb_sides": 6
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 160,
          "random": false,
          "anim": {
            "enable": true,
            "speed": 10,
            "size_min": 40,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 200,
          "color": "#ffffff",
          "opacity": 1,
          "width": 2
        },
        "move": {
          "enable": true,
          "speed": 8,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "grab"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }, 1000)
});

/**
 * @name slideshow carousel
 * @function handle carousel hero banner
 */

$(function() {
  var $carousel = $('#hero_carousel');
  // Handle carousel
  $carousel.slick({
    dots: false,
    infinite: true,
    speed: 700,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    fade: true
  });
});

/**
 * @name video-banner
 * @function handle youtube video banner
 */

$(function(){
  var $youtubeElm = $('#youtube');
  // Initial youtube config
  $youtubeElm.YTPlayer({
    videoId: 'iB_9BlFuHqA',
    width: 1080,
    repeat: true,
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      origin: 'http://localhost:9001'
    }
  });
});


/**
 * @name video-banner
 * @function handle youtube video banner
 * for media hero banner
 */

$(function(){
  var $youtubeElm = $('#youtube-media-banner'),
      $cover = $('#media-banner-cover'),
      isMobile = window.matchMedia(mq.mdDown).matches;
  // Initial youtube config
  $youtubeElm.YTPlayer({
    videoId: $youtubeElm.data('video'),
    repeat: true,
    width: '1080',
    height: '720',
    playerVars: {
      width: '1080',
      height: '720',
      autoplay: 0,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      origin: 'http://localhost:9000'
    },
    callback: function() {
      videoCallbackEvents();
    }
  });
  
  // Access all of YouTube's API events and methods by using player
  var videoCallbackEvents = function() {
    var player = $youtubeElm.data('ytPlayer').player;
    player.addEventListener('onStateChange', function(){
      if(isMobile) {
        player.pauseVideo();
      } else {
        $cover.hide();
      }
    });
  }
});


