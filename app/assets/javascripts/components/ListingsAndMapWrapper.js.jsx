var ListingsAndMapWrapper = React.createClass({
	componentDidMount: function() {
		resizeContainerHeights();
	},

	render: function() {
		return (
			<div className="row" id="wrapper">
				<div className="col-xs-12 col-sm-5 col-md-7" id="left-side">
					<DayCareFilters data={this.props.data} isLoading={this.props.isLoading} minPrice={ListingsStore.State.minPrice} maxPrice={ListingsStore.State.maxPrice} minAge={ListingsStore.State.minAge} maxAge={ListingsStore.State.maxAge}/>
					<DayCareListings data={this.props.data} isLoading={this.props.isLoading} highlightedDayCareId={this.props.highlightedDayCareId} />
				</div>

				<DayCareMap data={this.props.data} isLoading={this.props.isLoading} highlightedDayCareId={this.props.highlightedDayCareId} />
			</div>
		);
	}
});