/**
 * @name form
 * @function handle form validation
 */

$(document).ready(function(){
  var toastHTML = '<span>Message Sent</span><button onclick="M.Toast.dismissAll()" class="btn-icon waves-effect toast-action me-1"><i class="material-icons">close</i></button>';
  $.validate({
    form: "#contact_form",
    onSuccess: function(form) {
      M.toast({html: toastHTML});
      return false;
    }
  });

  $.validate({
    form: "#login_form"
  });

  $.validate({
    form: "#register_form",
    modules : "security"
  });
});

/**
 * @name form gradient
 * @function handle form decoration
 */

$(document).ready(function(){
  $('#style_gr .triple-main').css(randomShape(100, 300, 600, 500, 120));
  $('#style_gr .primary-light').css(randomShape(200, 400, 400, 300, 60));
  $('#style_gr .double-main').css(randomShape(200, 200, 100, 400, 90));
  $('#style_gr .triple-light').css(randomShape(400, 500, 400, 500, 160));
});