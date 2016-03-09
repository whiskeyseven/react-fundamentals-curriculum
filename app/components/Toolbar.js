var React = require('react');
var styles = require('../styles');
var SearchContainer = require('../containers/SearchContainer');

var Toolbar = React.createClass({
  render: function() {
    return (
      <div style={styles.toolbar}>
        <h2 style={styles.toolbarTitle}>Clever Title</h2>
        <SearchContainer style={styles.toolbarSearchContainer} />
      </div>
    )
  }
});

module.exports = Toolbar;