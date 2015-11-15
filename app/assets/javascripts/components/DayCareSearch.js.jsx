var DayCareSearch = React.createClass({

	/*
	 * Toggle show only day cares with no waitlist 
	 */
	searchDayCares: function() {
		var searchTerm = this.refs.searchBar.getDOMNode().value;
		listingsController.setSearchFilter(searchTerm);
	},

	render: function() {
		return (
				 <div>
					<input type="text" className="form-control" placeholder="Search for a Day Care" ref="searchBar" onKeyUp={this.searchDayCares}/>
				</div>
				)
			}
	});