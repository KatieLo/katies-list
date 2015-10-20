var Daycare = React.createClass({
	onHover: function() {
		listingsController.setHighlightedDayCareId(this.props.data.id);
	},

	render: function() {
		if (this.props.isLoading) {
			return (
			<div className="row dayCareItem">
				<div className="col-xs-12">
					<div className="row">
						<div className="col-xs-12">
							<h3 className="h3-bar"></h3>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12 col-md-6">
							<div className="streetview-img">
								<div className="blank-img"></div>
							</div>
						</div>
						<div className="col-xs-12 col-md-6">
							<h6 className="h6-bar"></h6>
							<p className="p-bar"></p>
							<p className="p-bar"></p>
							<p className="p-bar"></p>
						</div>
					</div>	
				</div>
			</div>
			)
		} else {
			var backUpImage = "https://maps.googleapis.com/maps/api/streetview?location=" + this.props.data.street + "," + this.props.data.city + "&size=600x400";
			return (
			<div className="row dayCareItem" onMouseEnter={this.onHover}>
				<div className="col-xs-12">
					<div className="row">
						<div className="col-xs-12">
							<h3 className="daycare-name">{this.props.data.name}</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12 col-md-6">
							<div className="streetview-img">
								<img src={backUpImage} />
							</div>
						</div>
						<div className="col-xs-12 col-md-6">
							<h6 className="street-address">{this.props.data.street},{this.props.data.city}</h6>
							<p>{this.props.data.description}</p>
						</div>
					</div>	
				</div>
			</div>
			)
		}
		
	}
});
