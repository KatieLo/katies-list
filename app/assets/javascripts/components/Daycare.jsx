var Daycare = React.createClass({
	render: function() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="row">
						<div className="col-xs-12 col-sm-6">
							<div className="streetview-img"></div>
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
