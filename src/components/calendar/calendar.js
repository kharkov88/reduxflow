import React from 'react';
import './calendar.css';
import {Day} from './day';

export class Calendar extends React.Component {
	constructor (props){
		super(props);

	}
	render() {
		let {data:{april}} = this.props;
		let result;
		if (april) {
			april.length = 12;
			let map = [].map;
			result = map.call(april,(item,index) => <Day key={index} events={item}/>);
		}

		return (
			<div>
			{
				(april) ?
				<div className="calendar">
					{
						result
					}
				</div>
				: ''
			}
			</div>
		)
	}
}
