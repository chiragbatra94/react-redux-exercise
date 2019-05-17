import { apiClient } from '../api-client';
import {
	GET_TODOS,
	STARTED,
	ERROR,
	SUCCESS,
	FETCHING_ERROR,
	DELETE_EROOR,
	CREATE_ERROR,
	DELETE_SUCCSS,
	CREATE_SUCCESS,
} from '../constants';

export const getTodo = () => {
	return async dispatch => {
		dispatch({ type: STARTED });
		try {
			await apiClient.getAllTodos().then(res => {
				dispatch({
					type: GET_TODOS,
					payload: res.payload,
				});
			});
		} catch (error) {
			dispatch({
				type: ERROR,
				payload: FETCHING_ERROR,
			});
		}
	};
};

export const createTodo = todo => {
	return async dispatch => {
		dispatch({ type: STARTED });
		try {
			await apiClient.createTodo(todo).then(() => {
				dispatch({
					type: SUCCESS,
					payload: CREATE_SUCCESS,
				});
				dispatch(getTodo());
			});
		} catch (err) {
			dispatch({
				type: ERROR,
				payload: CREATE_ERROR,
			});
		}
	};
};

export const deleteTodo = id => {
	return async dispatch => {
		dispatch({ type: STARTED });
		try {
			await apiClient.deleteTodo(id);
			dispatch({
				type: SUCCESS,
				payload: DELETE_SUCCSS,
			});
			dispatch(getTodo());
		} catch (err) {
			dispatch({
				type: ERROR,
				payload: DELETE_EROOR,
			});
		}
	};
};
