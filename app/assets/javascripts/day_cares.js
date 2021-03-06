/*
* Global variable (must be accesible by all the components)
*/
var listingsController;

$(function() {
	// intitialize react controller
	listingsController = new ListingsController();
	resizeContainerHeights();
});

// Whenever the window height changes, we must resize the map and listings
$(window).resize(function() {
	resizeContainerHeights();
});

/*
 * Resizes the heights of the main divs to be height of the window
 */
function resizeContainerHeights() {
	// height of the window
	var windowHeight = $(window).height();
	// calculate height of the header, including margin
	var headerHeight = $('#header').outerHeight(true);
	// Mapheight is the height we want the map (and lisitngs to be)
	var mapHeight = windowHeight - headerHeight;
	$('#map').css('height', mapHeight + 'px');
	$('#left-side').css('height', mapHeight + 'px');
}