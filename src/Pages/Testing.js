import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TestContent1 from '../components/TestContent1';
import TestContent2 from '../components/TestContent2';
import TestContent3 from '../components/TestContent3';
import TestContent4 from '../components/TestContent4';

export default class Patients extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mobile_menu: false,
			loading: false,
			redirectToPhone: false,
			home: 'active',
			test_content1: true,
			test_content2: false,
			test_content3: false,
			test_content4: false,
		};
	}




	handleMobileMenu = () => {
		this.setState(prevState => ({ mobile_menu: !prevState.mobile_menu }));
	};

	
  
  handleGoToTestContent1 =() => {
    this.setState({
      test_content1: true,
      test_content2: false,
      test_content3: false,
      test_content4: false
    })
  }

  handleGoToTestContent2 =() => {
    this.setState({
      test_content1: false,
      test_content2: true,
      test_content3: false,
      test_content4: false
    })
  }

  handleGoToTestContent3 =() => {
    this.setState({
      test_content1: false,
      test_content2: false,
      test_content3: true,
      test_content4: false
    })
  }

  handleGoToTestContent4 =() => {
    this.setState({
      test_content1: false,
      test_content2: false,
      test_content3: false,
      test_content4: true
    })
  }

	render() {
		const { test_content1, test_content2, test_content3, test_content4 } = this.state;
		return (
			<div>
				<Header />
				<div className="page-content">
					<div className="section page-content-first">
						<div className="container mt-6">
							<div className="row">
								<div className="col-md">
									<ul className="services-nav flex-column flex-nowrap">
										<li className="nav-item">
											<a
												className="nav-link"
												href="#submenu1"
												data-toggle="collapse"
												data-target="#submenu1"
											>
												Who should be tested
											</a>
											<div className="collapse show" id="submenu1">
												<ul className="flex-column nav">
													<li className="nav-item">
														<a
															className={test_content1 ? 'nav-link active' : 'nav-link'}
														onClick={this.handleGoToTestContent1}
														>
															Anyone with Established NCEP ATP III risk factors
														</a>
													</li>
													<li className="nav-item">
														<a
															className={test_content2 ? 'nav-link active' : 'nav-link'}
                              onClick={this.handleGoToTestContent2}
														>
															All chronic conditions
														</a>
													</li>
												
												</ul>
											</div>
										</li>
									</ul>
                  <ul className="services-nav flex-column flex-nowrap">
										<li className="nav-item">
											<a
												className="nav-link"
												href="#submenu1"
												data-toggle="collapse"
												data-target="#submenu2"
											>
												Metabolic Syndrome
											</a>
											<div className="collapse show" id="submenu2">
												<ul className="flex-column nav">
											
													<li className="nav-item">
														<a
															className={test_content3 ? 'nav-link active' : 'nav-link'}
                              onClick={this.handleGoToTestContent3}
														>
															Metabolic Syndrome
														</a>
													</li>
												
												</ul>
											</div>
										</li>
									</ul>
                  <ul className="services-nav flex-column flex-nowrap">
										<li className="nav-item">
											<a
												className="nav-link"
												href="#submenu1"
												data-toggle="collapse"
												data-target="#submenu3"
											>
											NCEP Guidelines
											</a>
											<div className="collapse show" id="submenu3">
												<ul className="flex-column nav">
												
													<li className="nav-item">
														<a
															className={test_content4 ? 'nav-link active' : 'nav-link'}
                              onClick={this.handleGoToTestContent4}
														>
															NCEP Guidelines
														</a>
													</li>
												</ul>
											</div>
										</li>
									</ul>
									{/* <div className="row d-flex flex-column flex-sm-row flex-md-column mt-3">
										<div className="col-auto col-sm col-md-auto">
											<div className="contact-box contact-box-1">
												<h5 className="contact-box-title">Working Time</h5>
												<ul className="icn-list">
													<li>
														<i className="icon-clock" />
														Mon-Thu 08:00 - 20:00
														<br />
														Friday 07:00 - 22:00
														<br />
														Saturday 08:00 - 18:00
													</li>
												</ul>
											</div>
										</div>
										<div className="col-auto col-sm col-md-auto">
											<div className="contact-box contact-box-2">
												<h5 className="contact-box-title">Contact Info</h5>
												<ul className="icn-list">
													<li>
														<i className="icon-telephone" />
														<div className="d-flex flex-wrap">
															<span>Phone:&nbsp;&nbsp;</span>
															<span>
																1-800-267-0000
																<br />
																1-800-267-0001
															</span>
														</div>
													</li>
													<li>
														<i className="icon-black-envelope" />
														<a href="mailto:info@dentco.net">info@meditserv.com</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="question-box mt-3">
										<h5 className="question-box-title">Ask the Experts</h5>
										<form id="questionForm" method="post" noValidate>
											<div className="successform">
												<p>Your message was sent successfully!</p>
											</div>
											<div className="errorform">
												<p>
													Something went wrong, try refreshing and submitting the form again.
												</p>
											</div>
											<input
												type="text"
												className="form-control"
												name="name"
												placeholder="Your name*"
											/>
											<input
												type="text"
												className="form-control"
												name="email"
												placeholder="E-mail*"
											/>
											<input
												type="text"
												className="form-control"
												name="phone"
												placeholder="Phone"
											/>
											<textarea
												className="form-control"
												name="message"
												placeholder="Question*"
												defaultValue={''}
											/>
											<button type="submit" className="btn btn-sm btn-hover-fill mt-15">
												<i className="icon-right-arrow" />
												<span>Ask Now</span>
												<i className="icon-right-arrow" />
											</button>
										</form>
									</div> */}
								</div>
								<div className="col-md-8 col-lg-9 mt-4 mt-md-0 ">
									{test_content1 ? (
										<TestContent1 />
									) : test_content2 ? (
										<TestContent2 />
									) : test_content3 ? (
										<TestContent3 />
									) : test_content4 ? (
										<TestContent4 />
									) : (
										''
									)}
								</div>
							</div>
						</div>
					</div>
					{/*//section*/}
				</div>

				<Footer />
			</div>
		);
	}
}
