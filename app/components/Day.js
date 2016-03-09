var React = require('react');
var styles = require('../styles/forecastStyles');
var PropTypes = React.PropTypes;

function Day(props) {
  return(
    <div style={styles.individualDayWrapper}>
      <img style={styles.dayIcon} src={'./app/images/weather-icons/'+props.icon+'.svg'} alt="Weather" />
      <h2 style={styles.dayDate}>{props.date}</h2>
    </div>
  )
}

Day.propTypes = {
  icon: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

module.exports = Day;