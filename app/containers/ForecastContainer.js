var React = require('react');
var wxHelpers = require('../utils/wxHelpers');
var Forecast = require('../components/Forecast');

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      forecast: []
    }
  },
  componentDidMount: function() {
    var city = this.props.routeParams.city;
    wxHelpers.getForecast(city)
      .then(function(forecast){
        console.log(forecast);
        this.setState({
          isLoading: false,
          forecast: forecast
        })
      }.bind(this))
  },
  render: function() {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        forecastInfo={this.state.forecast} />
    )
  }
});

module.exports = ForecastContainer;