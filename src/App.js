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
import Testing from './Pages/Testing';
import HowItWorks from './Pages/HowItWorks';
import Statistics from './Pages/Statistics';
import Interpretation1 from './Pages/Interpretation1';
import Interpretation2 from './Pages/Interpretation2';
import ComingSoon from './Pages/ComingSoon';

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
				<Route path="/testing" component={Testing} />
				<Route path="/howitworks" component={HowItWorks} />
				<Route path="/statistics" component={Statistics} />
				<Route path="/interpretation1" component={Interpretation1} />
				<Route path="/interpretation2" component={Interpretation2} />
				<Route path="/coming-soon" component={ComingSoon} />
			</Switch>
			</ScrollToTop>
		</BrowserRouter>
	);
}

export default App;
