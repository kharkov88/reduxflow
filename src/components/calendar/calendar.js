import React from 'react';
import './calendar.css';
import {Day} from './day';

export class Calendar extends React.Component {
	constructor (props){
		super(props);

	}
	render() {
		let {data:{april}} = this.props;
		console.log(april);
		return (
			<div>
			{
				(april) ?
				<div className="calendar">
					{
						Array(20).fill(1).map( function(item, index) {
							return <Day key={index} id={index} events={april["1"].events}/>
						})
					}
				</div>
				: ''
			}
			</div>
		)
	}
}
