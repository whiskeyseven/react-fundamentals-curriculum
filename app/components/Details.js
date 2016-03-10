var React = require('react');
var styles = require('../styles/forecastStyles');
var PropTypes = React.PropTypes;
var Day = require('./Day');

function Details(props) {
  return(
    <div>
      <Day icon={props.stats.weather[0].icon} date={props.date} onClick={function(){}} />
      <div style={styles.statsContainer}>
        <p>{props.city}</p>
        <p>{props.stats.weather[0].description}</p>
        <p>
          <span>min temp: </span>
          <span>{Math.floor(props.stats.temp.min)}</span>
          <span> degrees</span>
        </p>
        <p>
          <span>max temp: </span>
          <span>{Math.floor(props.stats.temp.max)}</span>
          <span> degrees</span>
        </p>
        <p>
          <span>humidity: </span>
          <span>{props.stats.humidity}</span>
        </p>
      </div>
    </div>
  )
}

Details.propTypes = {
  stats: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = Details;