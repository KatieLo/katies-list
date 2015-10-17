/*
 *
 *
 */

/*
 * Constructor instantiates the React components 
 *
 */
 var listingsController = function(){
 	this.allListings = [];
 	this.filteredListings = [];
 	this.isLoading = true;
 	this.renderReact(); // to render with loading state
 	setTimeout(function(){
 		this.getDataAndRender()
 	}.bind(this), 2000); // get data and render with data
 };

/*
 * Gets the data
 */
listingsController.prototype.getDataAndRender = function() {
	$.get( '/day_cares.json', function( data ) {
	  this.allListings = data;
	  // because initially there is no filtering 
	  this.filteredListings = data;
	  this.isLoading = false;
	  this.renderReact();
	}.bind(this));
}

/*
 * render react components 
 */
listingsController.prototype.renderReact = function() {
 React.render(<ListingsAndMapWrapper data={this.filteredListings} isLoading={this.isLoading}/>, document.getElementById('page'));
}
