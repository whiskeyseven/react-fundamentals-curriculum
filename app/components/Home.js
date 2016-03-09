var React = require('react');
var styles = require('../styles');
var SearchContainer = require('../containers/SearchContainer');

var Home = React.createClass({
  render: function() {
    return (
      <div style={styles.homeContainer}>
        <h1 style={styles.homeTitle}>Enter a City and State</h1>
        <SearchContainer style={styles.homeSearchContainer} />
      </div>
    )
  }
});

module.exports = Home;