// flickerAPI key:
//   7b67c7183d7b429d9225c15c48efb9a8
// secret
//   c25da700ef93632a

$(document).ready(function() {
	
	//assign your api key equal to a variable
	var apiKey = '7b67c7183d7b429d9225c15c48efb9a8';
	var photoSetID = '72157657833064644';
	var flickerAPI = '//api.flickr.com/services/rest/?&method=flickr.photosets.getPhotos&api_key=' + apiKey + '&photoset_id=' + photoSetID + '&format=json&jsoncallback=?';
	//the initial json request to flickr
	//to get your latest public photos, use this request: http://api.flickr.com/services/rest/?&amp;method=flickr.people.getPublicPhotos&amp;api_key=' + apiKey + '&amp;user_id=29096781@N02&amp;per_page=15&amp;page=2&amp;format=json&amp;jsoncallback=?

  function displayPhotos(data) {
      $.getJSON('//api.flickr.com/services/rest/?&method=flickr.photosets.getPhotos&api_key=' + apiKey + '&photoset_id=' + photoSetID + '&format=json&jsoncallback=?');
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#image-container').html(photoHTML);
    }
	console.log(flickerAPI)
});
 
//https://www.flickr.com/services/rest/?&method=flickr.photosets.getphotos&api_key=7b67c7183d7b429d9225c15c48efb9a8&photoset_id=72157657833064644&format=json&jsoncallback=?