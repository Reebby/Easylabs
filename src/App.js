import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top'
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Patients from './Pages/Patients';
import Doctors from './Pages/Doctors';
import Laboratories from './Pages/Laboratories';
import Background from './Pages/Background';
import Start from './Pages/Start';
import Appointment from './Pages/Appointment';


function App() {
	return (
		<BrowserRouter>
		<ScrollToTop>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/patients" component={Patients} />
				<Route path="/doctors" component={Doctors} />
				<Route path="/laboratories" component={Laboratories} />
				<Route path="/background" component={Background} />
				<Route path="/start" component={Start} />
				<Route path="/appointment" component={Appointment} />
			</Switch>
			</ScrollToTop>
		</BrowserRouter>
	);
}

export default App;
