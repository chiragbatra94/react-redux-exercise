import React from 'react';

import Footer from './Footer/Footer';
import Header from './Header/HomeHeader';

export default props => {
	return (
		<div style={{height:'100%'}} className={props.loader ? 'scroll-disable' : ''}>
			<Header />
			{props.children}
			<Footer />
		</div>
	);
};
