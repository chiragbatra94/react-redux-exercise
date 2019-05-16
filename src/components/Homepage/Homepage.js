/* eslint-disable */

import React, { Component } from 'react';
import Loader from '../Modal/Loader';
import Layout from '../layout';
import AlertModal from '../Modal/AlertModal';
import { apiClient } from '../../api-client';

// import { getTodoList, addTodo, deleteTodo } from '../../actions/fetchAction';

class Homepage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loader: false,
			message: '',
			inputValue: '',
			todo: {
				name: '',
			},
			todos: [],
		};
	}

	componentDidMount() {
		this.getAllTodo();
	}

	getAllTodo = () => {
		this.toggleLoader();
		apiClient
			.getAllTodos()
			.then(todos => {
				this.setState({ todos: todos.payload });
				this.toggleLoader();
			})
			.catch(err => {
				console.log('Err. in Homepage.getAllTodo:: %o', err);
				this.toggleLoader();
			});
	};

	toggleLoader = () => {
		this.setState({ loader: !this.state.loader });
	};

	handleInputChange = e => {
		if (e.target.value !== ' ') {
			const { todo } = this.state;
			todo[e.target.name] = e.target.value;
			this.setState({
				todo,
			});
		}
	};

	deleteTodo(id) {
		this.toggleLoader();
		apiClient.deleteTodo(id);
		this.getAllTodo();
		this.toggleLoader();
	}

	createTodo = e => {
		if (this.state.todo.name) {
			this.toggleLoader();
			apiClient.createTodo(this.state.todo);
			this.getAllTodo();
			this.resetState();
		}
	};

	resetState = () => {
		this.setState({ todo: { name: '' } });
	};

	render() {
		let { loader, message, todo } = this.state;
		return (
			<Layout loader={loader}>
				<Loader isHidden={!loader} />
				<section className="wrapper">
					<div className="field-wrap">
						<input
							name="name"
							value={todo.name}
							className="input"
							onChange={this.handleInputChange}
							type="text"
							placeholder="TODO..."
						/>
						<button onClick={this.createTodo} className="btn">
							Submit
						</button>
					</div>

					<ul className="list">
						{this.state.todos.map((todo, key) => {
							return (
								<li key={key}>
									<span className="list-text">{todo.name}</span>
									<a href="javascript:void(0)">
										<img
											className="delete-icon"
											onClick={() => this.deleteTodo(todo.id)}
											src="img/delete.png"
											alt="delete"
											height="20"
											width="20"
										/>
									</a>
								</li>
							);
						})}
					</ul>
				</section>
			</Layout>
		);
	}
}

// const mapDispatchToProps = dispatch => {
// 	return {
// 		createTodo: todo => {
// 		dispatch(addTodo(todo));
// 	  }
// 	};
//   };

//   export default connect(
// 	null,
// 	mapDispatchToProps
//   )(NewTodo);

export default Homepage;
