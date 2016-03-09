var React = require('react');
var styles = require('../styles');
var Toolbar = require('./Toolbar')

var Main = React.createClass({
  render: function() {
    return (
      <div style={styles.appContainer}>
        <Toolbar />
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;