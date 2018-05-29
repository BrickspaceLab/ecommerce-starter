$( document ).ready(function() {

  // parse emojis
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (iOS == false && !navigator.userAgent.indexOf('Mac OS X') != -1 == false) {
    twemoji.parse(document.body);
  }


  $( ".js-m-navpage-toggle" ).click(function() {
    $(".m-navpage__menu").toggleClass("m-navpage__menu--visible");
    $(".m-navpage__container").toggleClass("m-navpage__container--visible");
  });

  $('.m-navpage__container').on('click', function(e) {
    if (e.target !== this) {
      return;
    }
    $(".m-navpage__menu").toggleClass("m-navpage__menu--visible");
    $(".m-navpage__container").toggleClass("m-navpage__container--visible");
  });

});
