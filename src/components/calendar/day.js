import React from 'react';

export class Day extends React.Component {
	constructor (props){
		super(props);

	}
	shouldComponentUpdate(nextProps) {
		//return (nextProps.events !== this.props.events)
		return 1
	}
	render() {
		console.time('fun')
		this.sleep(200);
		console.timeEnd('fun')
		console.log(`render ${this.props.id}`);
		return (
			<div className="day">
	
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
}