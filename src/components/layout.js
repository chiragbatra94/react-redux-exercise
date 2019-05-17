import React from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './Header/HomeHeader';
import 'react-toastify/dist/ReactToastify.min.css';

export default props => {
	return (
		<div style={{ height: '100%' }} className={props.loader ? 'scroll-disable' : ''}>
			<Header />
			{props.children}
			<ToastContainer
				position="top-center"
				autoClose={3000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnVisibilityChange
				draggable
				pauseOnHover
			/>
		</div>
	);
};
