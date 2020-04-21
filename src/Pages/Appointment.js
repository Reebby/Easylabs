import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile_menu: false,
      loading: false,
      redirectToPhone: false,
      home: "active",
      showcart: "",
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
    this.setState((prevState) => ({ mobile_menu: !prevState.mobile_menu }));
  };

  handleOpenMobileCart = () => {
    this.setState({
      mobile_menu: false,
      showcart: "active",
      show: false,
      showText: "",
      cartItems: [],
    });
  };

  handleOpenCart = () => {
    this.setState({
      showcart: "active",
      show: false,
      showText: "",
      cartItems: [],
    });
  };

  handleCloseCart = () => {
    this.setState({ showcart: "" });
  };
  render() {
    return (
      <div>
        <Header />
        <div className="page-content"> 
        <div
						className="section bg-norepeat bg-bottom bg-left bg-md-none bg-fixed section-bottom-padding-half "
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

        </div>

        <Footer />
      </div>
    );
  }
}
