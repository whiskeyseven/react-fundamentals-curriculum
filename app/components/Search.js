var React = require('react');
var styles = require('../styles');
var PropTypes = React.PropTypes;

function Search (props) {
  return (
    <div style={props.style}>
      <input
        className="form-control"
        placeholder="Lafayette, IN"
        onChange={props.onUpdateCity}
        value={props.city}
        type="text" />
      <button
        className="btn btn-success"
        type="button"
        onClick={props.onSubmitSearch}
        style={styles.getWeatherButton}>
          Get Weather
      </button>
    </div>
  )
}

Search.propTypes = {
  style: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  onSubmitSearch: PropTypes.func.isRequired
}

module.exports = Search;