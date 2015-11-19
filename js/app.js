
function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).ready(function(){

	var sections = $('section')
	  , nav = $('nav');
	 
	$(window).on('scroll', function () {
	  var cur_pos = $(this).scrollTop();
	 
	  sections.each(function() {
	    var top = $(this).offset().top -32,
	        bottom = top + $(this).outerHeight();
	 
	    if (cur_pos >= top && cur_pos <= bottom) {
	      nav.find('a').removeClass('active');
	      sections.removeClass('active');
	      nav.find('a').removeClass('active');
	      sections.removeClass('active');
	      $(this).addClass('active');
	      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    }
	  });
	});
});


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


