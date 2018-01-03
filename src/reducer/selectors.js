import { createSelector } from 'reselect';

const data = (state) => state.data;

export function reciveData(state) {
	if (state.data) {
	return createSelector(
		[() => data(state)],
		(data) => data
		);
}
} 