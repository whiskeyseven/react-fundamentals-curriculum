var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/forecastStyles');
var Day = require('./Day');
var Moment = require('moment');
var Link = require('react-router').Link;

var handleClick = function(i,date,props) {
  props.onDayClick(i,date);
}

function Forecast(props) {
  
  if (props.isLoading === true) {
    return (
      <div>
      <div style={styles.forecastWrapper}>
        <h1 style={styles.cityName}>Loading...</h1>
      </div>
    </div>
    )
  }

  return(
    <div>
      <div style={styles.forecastWrapper}>
        <h1 style={styles.cityName}>{props.city}</h1>
        <p style={styles.selectADayBanner}>Select a day</p>
        <div style={styles.dayListWrapper}>
          {props.forecastInfo.map(function(individualDay,index){
            return <Day 
                      key={index}
                      icon={individualDay.weather[0].icon}
                      date={Moment().add(index,'days').format('dddd, MMM D')}
                      onClick={handleClick.bind(this,index,Moment().add(index,'days').format('dddd, MMM D'),props)} />
          })}  
        </div>
      </div>
    </div>
  )
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  forecastInfo: PropTypes.array.isRequired
}

module.exports = Forecast;