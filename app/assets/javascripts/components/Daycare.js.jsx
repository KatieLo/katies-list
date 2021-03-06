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
			var classes = '';
			if (this.props.highlightedDayCareId === this.props.data.id) {
				classes = 'row dayCareItem highlighted';
			} else {
				classes = 'row dayCareItem';
			}
			// Set streetview image if there is no uploaded cover image
			var imageUrl = this.props.data.cover;
			if (imageUrl === "") {
				imageUrl = "https://maps.googleapis.com/maps/api/streetview?location=" + this.props.data.street + "," + this.props.data.city + "&size=600x400";
			}

			// if the description is too long, trim it to 220 characters
			var trimmedDescription = this.props.data.description;
			if (trimmedDescription.length > 220) {
				trimmedDescription = this.props.data.description.substring(0, 220);
				trimmedDescription = trimmedDescription.trim() + '...';
			}

			return (
			<div className={classes} onMouseEnter={this.onHover}>
				<div className="col-xs-12">
					<div className="row">
						<div className="col-xs-12">
							<h3 className="daycare-name">{this.props.data.name}</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12 col-md-6">
							<div className="streetview-img">
								<img src={imageUrl} className="img-responsive"/>
							</div>
						</div>
						<div className="col-xs-12 col-md-6">
							<h6 className="street-address">{this.props.data.street}, {this.props.data.city}</h6>
							<p>{trimmedDescription}</p>
							<a href={this.props.data.website} target="_blank"><i className="fa fa-external-link"></i> Website</a>
						</div>
					</div>	
				</div>
			</div>
			)
		}
		
	}
});
