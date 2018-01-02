import {setData} from './setData';

export function getData() {
	return dispatch => {
		fetch(`/data.json`)
		.then(
			response => response.json(),
			error => console.log('An error occurred.', error)
		)
		.then(json => dispatch(setData(json)))
	}
}