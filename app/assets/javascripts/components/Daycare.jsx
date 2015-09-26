var Daycare = React.createClass({
	getAddress: function() {
	    	return `{this.props.street} {this.props.city}`;
	  	},

	getBackupImage: function() {
		var address =  "{this.props.street} {this.props.city}";
		var mapSource = "https://maps.googleapis.com/maps/api/streetview?location={this.props.street},{this.props.city}&size=600x400";
		console.log(mapSource);
		return mapSource;
	},

	render: function() {
		this.getBackupImage();
		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="row">
						<div className="col-xs-12 col-sm-6">
							<div className="streetview-img">
							</div>
							<h3 className="daycare-name">{this.props.name}</h3>
						</div>
						<div className="col-xs-12 col-sm-6">
							<h6 className="street-address">{this.props.street},{this.props.city}</h6>
							<p>{this.props.description}</p>
						</div>
					</div>	
				</div>
			</div>
			)
	}
});
