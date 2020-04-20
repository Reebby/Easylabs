import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top'
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';


function App() {
	return (
		<BrowserRouter>
		<ScrollToTop>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
			</Switch>
			</ScrollToTop>
		</BrowserRouter>
	);
}

export default App;
