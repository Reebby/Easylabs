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
			<div>
				<div className="footer mt-0">
					<div className="container">
						<div className="row py-1 py-md-2 px-lg-0">
							<div className="col-lg-4 footer-col1 pt-lg-3">
								<div className="row flex-column flex-md-row flex-lg-column">
									<div className="col-md col-lg-auto">
										<div className="footer-logo">
											<img src="images/footer-logo.png" alt="" className="img-fluid" />
										</div>
										<div className="mt-2 mt-lg-0" />
										<div className="footer-social d-none d-md-block d-lg-none">
											<a href="https://www.facebook.com/" target="blank" className="hovicon">
												<i className="icon-facebook-logo" />
											</a>
											<a href="https://www.twitter.com/" target="blank" className="hovicon">
												<i className="icon-twitter-logo" />
											</a>
											<a href="https://plus.google.com/" target="blank" className="hovicon">
												<i className="icon-google-logo" />
											</a>
											<a href="https://www.instagram.com/" target="blank" className="hovicon">
												<i className="icon-instagram" />
											</a>
										</div>
									</div>
									<div className="col-md">
										<div className="footer-text mt-1 mt-lg-1">
											<p>
												To receive email releases, simply provide
												<br />
												us with your email below
											</p>
											<form action="#" className="footer-subscribe">
												<div className="input-group">
													<input
														name="subscribe_mail"
														type="text"
														className="form-control"
														placeholder="Your Email"
													/>
													<span>
														<i className="icon-black-envelope" />
													</span>
												</div>
											</form>
										</div>
										<div className="footer-social d-md-none d-lg-block">
											<a href="https://www.facebook.com/" target="blank" className="hovicon">
												<i className="icon-facebook-logo" />
											</a>
											<a href="https://www.twitter.com/" target="blank" className="hovicon">
												<i className="icon-twitter-logo" />
											</a>
											<a href="https://plus.google.com/" target="blank" className="hovicon">
												<i className="icon-google-logo" />
											</a>
											<a href="https://www.instagram.com/" target="blank" className="hovicon">
												<i className="icon-instagram" />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-4">
								<h3>Blog Posts</h3>
								<div className="h-decor" />
								<div className="footer-post d-flex">
									<div className="footer-post-photo">
										<img
											src="images/content/footer-post-author-01.jpg"
											alt=""
											className="img-fluid"
										/>
									</div>
									<div className="footer-post-text">
										<div className="footer-post-title">
											<a href="#">The doctor’s guide to healthy break...</a>
										</div>
										<p>September 26, 2018</p>
									</div>
								</div>
								<div className="footer-post d-flex">
									<div className="footer-post-photo">
										<img
											src="images/content/footer-post-author-03.jpg"
											alt=""
											className="img-fluid"
										/>
									</div>
									<div className="footer-post-text">
										<div className="footer-post-title">
											<a href="#">So, how much sex is normal?</a>
										</div>
										<p>August 22, 2018</p>
									</div>
								</div>
								<div className="footer-post d-flex">
									<div className="footer-post-photo">
										<img
											src="images/content/footer-post-author-02.jpg"
											alt=""
											className="img-fluid"
										/>
									</div>
									<div className="footer-post-text">
										<div className="footer-post-title">
											<a href="#">Tooth Fairy Traditions...</a>
										</div>
										<p>July 25, 2018</p>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-4">
								<h3>Our Contacts</h3>
								<div className="h-decor" />
								<ul className="icn-list">
									<li>
										<i className="icon-placeholder2" />
										1560 Holden Street San Diego, CA 92139
										<br />
										<a href="#" className="btn btn-xs btn-gradient">
											<i className="icon-placeholder2" />
											<span>Get directions on the map</span>
											<i className="icon-right-arrow" />
										</a>
									</li>
									<li>
										<i className="icon-telephone" />
										<b>
											<span className="phone">
												<span className="text-nowrap">1-800-267-0000</span>,{' '}
												<span className="text-nowrap">1-800-267-0001</span>
											</span>
										</b>
										<br />
										(24/7 General inquiry)
									</li>
									<li>
										<i className="icon-black-envelope" />
										<a href="mailto:info@dentco.net">info@dentco.net</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="footer-bottom">
						<div className="container">
							<div className="row text-center text-md-left">
								<div className="col-sm">
									Copyright © 2020 <a href="#">Medlab</a>
									<span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
									<a href="#">Privacy Policy</a>
								</div>
								<div className="col-sm-auto ml-auto">
									<span className="d-none d-sm-inline">For emergency cases&nbsp;&nbsp;&nbsp;</span>
									<i className="icon-telephone" />
									&nbsp;&nbsp;<b>1-800-267-0000</b>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*//footer*/}
				<div className="backToTop js-backToTop">
					<i className="icon icon-up-arrow" />
				</div>
				<div className="modal modal-form modal-form-sm fade" id="modalQuestionForm">
					<div className="modal-dialog">
						<div className="modal-content">
							<button aria-label="Close" className="close" data-dismiss="modal">
								<i className="icon-error" />
							</button>
							<div className="modal-body">
								<div className="modal-form">
									<h3>Ask a Question</h3>
									<form className="mt-15" id="questionForm" method="post" noValidate>
										<div className="successform">
											<p>Your message was sent successfully!</p>
										</div>
										<div className="errorform">
											<p>Something went wrong, try refreshing and submitting the form again.</p>
										</div>
										<div className="input-group">
											<span>
												<i className="icon-user" />
											</span>
											<input
												type="text"
												name="name"
												className="form-control"
												autoComplete="off"
												placeholder="Your Name*"
											/>
										</div>
										<div className="input-group">
											<span>
												<i className="icon-email2" />
											</span>
											<input
												type="text"
												name="email"
												className="form-control"
												autoComplete="off"
												placeholder="Your Email*"
											/>
										</div>
										<div className="input-group">
											<span>
												<i className="icon-smartphone" />
											</span>
											<input
												type="text"
												name="phone"
												className="form-control"
												autoComplete="off"
												placeholder="Your Phone"
											/>
										</div>
										<textarea
											name="message"
											className="form-control"
											placeholder="Your comment*"
											defaultValue={''}
										/>
										<div className="text-right mt-2">
											<button type="submit" className="btn btn-sm btn-hover-fill">
												Ask Now
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="modal modal-form fade" id="modalBookingForm">
					<div className="modal-dialog">
						<div className="modal-content">
							<button aria-label="Close" className="close" data-dismiss="modal">
								<i className="icon-error" />
							</button>
							<div className="modal-body">
								<div className="modal-form">
									<h3>Book an Appointment</h3>
									<form className="mt-15" id="bookingForm" method="post" noValidate>
										<div className="successform">
											<p>Your message was sent successfully!</p>
										</div>
										<div className="errorform">
											<p>Something went wrong, try refreshing and submitting the form again.</p>
										</div>
										<div className="input-group">
											<span>
												<i className="icon-user" />
											</span>
											<input
												type="text"
												name="bookingname"
												className="form-control"
												autoComplete="off"
												placeholder="Your Name*"
											/>
										</div>
										<div className="row row-xs-space mt-1">
											<div className="col-sm-6">
												<div className="input-group">
													<span>
														<i className="icon-email2" />
													</span>
													<input
														type="text"
														name="bookingemail"
														className="form-control"
														autoComplete="off"
														placeholder="Your Email*"
													/>
												</div>
											</div>
											<div className="col-sm-6 mt-1 mt-sm-0">
												<div className="input-group">
													<span>
														<i className="icon-smartphone" />
													</span>
													<input
														type="text"
														name="bookingphone"
														className="form-control"
														autoComplete="off"
														placeholder="Your Phone"
													/>
												</div>
											</div>
										</div>
										<div className="row row-xs-space mt-1">
											<div className="col-sm-6">
												<div className="input-group">
													<span>
														<i className="icon-birthday" />
													</span>
													<input
														type="text"
														name="bookingage"
														className="form-control"
														autoComplete="off"
														placeholder="Your age"
													/>
												</div>
											</div>
										</div>
										<div className="selectWrapper input-group mt-1">
											<span>
												<i className="icon-micro" />
											</span>
											<select name="bookingservice" className="form-control">
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
										<div className="input-group flex-nowrap mt-1">
											<span>
												<i className="icon-calendar2" />
											</span>
											<div className="datepicker-wrap">
												<input
													name="bookingdate"
													type="text"
													className="form-control datetimepicker"
													placeholder="Date"
													readOnly
												/>
											</div>
										</div>
										<div className="input-group flex-nowrap mt-1">
											<span>
												<i className="icon-clock" />
											</span>
											<div className="datepicker-wrap">
												<input
													name="bookingtime"
													type="text"
													className="form-control timepicker"
													placeholder="Time"
												/>
											</div>
										</div>
										<textarea
											name="bookingmessage"
											className="form-control"
											placeholder="Your comment"
											defaultValue={''}
										/>
										<div className="text-right mt-2">
											<button type="submit" className="btn btn-sm btn-hover-fill">
												Book now
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
