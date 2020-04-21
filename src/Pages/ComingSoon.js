import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class ComingSoon extends Component {
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
		this.setState({
			mobile_menu: false,
			showcart: 'active',
			show: false,
			showText: '',
			cartItems: [],
		});
	};

	handleOpenCart = () => {
		this.setState({
			showcart: 'active',
			show: false,
			showText: '',
			cartItems: [],
		});
	};

	handleCloseCart = () => {
		this.setState({ showcart: '' });
	};
	render() {
		return (
			<div>
				<Header />
				<div className="page-content">
					<div className="section bg-grey  mt-md-0">
						<div className="container">
							<div className="title-wrap text-center">
								<h2
									className="h1 double-title double-title--white double-title--center double-title--vcenter"
									data-title=" Coming Soon"
								>
									<span>
										Coming Soon
										<span className="clearfix d-sm-none" />
									</span>
								</h2>
								<div className="h-decor" />
							</div>

							<div id="tab-content" className="tab-content mt-2 mt-sm-4">
								<div id="tab-A" className="tab-pane fade show active" role="tabpanel">
									<div className="tab-bg">
										<img src="images/content/bg-map.png" alt="" />
									</div>
									<div className="row">
										<div className="col-md-6 h-100 mb-2 mb-md-0">
											<img src="images/content/index-img-02.jpg" alt="" className="img-fluid" />
										</div>
										<div className="col-md-6">
											<div className="pt-xl-1">
												<h6>
													Thank you for visiting Easylabs.org,
													<br />
													<br /> we are committed to providing free and near-free health
													<br />
													<br /> insights, promoting health awareness and preventative
                                                    <br /> <br /> 
													medicine.{' '}
												</h6>
												<p>
													Advanced specialized interpretations coming soon! For now, enjoy our
													free sample interpretation and email us to be notified once
													specialized options are published and we will provide you with one
													free access.
												</p>
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
					</div>
				</div>

				<Footer />
			</div>
		);
	}
}
