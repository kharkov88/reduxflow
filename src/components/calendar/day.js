import React from 'react';

export class Day extends React.Component {
	constructor (props){
		super(props);
	    this.state = {
	      counter: 0
	    }
	}
	shouldComponentUpdate(nextProps) {
		if (this.state.counter === 0)
		return (nextProps.events !== this.props.events)

		return 1
	}
	render() {
		this.sleep(200);
		console.log(`render ${this.props.id}`);
		return (
			<div className="day" onClick={this.increment.bind(this)}>
				<p>{this.state.counter}</p>
			</div>
		)
	}
	sleep(milliseconds) {
	  var start = new Date().getTime();
	  for (var i = 0; i < 1e7; i++) {
	    if ((new Date().getTime() - start) > milliseconds){
	      break;
	    }
	  }
	}
	increment() {
	    this.setState({ counter: ++this.state.counter})
	  }
}