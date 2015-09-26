//Place all the behaviors and hooks related to the matching controller here.
//All this logic will automatically be available in application.js.

// On document ready, get a starter Google map to show while we wait for filters 
$(function() {
	getInitialMap();
	React.render(<Test />, document.getElementById('test'));
});

function getInitialMap() {
	var address = $(".street-address").html();
	var src = "https://maps.googleapis.com/maps/api/streetview?location=" + address +"&size=600x400";
    $('#map').css({"background-image":"url('"+ src +"')", 'background-repeat': 'no-repeat', 'background-size' : 'cover'});

    $('.streetview-img').css({"background-image":"url('"+ src +"')", 'background-repeat': 'no-repeat', 'background-size' : 'cover'});
};