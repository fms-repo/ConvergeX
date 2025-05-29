/**
 * @name parallax-title
 * @function to handle big title with scroll parallax
 */

var offset = 24;

// Handle window scroll to adjust element transformation and opacity
$(function() {
  var $decoTitle = $('.parallax-title .deco-title:not(".static")');

  var divider = window.innerWidth > 600 ? 1.5 : 3;

  // Set element transformation and opacity
  function setTransformTitle(transform, el) {
    $(el).parent().css('padding-top', (transform - offset) + 'px');
    if (transform > 30) {
      $(el).css('opacity', transform / 300);
    } else {
      $(el).css('opacity', 0.15);
    }
  }

  setTimeout(function() {
    $(window).scroll(function() {
      if ($decoTitle.length > 0) {
        $decoTitle.each(function() {
          var coordinat = $(this)[0].getBoundingClientRect();

          if (coordinat.top > 0) {
            var transform = coordinat.top / divider;
            setTransformTitle(transform, $(this));
          } else {
            setTransformTitle(offset, $(this));
          }
        });
      }
    });
  }, 500);
});