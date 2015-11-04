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


$('#thematrix').click(function() {
          $('#wrapper').toggleClass('altwrapper');
});




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


/*
No jQuery necessary.
Thanks to Dan's StackOverflow answer for this:
http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
*/




// window.addEventListener("DOMContentLoaded", isSectionActive);
// window.addEventListener("load", isSectionActive);
// window.addEventListener("resize", isSectionActive);
// window.addEventListener("scroll", isSectionActive);

// function isSectionActive() {
//   var section = document.querySelectorAll("section.anchor");
//   [].forEach.call(section, function (item) {
//     function isElementInViewport(section) {

//     var rect = section.getBoundingClientRect();

//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
//     );
// }
//     if (isElementInViewport(section)) {
//       section.classList.add ("active");
//     }// else {
//     // section.classList.remove("active");
//   // }
//   })
//   console.log(section)
// }
