var React = require('react');
var styles = require('../styles');
var Search = require('../components/Search');

var SearchContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      city: ''
    }
  },
  handleUpdateCity: function(e) {
    this.setState({
      city: e.target.value
    })
  },
  handleSubmitSearch: function(e) {
    e.preventDefault();
    this.context.router.push({
      pathname: '/forecast/'+this.state.city
    })
  },
  render: function() {
    return (
      <Search
        style={this.props.style}
        onSubmitSearch={this.handleSubmitSearch}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    )
  }
});

module.exports = SearchContainer;