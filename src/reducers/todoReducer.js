import { GET_TODOS, ADD_TODO, DELETE_TODO, FAILURE } from '../constants';

const initialState = {
	loading: false,
	todos: [],
	error: null,
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TODOS:
			return {
				...state,
				loading: false,
				error: null,
				todos: [...state.todos, action.payload],
			};
		case FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error,
			};
		default:
			return state;
	}
};

export default todoReducer;
