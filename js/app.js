$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('nav').addClass('fixed');
        $('span').each(function(i) {
            if ($(this).position().top <= windscroll - 100) {
                $('nav a.active').removeClass('active');
                $('nav a').eq(i).addClass('active');
            }
        });

    } else {

        $('nav').removeClass('fixed');
        $('nav a.active').removeClass('active');
        $('nav a:first').addClass('active');
    }

}).scroll()



//opening fade effect
$("header h1,nav").hide().fadeIn(4000);
$("#Bio").hide().fadeIn(5000);
// $("#caption").hide();
// function mouseOver() {
//     document.getElementById("#caption").style.display="block";
// }






//easter egg
var Util = {
  is_webkit: function() {
    return navigator.userAgent.indexOf("AppleWebKit") > -1;
  },
  message: function() {
    if ( typeof console == "object" ) {
      if ( Util.is_webkit() ) {
        console.log( "%cHey! What are you looking under here for?\nDeveloped by Shelley Hicklin LinkedIn: https://www.linkedin.com/pub/shelley-hicklin/7b/5b1/971", "color: #359AD8; font-size: 18px; font-family: 'Trebuchet MS', Helvetica, sans-serif;" );
      } else {
        console.log( "Hey! What are you looking under here for?\nDeveloped by Shelley Hicklin LinkedIn: https://www.linkedin.com/pub/shelley-hicklin/7b/5b1/971" );
      }
    }
  }
}

// call on page load
Util.message();
