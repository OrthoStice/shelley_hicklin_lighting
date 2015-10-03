//create nav li click event

$("#nav li").click (function(e){
    console.log($(this).parent().children());
    $(this).parent().children().removeClass('active');
    $(this).addClass("active"); 
});

$("header h1,nav").hide().fadeIn(3500);
$("#Bio").hide().fadeIn(3500);