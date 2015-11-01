/*
 * The ListingsController fetches the data 
 * and handles rendering and re-rendering 
 * of the React conponents 
 * when a user interaction requires an update.
 */

/*
 * Constructor instantiates the React components 
 */
 var ListingsController = function(){
 	this.renderReact(); // to render with loading state
 	// Just to actually see the loading state :)
 	setTimeout(function(){
 		this.getDataAndRender()
 	}.bind(this), 2000); // get data and render with data
 };

/*
 * Gets the data, updates the data stored on ListingsStore.State
 * and renders the React components
 */
ListingsController.prototype.getDataAndRender = function() {
	$.get( '/day_cares.json', function( data ) {
		ListingsStore.State.allListings = data;
		// because initially there is no filtering 
		ListingsStore.State.filteredListings = data;
		ListingsStore.State.isLoading = false;
		this.renderReact();
	}.bind(this));
};

/*
 * Set a day care ID to be the highlighted day care
 * Parameter: id of the daycare that should be highlighted 
 * Re-renders the React components because a day care is now highlighted.
 */
ListingsController.prototype.setHighlightedDayCareId = function(dayCareIdToHighlight) {
	ListingsStore.State.highlightedDayCareId = dayCareIdToHighlight;
	this.renderReact();
};

/*
 * Filter function for day cares with waitlist 
 * Toggles the filter for showing only day cares with/without waitlists
 */
ListingsController.prototype.filterByWaitlist = function(dayCareIdToHighlight) {
	// clear filters (for now - should be possible to have mutiple filters)
	ListingsStore.State.filteredListings = [];
	// add each day care item that doesn't have a waitlist to the filteredListings array
	for (var i = 0; i < ListingsStore.State.allListings.length; i++) {
		if (ListingsStore.State.allListings[i].has_waitlist === false) {
			ListingsStore.State.filteredListings.push(ListingsStore.State.allListings[i]);
		}
	}
	this.renderReact();
};


/*
 * Render the react components 
 */
ListingsController.prototype.renderReact = function() {
	React.render(<ListingsAndMapWrapper data={ListingsStore.State.filteredListings} isLoading={ListingsStore.State.isLoading} highlightedDayCareId={ListingsStore.State.highlightedDayCareId}/>, document.getElementById('page'));
};
