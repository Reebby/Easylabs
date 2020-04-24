import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.cardContent = [
      {
        name: "Specialists' Persective",
        iconName: "icon-testtube2",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores eveniet repudiandae vero veritatis soluta natus nemo itaque vitae dolore quidem totam inventore sunt, sed exercitationem labore provident, rerum culpa?.
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores eveniet repudiandae vero veritatis soluta natus nemo itaque vitae dolore quidem totam inventore sunt, sed exercitationem labore provident, rerum culpa?.`,
      },
      { name: "Educational Reports", iconName: "icon-micro", text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores eveniet repudiandae vero veritatis soluta natus nemo itaque vitae dolore quidem totam inventore sunt, sed exercitationem labore provident, rerum culpa?.
	  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores eveniet repudiandae vero veritatis soluta natus nemo itaque vitae dolore quidem totam inventore sunt, sed exercitationem labore provident, rerum culpa?.` },
      {
        name: "Fully & Customizable",
        iconName: "icon-molecular",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores eveniet repudiandae vero veritatis soluta natus nemo itaque vitae dolore quidem totam inventore sunt, sed exercitationem labore provident, rerum culpa?.
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores eveniet repudiandae vero veritatis soluta natus nemo itaque vitae dolore quidem totam inventore sunt, sed exercitationem labore provident, rerum culpa?.`,
      },
      { name: "Evidence Based", iconName: "icon-dropper", text: "evidence" },
      {
        name: "Precise Reporting",
        iconName: "icon-chromosome",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores eveniet repudiandae vero veritatis soluta natus nemo itaque vitae dolore quidem totam inventore sunt, sed exercitationem labore provident, rerum culpa?.
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores eveniet repudiandae vero veritatis soluta natus nemo itaque vitae dolore quidem totam inventore sunt, sed exercitationem labore provident, rerum culpa?.`,
      },
      {
        name: "Simple & Easy To Use",
        iconName: "icon-testtube",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores eveniet repudiandae vero veritatis soluta natus nemo itaque vitae dolore quidem totam inventore sunt, sed exercitationem labore provident, rerum culpa?.
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores eveniet repudiandae vero veritatis soluta natus nemo itaque vitae dolore quidem totam inventore sunt, sed exercitationem labore provident, rerum culpa?.`,
      },
    ];
//  onClick={this.handleScroll}
this.myRef = React.createRef()  
    this.state = {
      mobile_menu: false,
      loading: false,
      redirectToPhone: false,
      home: "active",
      showcard: false,
	  cardNumber: null,
	  
    };
  }

  handleMobileMenu = () => {
    this.setState((prevState) => ({ mobile_menu: !prevState.mobile_menu }));
  };

  handleScroll = () => {
	window.scrollTo(0, this.myRef.current.offsetTop)
}

  render() {
    return (
      <div>
        <Header />
        {/*//header*/}
        <div className="page-content">
          {/*section slider*/}
          <div
            style={{
              backgroundImage: 'url("images/content/slider/slide-02.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="section mt-0"
          >
            <div className="quickLinks-wrap js-quickLinks-wrap-d d-none d-lg-flex">
              <div className="sticky-wrapper">
                <div className="quickLinks js-quickLinks closed">
                  <div className="container">
                    <div className="row no-gutters">
                      <div className="col">
                        <Link to="/interpretations_menu" className="link">
                          <i className="icon-price-tag" />
                          <span> Interpretations Menu</span>
                        </Link>
                      </div>
                      <div className="col col-close">
                        <a href="#" className="js-quickLinks-close">
                          <i
                            className="icon-top"
                            data-toggle="tooltip"
                            data-placement="top"
                            title
                            data-original-title="Close panel"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="quickLinks-open js-quickLinks-open">
                    <span
                      data-toggle="tooltip"
                      data-placement="left"
                      title
                      data-original-title="Open panel"
                    >
                      +
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div id="mainSliderWrapper">
              <div className="loading-content disable">
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
                className="main-slider mb-0 arrows-white arrows-bottom slick-initialized slick-slider"
                id="mainSlider"
                data-slick='{"arrows": false, "dots": true}'
              >
                <div
                  aria-live="polite"
                  className="slick-list draggable"
                  tabIndex={0}
                >
                  <div className="slick-track">
                    <div
                      className=""
                      data-slick-index={0}
                      aria-hidden="false"
                      style={{
                        width: "1344px",
                        position: "relative",
                        left: "0px",
                        top: "0px",
                        zIndex: 900,
                        opacity: 1,
                      }}
                    >
                      <div
                        className="img--holder"
                        data-bg="images/content/slider/slide-02.jpg"
                      />
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
                              />
                              <div className="slide-btn">
                                <a
                                  style={{
                                    backgroundColor: "#8bcbff",
                                    color: "white",
                                  }}
								
								 href="https://easylabs.org/patient/report/"
                                  target="_blank"
                                  className="btn link-inside"
                                  data-animation="fadeInUp"
                                  data-animation-delay="2s"
                                >
                                  <i className="icon-right-arrow" />
                                  <span>
                                    Get your free results interpretations
                                  </span>
                                  <i className="icon-right-arrow" />
                                </a><br /> <br />
								<div  onClick={this.handleScroll}  className="scroll-btn">
								<a ><span></span><span></span><span></span> <p className="scroll-text">Watch Video</p></a>
								</div>
								
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
					  
                    </div>
                    {/* <div
											className="slide slick-slide"
											data-slick-index={1}
											aria-hidden="true"
											style={{
												width: '1344px',
												position: 'relative',
												left: '-1344px',
												top: '0px',
												zIndex: 800,
												opacity: 0,
											}}
										>
											<div
												className="img--holder"
												data-bg="images/content/slider/slide-01.jpg"
												style={{ backgroundImage: 'url("images/content/slider/slide-01.jpg")' }}
											/>
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
															/>
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
										</div> */}
                  </div>
				
                </div>

                <ul className="slick-dots" style={{}}>
                  <li className="slick-active" aria-hidden="false">
                    <button type="button" data-role="none">
                      1
                    </button>
                  </li>
                  <li aria-hidden="true" className>
                    <button type="button" data-role="none">
                      2
                    </button>
                  </li>
                </ul>
              </div>
            </div>
	
          </div>

          <div ref={this.myRef} className="video-container">
            <video width="400" controls poster="/easylabs_doodle_video_1.gif">
              <source src="Easylabs doodle video.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>

          {/*//section slider*/}
          {/*section departments*/}
          <div
            className="section bg-bottom bg-right bg-norepeat bg-md-none bg-fixed section-bottom-padding section-top-padding"
            style={{ backgroundImage: "url(images/bg-bottom-right.png)" }}
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
                      <div className="department-tab2-text">
                        Quality Service
                      </div>
                      <div className="department-tab2-decor" />
                    </div>
                    <div className="department-tab2">
                      <div className="department-tab2-number">3</div>
                      <div className="department-tab2-text">Skilled Team</div>
                      <div className="department-tab2-decor" />
                    </div>
                    <div className="department-tab2">
                      <div className="department-tab2-number">4</div>
                      <div className="department-tab2-text">
                        Positive Reviews
                      </div>
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
                        Easylabs was developed by doctors for doctors from the
                        most current and relevant clinical evidence about health
                        coupled with advanced laboratory biomarker data. We help
                        laboratories transform conventional and innovative
                        biomarkers into actionable reports that can be
                        effectively implemented in busy medical practices. We
                        empower healthcare providers with smart information that
                        uncovers hidden risk and provides insight into the root
                        cause of conditions and symptoms in order to optimize
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
              <div className="row"></div>

              <div className="nav nav-pills-icons" role="tablist">
                {this.cardContent.map((data, i) => {
                  return (
                    <a
                      onMouseEnter={() =>
                        this.setState({ showcard: true, cardNumber: i })
                      }
                      onMouseLeave={() =>
                        this.setState({ showcard: false, cardNumber: null })
                      }
                      className="nav-link"
                      data-toggle="pill"
                      role="tab"
                    >
                      <i className={data.iconName} />
                      <span>{data.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
            <div>
              {
				  this.state.showcard
				  ?
				  <div style={{padding: '100px'}}>
                <p style={{ textAlign: "center" }}>
                   {this.cardContent[this.state.cardNumber].text}
                </p>
				</div>
				: ""
              }
            </div>
          </div>

          <div
            className="section bg-norepeat bg-bottom bg-left bg-md-none bg-fixed section-bottom-padding-half section-top-padding"
            style={{ backgroundImage: "url(images/bg-bottom-left2.png)" }}
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
                            Make an{" "}
                            <span className="theme-color">Appointment</span>
                          </span>
                        </h2>
                      </div>
                      <p>
                        We believe in providing the best possible care to all
                        our existing patients and welcome new patients to
                        sample.
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
                            Something went wrong, try refreshing and submitting
                            the form again.
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
                            defaultValue={""}
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
