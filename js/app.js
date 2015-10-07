//create nav li click event

$("#nav li").click (function(e){
    console.log($(this).parent().children());
    $(this).parent().children().removeClass('active');
    $(this).addClass("active"); 
});

$("header h1,nav").hide().fadeIn(3500);
$("#Bio").hide().fadeIn(3500);

//testing out some init stuff

$(document).ready(function(){

	$('#intro').css({'height':(($( window ).innerHeight()))+'px'});

	$('.image-link').magnificPopup({
	  type: 'image',
	  gallery:{
	    enabled:false
	  }
	});

	var tw = $('.thumb').width();
	$('.thumb').css({'height':tw+'px'});

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
	 
	      $(this).addClass('active');
	      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    }



	  });

	});
});

$(window).resize(function(){
	
	$('#intro').css({'height':(($( window ).innerHeight()))+'px'});
	
	var tw = $('.thumb').width();
	$('.thumb').css({'height':tw+'px'});

});

