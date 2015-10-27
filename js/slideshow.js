// flickerAPI key:
//   7b67c7183d7b429d9225c15c48efb9a8
// secret
//   c25da700ef93632a

var $overlay = $('<div id="overlay"></div>');

$("body").append($overlay);

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("id");
	var apiKey = '7b67c7183d7b429d9225c15c48efb9a8';
	var userID = '51428176@N08';
  var flickerAPI= 'https://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&api_key=' + apiKey + '&photoset_id=' + imageLocation + '&user_id=' + userID + '&jsoncallback=?';
  var flickerOptions= "photoset";

  function displayPhotos(data) {
      var photoHTML = '<ul class="removeable">';
      $.each(data.photoset.photo,function(i,item) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<img src="https://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg>';
        photoHTML += '</li>';
        }); // end each loop
        photoHTML += '</ul>';
        $overlay.append(photoHTML);
        $overlay.show();
    } //end display Photos
    
  $.getJSON(flickerAPI, flickerOptions , displayPhotos);
});//on click function


 $overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
  (".removable").remove();
});