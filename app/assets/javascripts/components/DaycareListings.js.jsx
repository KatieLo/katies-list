var DayCareListings = React.createClass({
	
	render: function () {
    var dayCareNodes = this.props.data.map(function (daycare, index) {
      return (
        <Daycare name={daycare.name} description={daycare.description} street={daycare.street}  city={daycare.city} key={index} />
        );
    });

    return (
      <div className="DayCareList">
        {dayCareNodes}
      </div>
      );
  }
});