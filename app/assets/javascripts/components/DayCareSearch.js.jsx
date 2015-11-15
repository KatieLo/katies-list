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
				 <div className="input-group">
					<input type="text" className="form-control" placeholder="Search Daycares" ref="searchBar" onKeyUp={this.searchDayCares}/>
					<span className="input-group-btn">
						<button type="submit" className="btn btn-default">Go</button>
					</span>
				</div>
				)
			}
	});