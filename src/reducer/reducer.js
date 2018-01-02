import { SET_DATA } from '../actions';

const initState = {
	data: [{id:1, text: 'qewqwe'}]
};

const reducer = (state, action) => {
  if (typeof state === 'undefined') {
    return initState
  }
  switch (action.type) {
  	case SET_DATA:
  	return Object.assign({}, state, {data:action.payload.data})

  	default: return state;
  }
}

export default reducer;