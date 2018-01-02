import { SET_DATA } from '../actions';

export function setData(payload) {
	return {
		type: SET_DATA,
		payload
	}
}