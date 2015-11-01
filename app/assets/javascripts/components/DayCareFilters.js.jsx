var DayCareFilters = React.createClass({
	getInitialState: function() {
		return {
			waitlistOnly: false,
		}
	},

	filterByWaitlist: function() {
		listingsController.filterByWaitlist();
		this.setState({waitlistOnly: true}); // not quite sure how to go from here...
	},

	render: function() {
		return (
			<div id="filters">
				<div className="row">
					<div className="hidden-xs col-md-12 filter-label">
						<div className="filter">
							<label>Age Range (Months)</label>
							<input id="age-range" type="range" min="1" max="60" step="1" />
							<span className="label-min">1 month</span>
							<span className="label-max">60 months (5 years)</span>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="hidden-xs col-md-12 filter-label">
						<div className="filter">
							<label>Price Range ($100s)</label>
							<input id="age-range" type="range" min="500" max="5000" step="100" />
							<span className="label-min">$10</span>
							<span className="label-max">$2000</span>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="hidden-xs col-md-12 filter-label last">
						<div className="filter">
							<input id="age-range" type="checkbox" onClick={this.filterByWaitlist}/>
							<label>Only show daycares with no waitlist</label>
						</div>
					</div>
				</div>
			</div>
				)
			}
	});