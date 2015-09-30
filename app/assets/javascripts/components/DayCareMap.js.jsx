var DayCareMap = React.createClass({
	componentDidMount: function() {
		// Use Google JS Stuff to init a map in the div
		var myLatlng = new google.maps.LatLng(37.4292, -122.1381);
		var mapOptions = {
		  zoom: 12,
		  center: myLatlng,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("map"),
		    mapOptions);
	},

	render: function() {
		return (
			<div className="hidden-xs col-sm-7 col-md-5" id="map">
			</div>
		);
	}
});