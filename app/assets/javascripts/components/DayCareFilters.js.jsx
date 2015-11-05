var DayCareFilters = React.createClass({
	getInitialState: function() {
		return {
			noWaitlistOnly: false,
		}
	},

	/*
	 * Toggle show only day cares with no waitlist 
	 */
	filterByWaitlist: function() {
		var noWaitlistOnly = document.getElementById('waitlist').checked;
		listingsController.setWaitlistFilter(noWaitlistOnly);
		this.setState({noWaitlistOnly: noWaitlistOnly}); 
	},

	/*
	 * Show only day cares taking children over the age user selects 
	 */
	filterByAge: function() {
		var ageValue = parseInt(this.refs.ageRange.getDOMNode().value);
		listingsController.setAgeFilter(ageValue);
		this.updateAgeLabel(ageValue);
	},

	/*
	 * Show only day cares with a price lower than the user's selected max price 
	 */
	filterByPrice: function() {
		var priceValue = parseFloat(this.refs.priceRange.getDOMNode().value);
		listingsController.setPriceFilter(priceValue);
		this.updatePriceLabel(priceValue);
	},

	updatePriceLabel: function(priceValue) {
		var priceValueText = ' $' + priceValue;
		this.refs.priceLabel.getDOMNode().innerHTML = priceValueText;
	},

	updateAgeLabel: function(ageValue) {
		var ageValueText;
		if (ageValue < 24) { // quote age in weeks
			ageValueText = ' ' + ageValue + ' weeks';
		} else if (ageValue < 104) { // quote age in months
			ageValue = Math.round((ageValue/4), 1);
			ageValueText = ' ' + ageValue + ' months';
		} else { // quote age in years
			ageValue = Math.round((ageValue/52), 1);
			ageValueText = ' ' + ageValue + ' years';
		}
		this.refs.ageLabel.getDOMNode().innerHTML = ageValueText;
	},

	render: function() {
		var minAgeLabel = 'From ' + this.props.minAge + ' weeks'; // starts very young (6 weeks) So weeks easier than month/years here
		var maxAge =  (this.props.maxAge/52); // always at least 52 weeks. Easier to have 1.5 yrs than 73 weeks.
		var maxAgeLabel = (maxAge) + ' years';
		var minPriceLabel = '$' + this.props.minPrice;
		var maxPriceLabel = '$' + this.props.maxPrice;
		return (
			<div id="filters">
				<div className="row">
					<div className="hidden-xs col-md-12 filter-label">
						<div className="filter">
							<label>From what age do you need day care?</label><span ref="ageLabel"></span>
							<input ref="ageRange" type="range" min={this.props.minAge} max={this.props.maxAge} step="1"  onChange={this.filterByAge}/>
							<span className="slider-label label-min">{minAgeLabel}</span>
							<span className="slider-label label-max">{maxAgeLabel}</span>	
						</div>
					</div>
				</div>
				<div className="row">
					<div className="hidden-xs col-md-12 filter-label">
						<div className="filter">
							<label>Max Price Per Month</label> <span ref="priceLabel"></span>
							<input ref="priceRange" type="range" min={this.props.minPrice} max={this.props.maxPrice} step="10" onChange={this.filterByPrice}/>
							<span className="slider-label label-min">{minPriceLabel}</span>
							<span className="slider-label label-max">{maxPriceLabel}</span>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="hidden-xs col-md-12 filter-label last">
						<div className="filter">
							<input id="waitlist" type="checkbox" onClick={this.filterByWaitlist}/>
							<label>Only show daycares with no waitlist</label>
						</div>
					</div>
				</div>
			</div>
				)
			}
	});