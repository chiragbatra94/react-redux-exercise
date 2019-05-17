import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import PageNotFound from './components/NotFound/PageNotFound';
import ErrorBoundary from './Error';

export default () => {
	return (
		<ErrorBoundary>
			<Router>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/*" component={PageNotFound} />
				</Switch>
			</Router>
		</ErrorBoundary>
	);
};
