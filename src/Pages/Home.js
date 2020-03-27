import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Home extends Component {
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
			<div>

				<Header />
				{/*//header*/}
				<div className="page-content">
					{/*section slider*/}
					<div className="section mt-0">
						<div className="quickLinks-wrap js-quickLinks-wrap-d d-none d-lg-flex">
							<div className="quickLinks js-quickLinks closed">
								<div className="container">
									<div className="row no-gutters">
									
										
										<div className="col">
											<a href="#" className="link">
												<i className="icon-price-tag" />
												<span>	Interpretations Menu</span>
											</a>
											<div className="link-drop">
												<h5 className="link-drop-title">
													<i className="icon-price-tag" />
													Interpretations Menu
												</h5>
												<table className="row-table">
													<tbody>
														<tr>
															<td>Endocrinologist Interpretation</td>
															<td>$3</td>
														</tr>
														<tr>
															<td>Fertility Interpretation</td>
															<td>$3</td>
														</tr>
														<tr>
															<td>Bio-Hacking</td>
															<td>$3</td>
														</tr>
														<tr>
															<td>Anti Aging Interpretation</td>
															<td>Free</td>
														</tr>
														<tr>
															<td>Standard Interpretation</td>
															<td>Free</td>
														</tr>

													</tbody>
												</table>
											</div>
										</div>
										
										<div className="col col-close">
											<a href="#" className="js-quickLinks-close">
												<i
													className="icon-top"
													data-toggle="tooltip"
													data-placement="top"
													title="Close panel"
												/>
											</a>
										</div>
									</div>
								</div>
								<div className="quickLinks-open js-quickLinks-open">
									<span data-toggle="tooltip" data-placement="left" title="Open panel">
										+
									</span>
								</div>
							</div>
						</div>
						<div id="mainSliderWrapper">
							<div className="loading-content">
								<div className="loader-dna">
									<column>
										<dot />
										<dot />
										<dot />
										<dot />
										<dot />
										<dot />
										<dot />
										<dot />
									</column>
									<column>
										<dash />
										<dash />
										<dash />
										<dash />
										<dash />
										<dash />
										<dash />
										<dash />
									</column>
									<column>
										<dot />
										<dot />
										<dot />
										<dot />
										<dot />
										<dot />
										<dot />
										<dot />
									</column>
								</div>
							</div>
							<div
								className="main-slider mb-0 arrows-white arrows-bottom"
								id="mainSlider"
								data-slick='{"arrows": false, "dots": true}'
							>
								<div className="slide">
									<div className="img--holder" data-bg="images/content/slider/slide-02.jpg" />
									<div className="slide-content center">
										<div className="vert-wrap container">
											<div className="vert">
												<div className="container">
													<div
														className="slide-txt1 text-no-uppercase"
														data-animation="fadeInDown"
														data-animation-delay="1s"
													>
														We Educate Patients for
														<br />
														<b>Preventative Health</b>
													</div>
													<div
														className="slide-txt2 text-no-uppercase"
														data-animation="fadeInUp"
														data-animation-delay="1.5s"
													></div>
													<div className="slide-btn">
														<a
															href="https://easylabs.org/patient/report/"
															target="_blank"
															className="btn link-inside"
															data-animation="fadeInUp"
															data-animation-delay="2s"
														>
															<i className="icon-right-arrow" />
															<span>Get your free results interpretations</span>
															<i className="icon-right-arrow" />
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="slide">
									<div className="img--holder" data-bg="images/content/slider/slide-01.jpg" />
									<div className="slide-content center">
										<div className="vert-wrap container">
											<div className="vert">
												<div className="container">
													<div
														className="slide-txt1 text-no-uppercase"
														data-animation="fadeInDown"
														data-animation-delay="1s"
													>
														We Empower Clinicians
														<br />
														<b>with Smart Lab Data</b>
													</div>
													<div
														className="slide-txt2 text-no-uppercase"
														data-animation="fadeInUp"
														data-animation-delay="1.5s"
													></div>
													<div className="slide-btn">
														<a
															href="https://easylabs.org/patient/report/"
															target="_blank"
															className="btn link-inside"
															data-animation="fadeInUp"
															data-animation-delay="2s"
														>
															<i className="icon-right-arrow" />
															<span>Get your free results interpretations</span>
															<i className="icon-right-arrow" />
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*//section slider*/}
					{/*section departments*/}
					<div
						className="section bg-bottom bg-right bg-norepeat bg-md-none bg-fixed section-bottom-padding section-top-padding"
						style={{ backgroundImage: 'url(images/bg-bottom-right.png)' }}
					>
						<div className="container">
							<div className="row mt-lg-4">
								<div className="col-md-6 col-xl-6 pr-xl-7">
									<div className="department-tabs2">
										<div className="department-tab2">
											<div className="department-tab2-number">1</div>
											<div className="department-tab2-text">Latest Tech</div>
											<div className="department-tab2-decor" />
										</div>
										<div className="department-tab2">
											<div className="department-tab2-number">2</div>
											<div className="department-tab2-text">Quality Service</div>
											<div className="department-tab2-decor" />
										</div>
										<div className="department-tab2">
											<div className="department-tab2-number">3</div>
											<div className="department-tab2-text">Skilled Team</div>
											<div className="department-tab2-decor" />
										</div>
										<div className="department-tab2">
											<div className="department-tab2-number">4</div>
											<div className="department-tab2-text">Positive Reviews</div>
											<div className="department-tab2-decor" />
										</div>
									</div>
									<div className="department-tabs2-bg">
										<img src="images/bg-department.png" alt="" />
									</div>
								</div>
								<div className="col-md-6 col-xl-6">
									<div className="department-carousel2">
										<div className="department-item">
											<div className="h-sub theme-color">Who we are</div>
											<h2>
												EasyLabs<span className="theme-color">.org</span>
											</h2>
											<p>
												Easylabs was developed by doctors for doctors from the most current and
												relevant clinical evidence about health coupled with advanced laboratory
												biomarker data. We help laboratories transform conventional and
												innovative biomarkers into actionable reports that can be effectively
												implemented in busy medical practices. We empower healthcare providers
												with smart information that uncovers hidden risk and provides insight
												into the root cause of conditions and symptoms in order to optimize
												clinical outcomes.
											</p>
											<br /> <p>Throughout this process we:</p>
											<ul className="marker-list-md">
												<li>Educate patients</li>
												<li>Expedite the progress toward preventative care</li>
											</ul>
											<a
												href="https://easylabs.org/patient/report/"
												target="_blank"
												className="btn mt-3"
												data-toggle="modal"
												// data-target="#modalBookingForm"
											>
												<i className="icon-right-arrow" />
												<span>Get your free results interpretations</span>
												<i className="icon-right-arrow" />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*//section  departments*/}
					{/*section*/}
					<div className="section bg-grey mt-md-0">
						<div className="container">
							<div className="title-wrap text-center">
								<h2
									className="h1 double-title double-title--white double-title--center double-title--vcenter"
									data-title="Easylabs"
								>
									<span>
										The Easylabs
										<span className="clearfix d-sm-none" /> Difference
									</span>
								</h2>
								<div className="h-decor" />
							</div>
							<div className="row">
                                 
							</div>
							
							<div className="nav nav-pills-icons" role="tablist">
								<a className="nav-link active" data-toggle="pill" role="tab">
									<i className="icon-molecular" />
									<span>Fully &amp; Customizable</span>
								</a>
								<a className="nav-link" data-toggle="pill" role="tab">
									<i className="icon-testtube2" />
									<span>Easy to use</span>
								</a>
								<a className="nav-link" data-toggle="pill" role="tab">
									<i className="icon-micro" />
									<span>
									Cutting Edge Diagnostics 

									</span>
								</a>
							
								<a className="nav-link" data-toggle="pill" role="tab">
									<i className="icon-testtube" />
									<span>
										Clinical
										<br />
										Support
									</span>
								</a>
								<a className="nav-link" data-toggle="pill" role="tab">
									<i className="icon-chromosome" />
									<span> Precise Reporting</span>
								</a>
								<a className="nav-link" data-toggle="pill" role="tab">
									<i className="icon-dropper" />
									<span>Evidence Based</span>
								</a>
							</div>
						</div>
					</div>

					<div
						className="section bg-norepeat bg-bottom bg-left bg-md-none bg-fixed section-bottom-padding-half section-top-padding"
						style={{ backgroundImage: 'url(images/bg-bottom-left2.png)' }}
					>
						<div className="banner-appointment-form">
							<div className="container">
								<div className="row no-gutters">
									<div className="col-sm-5 col-lg-5 order-2 order-sm-2 mt-3 mt-md-0 text-center">
										<img
											src="images/content/banner-appointment.png"
											alt=""
											className="banner-appointment-form-image"
										/>
									</div>
									<div className="col-sm-7 col-lg-7 order-1 order-sm-1 d-flex">
										<div className="pt-2 pt-lg-6 px-lg-3 text-center">
											<div className="title-wrap-alt">
												<h2
													className="double-title double-title--vcenter double-title--center"
													data-title="Appointment"
												>
													<span>
														Make an <span className="theme-color">Appointment</span>
													</span>
												</h2>
											</div>
											<p>
											
												We believe in providing the best possible care to all our existing
												patients and welcome new patients to sample.
												
											</p>
											<div
												className="contact-form"
												id="contactForm"
												noValidate="novalidate"
											>
												<div className="successform">
													<p>Your message was sent successfully!</p>
												</div>
												<div className="errorform">
													<p>
														Something went wrong, try refreshing and submitting the form
														again.
													</p>
												</div>
												<div>
													<input
														type="text"
														className="form-control"
														name="name"
														placeholder="Your name*"
													/>
												</div>
												<div className="row row-sm-space mt-15">
													<div className="col-sm-6">
														<input
															type="text"
															className="form-control"
															name="phone"
															placeholder="Your Phone"
														/>
													</div>
													<div className="col-sm-6 mt-15 mt-sm-0">
														<input
															type="text"
															className="form-control"
															name="email"
															placeholder="Email*"
														/>
													</div>
												</div>
												<div className="mt-15">
													<textarea
														className="form-control"
														name="message"
														placeholder="Message"
														defaultValue={''}
													/>
												</div>
												<div className="mt-2 mt-lg-4">
													<button type="submit" className="btn">
														<i className="icon-right-arrow" />
														<span>Send request</span>
														<i className="icon-right-arrow" />
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*//section contact*/}
				</div>
				<Footer />
			</div>
		);
	}
}
