var DayCareListings = React.createClass({
	
	render: function () {
    var dayCareNodes;
    if (this.props.isLoading) {
      var stubArray = [1,2,3];
      dayCareNodes = stubArray.map(function (blank, index) {
        return (
          <Daycare isLoading={this.props.isLoading} />
          );
      }.bind(this));
    } else {
      dayCareNodes = this.props.data.map(function (daycare, index) {
        return (
          <Daycare name={daycare.name} description={daycare.description} street={daycare.street}  city={daycare.city} key={index} />
          );
      });
    }
    

    return (
      <div className="DayCareList" id="listings">
        {dayCareNodes}
      </div>
      );
  }
});