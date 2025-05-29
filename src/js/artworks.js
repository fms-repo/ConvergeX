/**
 * @name Artworks Blur Decoration
 * @function to apply random shape to blur decoration
 */

$(function() {
  // start
  $('#blur-gradient-artwork .fogs .start .double-main').css(randomShape(100, 300, 600, 500, 120));
  $('#blur-gradient-artwork .fogs .start .accent').css(randomShape(200, 400, 400, 300, 60));
  $('#blur-gradient-artwork .fogs .start .triple-light').css(randomShape(200, 200, 100, 400, 90));
  $('#blur-gradient-artwork .fogs .start .triple-main').css(randomShape(400, 500, 400, 500, 160));
  // end
  $('#blur-gradient-artwork .fogs .end .double-main').css(randomShape(100, 300, 600, 500, 120));
  $('#blur-gradient-artwork .fogs .end .accent').css(randomShape(200, 400, 400, 300, 60));
  $('#blur-gradient-artwork .fogs .end .triple-light').css(randomShape(200, 200, 100, 400, 90));
  $('#blur-gradient-artwork .fogs .end .triple-main').css(randomShape(400, 100, 400, 500, 160));
})