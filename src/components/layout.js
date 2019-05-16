import React from 'react';

import Footer from './Footer/Footer';
import Header from './Header/HomeHeader';

export default props => {
	return (
		<div className={props.loader ? 'scroll-disable' : ''}>
			<Header />
			{props.children}
			<Footer />
		</div>
	);
};
