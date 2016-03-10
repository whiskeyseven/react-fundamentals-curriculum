var React = require('react');
var styles = require('../styles');
var Details = require('../components/Details');

var DetailContainer = React.createClass({
  render: function() {
    return (
      <Details 
        stats={this.props.location.state.forecast} 
        date={this.props.location.state.date}
        city={this.props.routeParams.city} />
    )
  }
});

module.exports = DetailContainer;