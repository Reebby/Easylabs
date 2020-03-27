import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top'
import './App.css';
import Home from './Pages/Home';


function App() {
	return (
		<BrowserRouter>
		<ScrollToTop>
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
			</ScrollToTop>
		</BrowserRouter>
	);
}

export default App;
