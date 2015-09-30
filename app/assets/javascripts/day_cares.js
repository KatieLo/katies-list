//Place all the behaviors and hooks related to the matching controller here.
//All this logic will automatically be available in application.js.

// On document ready
$(function() {
	// make map and listings the right height
	
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
	console.log(windowHeight);
	// calculate height of the header, including margin
	var headerHeight = $('#header').outerHeight(true);
	// Mapheight is the height we want the map (and lisitngs to be)
	var mapHeight = windowHeight - headerHeight;
	$('#map').css('height', mapHeight + 'px');
	$('#left-side').css('height', mapHeight + 'px');
}

/*
controller {
	initialize 	-> renders all components in loading state
				-> ajax call to get data
				-> store in local vars
				-> call this.render
	filter_by_filters -> filters data then this.render
	filter_by_map_coords -> filters data then this.render
	render -> React.render
}*/