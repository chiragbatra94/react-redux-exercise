import { GET_TODOS, STARTED, ERROR, SUCCESS } from '../constants';

const initialState = {
	todos: [],
	loader: false,
	message: '',
	type: ''
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case STARTED:
			return {
				...state,
				loader: true,
			};
		case GET_TODOS:
			return {
				...state,
				loader: false,
				todos: action.payload,
			};
		case SUCCESS:
			return {
				...state,
				loader: true,
				message: action.payload,
				type: 'success'
			};
		case ERROR:
			return {
				...state,
				loader: false,
				message: action.payload,
				type: 'error'
			};
		default:
			return state;
	}
};

export default todoReducer;
