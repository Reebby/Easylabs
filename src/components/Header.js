import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mobile_menu: false,
			loading: false,
			redirectToPhone: false,
			home: 'active',
			showcart: '',
			cartItems: [],
		};
	}

	componentDidMount = () => {
		this.setState({ cartItems: [] });
	};

	getTotal = () => {
		return this.state.cartItems.reduce((a, b) => {
			return a + b.quantity * b.price;
		}, 0);
	};

	handleMobileMenu = () => {
		this.setState(prevState => ({ mobile_menu: !prevState.mobile_menu }));
	};

	handleOpenMobileCart = () => {
		this.setState({ mobile_menu: false, showcart: 'active', show: false, showText: '', cartItems: [] });
	};

	handleOpenCart = () => {
		this.setState({ showcart: 'active', show: false, showText: '', cartItems: [] });
	};

	handleCloseCart = () => {
		this.setState({ showcart: '' });
	};
	render() {
		return (
			<header className="header">
				<div className="header-quickLinks js-header-quickLinks d-lg-none">
					<div className="quickLinks-top js-quickLinks-top" />
					<div className="js-quickLinks-wrap-m"></div>
				</div>
				<div className="header-content">
					<div className="container">
						<div className="row align-items-lg-center">
							<button
								className="navbar-toggler collapsed"
								data-toggle="collapse"
								data-target="#navbarNavDropdown"
							>
								<span className="icon-menu" />
							</button>
							<div className="col-lg-auto col-lg-1 d-flex align-items-lg-center">
								<Link to="/" className="header-logo">
									<img src="/logo.png" alt="" className="img-fluid" />
								</Link>
							</div>
							<div className="col-lg ml-auto header-nav-wrap">
								<div className="header-nav js-header-nav">
									<nav className="navbar navbar-expand-lg btco-hover-menu">
										<div
											className="collapse navbar-collapse justify-content-center"
											id="navbarNavDropdown"
										>
											<ul className="navbar-nav">
												<li className="nav-item">
													<Link to="/about" className="nav-link">
														About Us
													</Link>
												</li>
												<li className="nav-item">
													<a
														href="#"
														className="nav-link dropdown-toggle"
														data-toggle="dropdown"
													>
														Interpretations Menu
													</a>
													<ul className="dropdown-menu">
														<li>
															<Link to="/interpretation1" className="dropdown-item" >
															Modern Medicine Expert
															</Link>
														</li>
														<li>
															<Link to="/interpretation2" className="dropdown-item">
															Complimentary Medicine Expert
															</Link>
														</li>
														
													</ul>
												</li>
												<li className="nav-item">
													<a
														href="#"
														className="nav-link dropdown-toggle"
														data-toggle="dropdown"
													>
														Services
													</a>
													<ul className="dropdown-menu">
													
														<li>
															<Link to="/laboratories" className="dropdown-item" >
																Laboratories
															</Link>
														</li>
														<li>
															<Link to="/doctors"className="dropdown-item" >
																Doctors
															</Link>
														</li>
														<li>
															<Link to="/patients" className="dropdown-item">
																Patients
															</Link>
														</li>
														
													</ul>
												</li>
												<li className="nav-item">
													<a
														href="#"
														className="nav-link dropdown-toggle"
														data-toggle="dropdown"
													>
														Health Care Providers
													</a>
													<ul className="dropdown-menu">
														<li>
															<Link to="/background" className="dropdown-item" >
																Background
															</Link>
														</li>
														<li>
															<Link to="/start" className="dropdown-item" >
																Getting Started
															</Link>
														</li>
														<li>
															<Link to="/appointment"className="dropdown-item" >
																Schedule an Appointment
															</Link>
														</li>
													</ul>
												</li>
												<li className="nav-item">
													<a
														href="#"
														className="nav-link dropdown-toggle"
														data-toggle="dropdown"
													>
														Patients
													</a>
													<ul className="dropdown-menu">
														<li>
															<Link to="/testing" className="dropdown-item" >
																Who Should Be Tested
															</Link>
														</li>
														<li>
															<Link to="/howitworks" className="dropdown-item">
																How It Works
															</Link>
														</li>
														
													</ul>
												</li>
												<li className="nav-item dropdown">
													<a
														href="#"
														className="nav-link dropdown-toggle"
														data-toggle="dropdown"
													>
														The Facts
													</a>
													<ul className="dropdown-menu">
														<li>
															<Link to="statistics" className="dropdown-item" href="#">
																Health Statistics
															</Link>
														</li>
														<li>
															<a className="dropdown-item" href="#">
																Health Care Cost
															</a>
														</li>
														<li>
															<a className="dropdown-item" href="#">
																What are the Medical Cornerstones
															</a>
														</li>
													</ul>
												</li>
												<li className="nav-item">
													<a className="nav-link" href="#">
														Contacts
													</a>
												</li>
											</ul>
										</div>
									</nav>
								</div>
								<div style={{marginTop: '-20px'}} className="header-search">
									<div  className="form-inline">
										<i className="icon-search" />
										<input type="text" placeholder="Search" />
										<button type="submit">
											<i className="icon-search" />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}
