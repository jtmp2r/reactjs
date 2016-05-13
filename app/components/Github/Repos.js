var React = require("react");


var Repos = React.createClass({
	render: function() {
		return (
			<div>
				<p>Reps</p>
				<p>Bitches: {this.props.repos}</p>
			</div>
		)
	}
})

module.exports = Repos;