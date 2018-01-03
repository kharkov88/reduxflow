import React from 'react';

export class Day extends React.Component {
	constructor (props){
		super(props);

	}
	shouldComponentUpdate(nextProps) {
		return (nextProps.events !== this.props.events)
	}
	render() {
		console.log(`render ${this.props.id}`);
		return (
			<div className="day">
	
			</div>
		)
	}
}
