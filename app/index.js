var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  render: function () {
    return (
      <div>Hello ReactJS Program!</div>
    )
  }
});

ReactDOM.render(<Hello />, document.getElementById('app'));

//var app = document.getElementById('app');
//app.innerHTML = 'Hello'
