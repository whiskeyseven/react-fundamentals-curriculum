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
        this.setState({
          isLoading: false,
          forecast: forecast
        })
      }.bind(this))
  },
  handleDayClick: function(index,date) {
    this.context.router.push({
      pathname: '/detail/'+this.props.routeParams.city,
      state: {
        forecast: this.state.forecast[index],
        date: date
      }
    })
  },
  render: function() {
    return (
      <Forecast
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        forecastInfo={this.state.forecast}
        onDayClick={this.handleDayClick} />
    )
  }
});

module.exports = ForecastContainer;