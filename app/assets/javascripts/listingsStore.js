/*
 * The listings store holds the data 
 * that gets defined on initialisation
 */

var ListingsStore = {
  State: {
    allListings: [],
    filteredListings: [],
    isLoading: true,
    highlightedDayCareId: null,
    minPrice: Infinity, 
    maxPrice: 0,
    minAge: Infinity,
    maxAge: 0,
    currentAgeFilter: null,
    currentPriceFilter: null, 
    currentWaitlistFilter: null
  }
};