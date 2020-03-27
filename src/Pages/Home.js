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
				<div className="settings-panel">
					{' '}
					<div className="settings-panel-buy-now">
						{' '}
						<a
							href="https://themeforest.net/item/medin-medical-clinic-html-template/22564438?s_rank=1"
							target="_blank"
							className="settings-panel-btn btn-primary"
						>
							{' '}
							<img src="color/icon-cart.png" alt="" /> Purchase Now{' '}
						</a>{' '}
					</div>{' '}
					<div className="settings-panel-colorswatch js-settings-panel-item">
						{' '}
						<div className="settings-panel-btn btn-primary js-settings-panel-btn">
							{' '}
							<img src="color/icon-settings.png" alt="" />{' '}
						</div>{' '}
						<div className="settings-panel-inside">
							{' '}
							<a href="#" className="colorswatch1 active js-swatch-color" />{' '}
							<a href="#" className="colorswatch2 js-swatch-color" data-color={1} />{' '}
							<a href="#" className="colorswatch3 js-swatch-color" data-color={2} />{' '}
							<a href="#" className="colorswatch4 js-swatch-color" data-color={3} />{' '}
							<a href="#" className="colorswatch5 js-swatch-color" data-color={4} />{' '}
							<a href="#" className="colorswatch6 js-swatch-color" data-color={5} />{' '}
							<div className="clearfix" /> <div className="title">Color</div>{' '}
						</div>{' '}
					</div>{' '}
					<div className="settings-panel-layout js-settings-panel-item">
						{' '}
						<div className="settings-panel-btn btn-primary js-settings-panel-btn">
							{' '}
							<img src="color/icon-layout.png" alt="" />{' '}
						</div>{' '}
						<div className="settings-panel-inside">
							{' '}
							<a href="http://websmirno.site/medin/html/dentco-html/">
								<img src="color/screen-layout-1.png" alt="" />
							</a>{' '}
							<a href="http://websmirno.site/medin/html/surgery-html/">
								<img src="color/screen-layout-2.png" alt="" />
							</a>{' '}
							<a href="http://websmirno.site/medin/html/medol-html/">
								<img src="color/screen-layout-3.png" alt="" />
							</a>{' '}
							<a href="http://websmirno.site/medin/html/medera-html/">
								<img src="color/screen-layout-4.png" alt="" />
							</a>{' '}
							<a href="http://websmirno.site/medin/html/medeye-html/">
								<img src="color/screen-layout-5.png" alt="" />
							</a>{' '}
							<a href="index.html" className="active">
								<img src="color/screen-layout-6.png" alt="" />
							</a>{' '}
						</div>{' '}
					</div>
				</div>
				{/*header*/}
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
												<i className="icon-placeholder" />
												<span>Location</span>
											</a>
											<div className="link-drop p-0">
												<div className="google-map">
													<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40119.804311386426!2d-97.32055794896301!3d37.64364017354126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87bae4ec254beb5f%3A0x410df48edd2f5ede!2sGraceMed%20Jardine%20Family%20Clinic!5e0!3m2!1sen!2sua!4v1579853082410!5m2!1sen!2sua" />
												</div>
											</div>
										</div>
										<div className="col">
											<a href="#" className="link">
												<i className="icon-clock" />
												<span>Working Time</span>
											</a>
											<div className="link-drop">
												<h5 className="link-drop-title">
													<i className="icon-clock" />
													Working Time
												</h5>
												<table className="row-table">
													<tbody>
														<tr>
															<td>
																<i>Mon-Thu</i>
															</td>
															<td>08:00 - 20:00</td>
														</tr>
														<tr>
															<td>
																<i>Friday</i>
															</td>
															<td> 07:00 - 22:00</td>
														</tr>
														<tr>
															<td>
																<i>Saturday</i>
															</td>
															<td>08:00 - 18:00</td>
														</tr>
														<tr>
															<td>
																<i>Sunday</i>
															</td>
															<td>Closed</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										<div className="col">
											<a href="#" className="link">
												<i className="icon-pencil-writing" />
												<span>Request Form</span>
											</a>
											<div className="link-drop">
												<h5 className="link-drop-title">
													<i className="icon-pencil-writing" />
													Request Form
												</h5>
												<form id="requestForm" method="post" noValidate>
													<div className="successform">
														<p>Your message was sent successfully!</p>
													</div>
													<div className="errorform">
														<p>
															Something went wrong, try refreshing and submitting the form
															again.
														</p>
													</div>
													<div className="input-group">
														<span>
															<i className="icon-user" />
														</span>
														<input
															name="requestname"
															type="text"
															className="form-control"
															placeholder="Your Name"
														/>
													</div>
													<div className="row row-sm-space mt-1">
														<div className="col">
															<div className="input-group">
																<span>
																	<i className="icon-email2" />
																</span>
																<input
																	name="requestemail"
																	type="text"
																	className="form-control"
																	placeholder="Your Email"
																/>
															</div>
														</div>
														<div className="col">
															<div className="input-group">
																<span>
																	<i className="icon-smartphone" />
																</span>
																<input
																	name="requestphone"
																	type="text"
																	className="form-control"
																	placeholder="Your Phone"
																/>
															</div>
														</div>
													</div>
													<div className="selectWrapper input-group mt-1">
														<span>
															<i className="icon-micro" />
														</span>
														<select name="requestservice" className="form-control">
															<option selected="selected" disabled="disabled">
																Select Service
															</option>
															<option value="Molecular Testing & Oncology">
																Molecular Testing &amp; Oncology
															</option>
															<option value="Histology">Histology</option>
															<option value="General Diagnostic Tests">
																General Diagnostic Tests
															</option>
															<option value="Naturopathic">Naturopathic</option>
															<option value="Genetics Tests">Genetics Tests</option>
															<option value="Cytology">Cytology</option>
														</select>
													</div>
													<div className="row row-sm-space mt-1">
														<div className="col-sm-6">
															<div className="input-group flex-nowrap">
																<span>
																	<i className="icon-calendar2" />
																</span>
																<div className="datepicker-wrap">
																	<input
																		name="requestdate"
																		type="text"
																		className="form-control datetimepicker"
																		placeholder="Date"
																		readOnly
																	/>
																</div>
															</div>
														</div>
														<div className="col-sm-6 mt-1 mt-sm-0">
															<div className="input-group flex-nowrap">
																<span>
																	<i className="icon-clock" />
																</span>
																<div className="datepicker-wrap">
																	<input
																		name="requesttime"
																		type="text"
																		className="form-control timepicker"
																		placeholder="Time"
																		readOnly
																	/>
																</div>
															</div>
														</div>
													</div>
													<div className="text-right mt-2">
														<button type="submit" className="btn btn-sm btn-hover-fill">
															Request
														</button>
													</div>
												</form>
											</div>
										</div>
										<div className="col">
											<a href="#" className="link">
												<i className="icon-calendar" />
												<span>Doctors Timetable</span>
											</a>
											<div className="link-drop">
												<h5 className="link-drop-title">
													<i className="icon-calendar" />
													Doctors Timetable
												</h5>
												<p>
													This simply works as a guide and helps you to connect with dentists
													of your choice. Please confirm the doctor’s availability before
													leaving your premises.
												</p>
												<p className="text-right">
													<a
														href="#specialistsSection"
														className="btn btn-sm btn-hover-fill link-inside"
													>
														Details
													</a>
												</p>
											</div>
										</div>
										<div className="col">
											<a href="#" className="link">
												<i className="icon-price-tag" />
												<span>Calculator</span>
											</a>
											<div className="link-drop">
												<h5 className="link-drop-title">
													<i className="icon-price-tag" />
													Quick Pricing
												</h5>
												<table className="row-table">
													<tbody>
														<tr>
															<td>Initial Consultation</td>
															<td>$10</td>
														</tr>
														<tr>
															<td>Dental check-up</td>
															<td>$15</td>
														</tr>
														<tr>
															<td>Routine Exam (no xrays)</td>
															<td>$50</td>
														</tr>
														<tr>
															<td>Simple Removal of a tooth</td>
															<td>$122</td>
														</tr>
														<tr>
															<td>Teeth cleaning</td>
															<td>$50 - $75</td>
														</tr>
														<tr>
															<td>X-ray image</td>
															<td>$10</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										<div className="col">
											<a href="#" className="link">
												<i className="icon-emergency-call" />
												<span>Emergency Case</span>
											</a>
											<div className="link-drop">
												<h5 className="link-drop-title">
													<i className="icon-emergency-call" />
													Emergency Case
												</h5>
												<p>
													Emergency dental care may be needed if you have had a blow to the
													face, lost a filling, or cracked a tooth.{' '}
												</p>
												<ul className="icn-list">
													<li>
														<i className="icon-telephone" />
														<span className="phone">
															1-800-267-0000
															<br />
															1-800-267-0001
														</span>
													</li>
													<li>
														<i className="icon-black-envelope" />
														<a href="mailto:info@besthotel-email.com">
															info@besthotel-email.com
														</a>
													</li>
												</ul>
												<p className="text-right mt-2">
													<a
														href="#contactForm"
														className="btn btn-sm btn-hover-fill link-inside"
													>
														Our Contacts
													</a>
												</p>
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
											<div className="department-tab2-text">Latest Equipment</div>
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
											<Link
												to="/"
												className="btn mt-3"
												data-toggle="modal"
												// data-target="#modalBookingForm"
											>
												<i className="icon-right-arrow" />
												<span>Get your free results interpretations</span>
												<i className="icon-right-arrow" />
											</Link>
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
									<span>Molecular Testing &amp; Oncology</span>
								</a>
								<a className="nav-link" data-toggle="pill" role="tab">
									<i className="icon-testtube2" />
									<span>Histology</span>
								</a>
								<a className="nav-link" data-toggle="pill" role="tab">
									<i className="icon-micro" />
									<span>
									Cutting Edge Diagnostics 
										<br />
										from Multiple Perspectives
									</span>
								</a>
							
							</div>
							<div className="nav nav-pills-icons" role="tablist">
								
								<a className="nav-link" data-toggle="pill" role="tab">
									<i className="icon-testtube" />
									<span>
										Naturopathic
										<br />
										Tests
									</span>
								</a>
								<a className="nav-link" data-toggle="pill" role="tab">
									<i className="icon-chromosome" />
									<span>Genetics Tests</span>
								</a>
								<a className="nav-link" data-toggle="pill" role="tab">
									<i className="icon-dropper" />
									<span>Cytology</span>
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
