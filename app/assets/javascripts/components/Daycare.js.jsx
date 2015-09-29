var Daycare = React.createClass({

	render: function() {
		var backUpImage = "https://maps.googleapis.com/maps/api/streetview?location=" + this.props.street + "," + this.props.city + "&size=600x400";

		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="row">
						<div className="col-xs-12">
							<h3 className="daycare-name">{this.props.name}</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12 col-md-6">
							<div className="streetview-img">
								<img src={backUpImage} />
							</div>
						</div>
						<div className="col-xs-12 col-md-6">
							<h6 className="street-address">{this.props.street},{this.props.city}</h6>
							<p>{this.props.description}</p>
						</div>
					</div>	
				</div>
			</div>
			)
	}
});
