import React from 'react';

export class Day extends React.Component {
	constructor (props){
		super(props);

	}
	shouldComponentUpdate(nextProps) {
		return (nextProps.events !== this.props.events)
	}
	render() {
		let i = 6000;
		console.time('fun')
		function recur() {
			if(i==0) {return i}
			i--;
			recur(i/0.00000234*1000000/2300000000000)
		}
		recur();
		console.timeEnd('fun')
		console.log(`render ${this.props.id}`);
		return (
			<div className="day">
	
			</div>
		)
	}
}
