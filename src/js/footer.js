/**
 * @name Validate Form Contact
 * @function handle form validation
 */

var toastHTML = '<span>Message Sent</span><button onclick="M.Toast.dismissAll()" class="btn-icon waves-effect toast-action"><i class="material-icons">close</i></button>';
$.validate({
  form: "#contact_form",
  onSuccess: function(form) {
    M.toast({html: toastHTML});
    return false;
  }
});


/**
 * @name Footer Fog Decoration
 * @function to apply random shape to footer decoration element
 */

$(function() {
  // start
  $('.footer-deco .fogs .start .double-main').css(randomShape(100, 300, 600, 500, 120));
  $('.footer-deco .fogs .start .accent').css(randomShape(200, 400, 400, 300, 60));
  $('.footer-deco .fogs .start .triple-light').css(randomShape(200, 200, 100, 400, 90));
  $('.footer-deco .fogs .start .triple-main').css(randomShape(400, 500, 400, 500, 160));
  // end
  $('.footer-deco .fogs .end .double-main').css(randomShape(100, 300, 600, 500, 120));
  $('.footer-deco .fogs .end .accent').css(randomShape(200, 400, 400, 300, 60));
  $('.footer-deco .fogs .end .triple-light').css(randomShape(200, 200, 100, 400, 90));
  $('.footer-deco .fogs .end .triple-main').css(randomShape(400, 100, 400, 500, 160));
})