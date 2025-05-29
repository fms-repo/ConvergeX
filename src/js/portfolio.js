

$(document).ready(function(){
  /**
   * @name Lightbox
   * @function handle slider carousel for detail item
   * @function handle lightbox popup for detail item
   */

  var $miniGallery = $('#mini_gallery');

  $miniGallery.each(function() {
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

  var expand = false;
  $('#show_all_gallery').click(function() {
    $miniGallery.parent().toggleClass('expand');
    expand = !expand;
    if (expand) {
      $(this).text('Hide Some Media');
    } else {
      $(this).text('Show All Media');
    }
  });
});

