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

//create nav li click event
// $("#nav li").click (function(e){
//     console.log($(this).parent().children());
//     $(this).parent().children().removeClass('active');
//     $(this).addClass("active"); 
// });

//opening fade effect
$("header h1,nav").hide().fadeIn(4000);
$("#Bio").hide().fadeIn(5000);

//testing out some init stuff

// $(document).ready(function(){

// 	$('#intro').css({'height':(($( window ).innerHeight()))+'px'});

// 	$('.image-link').magnificPopup({
// 	  type: 'image',
// 	  gallery:{
// 	    enabled:false
// 	  }
// 	});

// 	var tw = $('.thumb').width();
// 	$('.thumb').css({'height':tw+'px'});

// 	var sections = $('section')
// 	  , nav = $('nav');
	 
// 	$(window).on('scroll', function () {
// 	  var cur_pos = $(this).scrollTop();
	 
// 	  sections.each(function() {
// 	    var top = $(this).offset().top -32,
// 	        bottom = top + $(this).outerHeight();
	 
// 	    if (cur_pos >= top && cur_pos <= bottom) {
// 	      nav.find('a').removeClass('active');
// 	      sections.removeClass('active');
	 
// 	      $(this).addClass('active');
// 	      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
// 	    }



// 	  });

// 	});
// });

// $(window).resize(function(){
	
// 	$('#intro').css({'height':(($( window ).innerHeight()))+'px'});
	
// 	var tw = $('.thumb').width();
// 	$('.thumb').css({'height':tw+'px'});

// });


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
