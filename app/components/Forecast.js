var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function Forecast(props) {
  
  if (props.isLoading === true) {
    return (
      <p>LOADING</p>
    )
  }

  return(
    <div>Here's a forecast...</div>
  )
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  forecastInfo: PropTypes.array.isRequired
}

module.exports = Forecast;