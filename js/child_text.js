
$(function() {
  $('article').hover(function() {
    $(this).children('a').css('color', 'black');
  }, function() {
    // on mouseout, reset the background colour
    $(this).children('a').css('color', '');
  });
});
