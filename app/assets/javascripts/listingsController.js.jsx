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
		// set the min and max ages (won't change)
		// set the min and max prices (won't change)
		for (var i = 0; i < ListingsStore.State.allListings.length; i++) {
			// if this day care's price is less than the current min price, upate min price to this price.
			if (parseFloat(ListingsStore.State.allListings[i].price_per_month) < ListingsStore.State.minPrice) {
				ListingsStore.State.minPrice = parseFloat(ListingsStore.State.allListings[i].price_per_month);
			}
			// if this day care's price is more than the current max price, upate max price to this price.
			if (parseFloat(ListingsStore.State.allListings[i].price_per_month) > ListingsStore.State.maxPrice) {
				ListingsStore.State.maxPrice = parseFloat(ListingsStore.State.allListings[i].price_per_month);
			}

			// if this day care's min age is less than the current min age, upate min age to this min age.
			if (ListingsStore.State.allListings[i].min_age < ListingsStore.State.minAge) {
				ListingsStore.State.minAge = ListingsStore.State.allListings[i].min_age;
			}
			// if this day care's max age is more than the current max age, upate max age to this min max age.
			if (ListingsStore.State.allListings[i].max_age > ListingsStore.State.maxAge) {
				ListingsStore.State.maxAge = ListingsStore.State.allListings[i].max_age;
			}
		}
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
 * Set waitlist filter
 */
ListingsController.prototype.setWaitlistFilter = function(noWaitlistOnly) {
	ListingsStore.State.currentWaitlistFilter = noWaitlistOnly;
	this.filter();
}

/*
 * Set age filter
 */
ListingsController.prototype.setAgeFilter = function(minAge) {
	ListingsStore.State.currentAgeFilter = minAge;
	this.filter();
}

/*
 * Set price filter
 */
ListingsController.prototype.setPriceFilter = function(maxPrice) {
	ListingsStore.State.currentPriceFilter = maxPrice;
	this.filter();
}



/*
 * Filter function for day cares with waitlist 
 * Toggles the filter for showing only day cares with/without waitlists
 */
ListingsController.prototype.filter = function() {
	// clear filters (for now - should be possible to have mutiple filters)
	ListingsStore.State.filteredListings = [];
	// add each day care item that doesn't have a waitlist to the filteredListings array
	for (var i = 0; i < ListingsStore.State.allListings.length; i++) {
		if (ListingsStore.State.currentWaitlistFilter) { // only show day cares with no waitlist 
			if (ListingsStore.State.allListings[i].has_waitlist) { // has a waitlist, so skip this
				continue;
			}
		}

		if (ListingsStore.State.currentAgeFilter !== null) { // min age has been set
			if (ListingsStore.State.allListings[i].min_age > ListingsStore.State.currentAgeFilter) { // has a min age that is older than required, so skip this
				continue;
			}
		}
		if (ListingsStore.State.currentPriceFilter !== null) { // max price has been set
			if (ListingsStore.State.allListings[i].price_per_month > ListingsStore.State.currentPriceFilter) { // has a price that is more than the specified maximum price, so skip this
				continue;
			}
		}

		ListingsStore.State.filteredListings.push(ListingsStore.State.allListings[i]);
	}
	this.renderReact();
};


/*
 * Render the react components 
 */
ListingsController.prototype.renderReact = function() {
	React.render(<ListingsAndMapWrapper data={ListingsStore.State.filteredListings} isLoading={ListingsStore.State.isLoading} highlightedDayCareId={ListingsStore.State.highlightedDayCareId} minPrice={ListingsStore.State.minPrice} maxPrice={ListingsStore.State.maxPrice} minAge={ListingsStore.State.minAge} maxAge={ListingsStore.State.maxAge}/>, document.getElementById('page'));
};
