import React from 'react';

const Alert = props => {
	if (!props.message) {
		return null;
	}
	return <div className="message">{props.message}</div>;
};

export default Alert;
