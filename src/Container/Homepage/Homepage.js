/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../../components/Modal/Loader';
import Layout from '../../components/layout';
import { getTodo, createTodo, deleteTodo } from '../../actions/fetchAction';
import { ADD } from '../../constants';
import { toast } from 'react-toastify';
class Homepage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loader: false,
			showModal: false,
			inputValue: '',
			todo: {
				name: '',
			},
			todos: []
		};
	}

	componentDidMount() {
		this.props.getAllTodo();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.todos != this.props.todos || nextProps.type != this.props.type) {
		  this.setState({ todos: nextProps.todos.reverse() });
		  if (this.props.message == '') {
			return;
		  }
		  if (this.props.type === 'success') {
			toast.success(this.props.message);
			return;
		  }
		  if (this.props.type === 'error') {
			toast.error(this.props.message);
		  }
		}
	  }

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
		this.props.deleteTodo(id);
	}

	createTodo = e => {
		e.preventDefault();
		if (this.state.todo.name) {
			this.props.createTodo(this.state.todo);
			this.resetState();
		}
	};

	resetState = () => {
		this.setState({ todo: { name: '' } });
	};

	closeModal = () => {
		this.setState({ showModal: false });
	};

	render() {
		let { showModal, todo } = this.state;
		return (
			<Layout loader={this.props.loader}>
				<Loader isHidden={!this.props.loader} />
				<section className="wrapper">
					<form>
						<div className="field-wrap">
							<input
								name="name"
								value={todo.name}
								className="input"
								onChange={this.handleInputChange}
								type="text"
								placeholder="TODO..."
							/>
							<button
								disabled={todo.name ? false : true}
								type="submit"
								onClick={this.createTodo}
								className="btn"
							>
								{ADD}
							</button>
						</div>
					</form>

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
const mapStateToProps = state => {
	return {
		todos: state.todo.todos,
		loader: state.todo.loader,
		message: state.todo.message,
		type: state.todo.type
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getAllTodo: () => {
			dispatch(getTodo());
		},
		createTodo: todo => {
			dispatch(createTodo(todo));
		},
		deleteTodo: id => {
			dispatch(deleteTodo(id));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Homepage);
