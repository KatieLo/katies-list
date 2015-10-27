/*
 * Container component of all the Day Care Items
 */
var DayCareListings = React.createClass({
	
	render: function () {
    var dayCareNodes;
    if (this.props.isLoading) {
      var stubArray = [1,2,3]; // make three 'loading' state day care items
      dayCareNodes = stubArray.map(function (blank, index) {
        return (
          <Daycare isLoading={this.props.isLoading} />
          );
      }.bind(this));
    } else {
      dayCareNodes = this.props.data.map(function (daycare, index) {
        return (
          <Daycare data={daycare} highlightedDayCareId={this.props.highlightedDayCareId} />
          );
      }.bind(this));
    }
    

    return (
      <div className="DayCareList" id="listings">
        {dayCareNodes}
      </div>
      );
  }
});