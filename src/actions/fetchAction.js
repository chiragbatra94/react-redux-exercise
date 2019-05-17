import { apiClient } from '../api-client';
import { GET_TODOS } from '../constants';

export const getTodo = () => {
	return dispatch => {
		return apiClient.getAllTodos().then(res => {
			if (res) {
				dispatch({
					type: GET_TODOS,
					payload: res.payload,
				});
			}
		});
	};
};
