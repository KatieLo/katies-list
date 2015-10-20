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
 	this.allListings = [];
 	this.filteredListings = [];
 	this.isLoading = true;
 	this.highlightedDayCareId = null;
 	this.renderReact(); // to render with loading state
 	// Just to actually see the loading state :)
 	setTimeout(function(){
 		this.getDataAndRender()
 	}.bind(this), 2000); // get data and render with data
 };

/*
 * Gets the data
 */
ListingsController.prototype.getDataAndRender = function() {
	$.get( '/day_cares.json', function( data ) {
		this.allListings = data;
		// because initially there is no filtering 
		this.filteredListings = data;
		this.isLoading = false;
		this.renderReact();
	}.bind(this));
};

/*
 * Set a day care ID to be the highlighted day care
 * Parameter: id of the daycare that should be highlighted 
 * Re-renders the React components because a day care is now highlighted.
 */
ListingsController.prototype.setHighlightedDayCareId = function(dayCareIdToHighlight) {
	this.highlightedDayCareId = dayCareIdToHighlight;
	this.renderReact();
};


/*
 * Render the react components 
 */
ListingsController.prototype.renderReact = function() {
	React.render(<ListingsAndMapWrapper data={this.filteredListings} isLoading={this.isLoading} highlightedDayCareId={this.highlightedDayCareId}/>, document.getElementById('page'));
};
