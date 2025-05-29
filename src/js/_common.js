/**
 * @name _common
 * @function handle scroling
 * @function initial parallax, tooltip, carousel, etc
 */

var $header = $('header.header.app-bar');
var $pageNav = $("#page_nav");
var sticky = 0;

// Sticky header
if($("#header").length > 0) {
  sticky = $header[0].offsetTop + 80;
}

function fixedNav() {
  if (window.pageYOffset > sticky) {
    $header.addClass("fixed");
  } else {
    $header.removeClass("fixed");
  }
}

// Bottom right navigation,
function fixedFabNav() {
  if (window.pageYOffset > 500) {
    $pageNav.addClass("show");
  } else {
    $pageNav.removeClass("show");
  }
}

/**
 * @name Random Shape
 * @function to generate random shape decoration
 */

function randomShape(top, left, width, height, rotate) {
  return {
    top: Math.floor(Math.random() * top) + 'px',
    left: Math.floor(Math.random() * left) + 'px',
    width: Math.floor(Math.random() * (width - 100) + 100) + 'px',
    height: Math.floor(Math.random() * (height - 100) + 100) + 'px',
    transform: `rotate(${Math.floor(Math.random() * rotate)}deg)`,
  }
}

/**
 * @name Feature Progress
 * @function handle progress on scroll window
 */
function playProgress() {
  var $progress = $('#progress');
  if ($progress.length < 1) {
    return;
  }
  var progressOffset = $progress[0].getBoundingClientRect();
  if (progressOffset.top < 200) {
    $progress.removeClass('zero');
  }
}

/**
 * @name Feature Tab
 * @function handle tab
 */

// Tab initial
$('.tabs-slider').tabs({
  swipeable: true
});

$('.tabs-basic').tabs({
  swipeable: false
});

/**
 * @name Modal
 * @function handle Modal
 */

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal-popup');
  var instances = M.Modal.init(elems);
});

/**
  * #name Tooltip
  * @function handle Tooltip
*/
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltiped');
  var instances = M.Tooltip.init(elems);
});

$(document).ready(function(){
  // Fixed nav
  setTimeout(function() {
    window.onscroll = function() {
      playProgress();
      fixedNav();
      fixedFabNav();
    };
  }, 500)
  // Preloader
  $('#preloader').delay(1000).fadeOut('fast');
  $(".transition-page").addClass('page-fadeUp-transition-enter').delay(1000).queue(function(){
    $(this)
    .removeClass('page-fadeUp-transition-enter')
    .addClass('page-fadeUp-transition-enter-active')
    .dequeue()
    .delay(1400).queue(function(){
      $(this)
      .removeClass('page-fadeUp-transition-enter-active')
      .addClass('page-fadeUp-transition-exit')
      .dequeue();
    })
  });
  
  // Open Page scroll navigation
  $('.scrollnav').navScroll({
    scrollSpy: true,
    activeParent: true,
    activeClassName: 'current'
  });
  
  // initial wow
  new WOW().init();

  // initial scroll parallax
  $('#parallax-left, #parallax-right, #parallax-double, #parallax-banner').enllax();
    
  // Accordion init
  $('.collapsible:not(".expandable")').collapsible();
  $('.collapsible.expandable').collapsible({
      accordion: false
  });

  // Select
  $('.select').formSelect();

  // Countdown
  $('[data-countdown]').each(function() {
    var $this = $(this),
        finalDate = $(this).data('countdown');

    var now = Date.now();
    var future = new Date(now + finalDate);
    const formatedFuture = future.toLocaleDateString('en-CA').replace(/-/g, '/') + ' ' + future.toLocaleTimeString('en-US');
    $this.countdown(formatedFuture, function(event) {
      $this.html(event.strftime(''
      + '<span><strong>%d</strong>Days</span><i><strong>:</strong></i>'
      + '<span><strong>%H</strong>Hours</span><i><strong>:</strong></i>'
      + '<span><strong>%M</strong>Minutes</span><i><strong>:</strong></i>'
      + '<span><strong>%S</strong>Seconds</span>'));
    });
  });

  // Validate form
  var toastHTML = '<span>Message Sent</span><button onclick="M.Toast.dismissAll()" class="btn-icon waves-effect toast-action"><i class="material-icons">close</i></button>';
  $.validate({
    form: "#contact_form",
    onSuccess: function(form) {
      M.toast({html: toastHTML});
      return false;
    }
  })
});
