import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class About extends Component {
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
          <div className="section mt-0">
            <div className="breadcrumbs-wrap">
              <div className="container">
                <div className="breadcrumbs">
                  <a href="index-2.html">Home</a>
                  <span>About Us</span>
                </div>
              </div>
            </div>
          </div>
          {/*//section*/}
          {/*section*/}
          <div className="section page-content-first">
            <div className="container">
              <div className="text-center mb-2  mb-md-3 mb-lg-4">
            
                <h1>About Us</h1>
                <div className="h-sub theme-color">
                A strategic game plan for treating patients
                </div>
                <div className="h-decor" />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 text-center text-lg-left pr-md-4">
                  <img
                    src="images/content/about-01.jpg"
                    className="w-100"
                    alt=""
                  />
                  <div className="row mt-3">
                    <div className="col-6">
                      <img
                        src="images/content/about-03.jpg"
                        className="w-100"
                        alt=""
                      />
                    </div>
                    <div className="col-6">
                      <img
                        src="images/content/about-04.jpg"
                        className="w-100"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-3 mt-lg-0">
                  <p>
                  Easylabs.org specializes in interpretations of medical laboratories testing, 
                  analytics and support solutions. Our unique approach to health information
                   provides a comprehensive, accurate and meaningful window into the patients’ 
                   health which allows healthcare providers to achieve better clinical outcomes.
                  </p>
                  <p>
                  We are passionate about helping healthcare providers 
                  identify and reverse disease risk in their patients. 
                  Together, through early detection and personalized treatment strategies, 
                  we can help:
                  </p>
                  <ul className="marker-list-md">
                    <li>Improve patient health and wellness</li>
                    <li>Reduce the growing number of disability in adults due to chronic diseases</li>
                    <li>Reduce the growing number of deaths in adults</li>
                
                  </ul>
                  <div className="mt-3 mt-md-7" />
                  <h3>
                    Mission / Vision{" "}
                    <span className="theme-color">Statement</span>
                  </h3>
                  <div className="mt-0 mt-md-4" />
                  <p>
                  Transform the way medicine is practiced through proactive prevention
                  </p>
                  <p>
                  To reverse the epidemic of diabetes, heart disease, 
                  and related chronic conditions by empowering patients 
                  through a more intimate understanding of their health and 
                  providing health practitioners the tools to promote this deeper knowledge
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*//section*/}
          {/*section*/}
         
          <div className="section">
            <div className="container-fluid px-0">
              <div className="row no-gutters">
                <div style={{padding: '120px'}} className="col-xl-12 bg-grey">
                  <div  className=" mx-lg-auto px-15">
                    <div className="title-wrap">
                      <h2 style={{textAlign: 'center', marginBottom:'70px'}} className="h1">
                      What Sets Us  <span className="theme-color">Apart</span>
                      </h2>
                    </div>
                    <div className="mt-lg-5" />
                    <div  className="row">
                      <div className="col-sm-7">
                        <ul className="marker-list-md">
                          <li>Multiple perspectives from multiple medical fields and specializations</li>
                          <li>Precise, detailed, accurate and personalized reporting</li>
                          <li>Lightning-fast turnaround for lab integration and clinics on-boarding</li>
                          <li>Extensive test menu options include routine and advanced tests for nutrition,
                               metabolism, cardiovascular disease, diabetes, autoimmune, inflammation and hormones</li>
                               <li>Our services are easy to implement at your practice</li>
                        </ul>
                      </div>
                      <div className="col-sm-5 mt-1 mt-sm-0">
                        <ul className="marker-list-md">
                        <li>State-of-the art dashboard reporting offering comprehensive results 
                            in an easy-to-read format for both patients and doctors</li>
                        <li>Green, yellow, red dashboard for instant classification and risk assessment</li>
                        <li>Clinical data combined with results to provide comprehensive risk assessments</li>
                        <li>Ongoing innovation to continuously expand and improve testing offered</li>
                    
                        </ul>
                      </div>
                    </div>
                  </div>
    </div> 
                <div
                  
                />
              </div>
            </div>
          </div>
          {/*//section*/}
          {/*section*/}
          <div className="section">
            <div className="container">
              <div className="title-wrap text-center">
                <div className="h-sub theme-color">Easylabs</div>
                <h2 className="h1">Our Core Values</h2>
                <div className="h-decor" />
              </div>
              <div
                className="row js-icn-carousel icn-carousel flex-column flex-sm-row text-center text-sm-left"
                data-slick='{"slidesToShow": 3, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}]}'
              >
                <div className="col-md">
                  <div className="icn-text">
                    <div className="icn-text-simple">
                      <i className="icon-innovation" />
                    </div>
                    <div>
                      <h5 className="icn-text-title">Education</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md">
                  <div className="icn-text">
                    <div className="icn-text-simple">
                      <i className="icon-compassion" />
                    </div>
                    <div>
                      <h5 className="icn-text-title">Passion</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md">
                  <div className="icn-text">
                    <div className="icn-text-simple">
                      <i className="icon-compassion" />
                    </div>
                    <div>
                      <h5 className="icn-text-title">Results Driven</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md">
                  <div className="icn-text">
                    <div className="icn-text-simple">
                      <i className="icon-compassion" />
                    </div>
                    <div>
                      <h5 className="icn-text-title">Empowerment</h5>
                    </div>
                  </div>
                </div>
                
                <div className="col-md">
                  <div className="icn-text">
                    <div className="icn-text-simple">
                      <i className="icon-integrity" />
                    </div>
                    <div>
                      <h5 className="icn-text-title">Simplicity</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*//section*/}
          {/*section*/}
          <div className="section">
            <div className="container-fluid px-0">
              <div
                className="banner-center bg-cover"
                style={{
                  backgroundImage: "url(images/content/banner-center.jpg)",
                }}
              >
                <div className="banner-center-caption text-center">
                  <div className="banner-center-text1">
                    Get your free results interpretations
                  </div>
                  <div className="banner-center-text2">
                    We strive to provide interpretations that are easy to understand
                  </div>
                  <a
                    href="#"
                    className="btn btn-white mt-5"
                    data-toggle="modal"
                    data-target="#modalBookingForm"
                  >
                    <i className="icon-right-arrow" />
                    <span>Start Interpretation</span>
                    <i className="icon-right-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div className="section" style={{marginBottom:'50px'}}>
            <div className="container">
              <div className="title-wrap text-center">
                <h2 className="h1">Our Board</h2>
                <div className="h-sub ">Easylabs.org collaborates with an extensive
                 group of clinicians, scientists and business professionals to provide insight, 
                 direction and expertise to ensure our continued growth as a leader in healthcare management.</div>
                <div className="h-decor" />
              </div>
              <div
                className="row js-icn-carousel icn-carousel flex-column flex-sm-row text-center text-sm-left"
                data-slick='{"slidesToShow": 3, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}]}'
                style={{marginTop:'50px'}}
              >
                <div className="col-md">
                  <div className="icn-text">
                    <div className="icn-text-simple">
                    <img
                        src="images/content/about-07.jpg"
                        className="w-100"
                        alt=""
                      />
                    </div>
                    <div>
                      <h5 className="icn-text-title">Jana Tuhman</h5>
                      <h6 className="icn-text-title">Medical Advisory Director</h6>
                      <p>Jana Tuhman, M.S biochemistry & M.S biophysics. 
                          We are delighted to have Jana join our advisory board. 
                          With her expertise in evidence-based nutrition and lifestyle coaching, 
                          Jana is the ideal resource to provide guidance and a scientific approach to preventative health.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md">
                  <div className="icn-text">
                    <div className="icn-text-simple">
                    <img
                        src="images/content/about-08.png"
                        className="w-100"
                        alt=""
                      />
                    </div>
                    <div>
                    <h5 className="icn-text-title">Dr. Lohr</h5>
                      <h6 className="icn-text-title">Co-Founder & CMO</h6>
                      <p>Yaron Lohr, DC, CFSA, is both a specialist and an innovator in Chiropractic,
                           Alternative Pain Management, Rehabilitation, and Functional Medicine. 
                           As a pioneer in Chiropractic Medicine, he founded Posture Perfect Wellness 
                           Center in 2006 to provide a comprehensive, synergistic approach to care for people
                            in and around Dallas. As a Surgical First Assistant, Dr. Lohr assists Physicians and Surgeons 
                            with cases in the fields of Sports Medicine, Orthopedics, Pain Management, Neurosurgery
                             and Functional Medicine. </p>
                    </div>
                  </div>
                </div>

                <div className="col-md">
                  <div className="icn-text">
                    <div className="icn-text-simple">
                    <img
                        src="images/content/about-09.jpg"
                        className="w-100"
                        alt=""
                      />
                    </div>
                    <div>
                    <h5 className="icn-text-title">Tom Petersil</h5>
                      <h6 className="icn-text-title">Co-Founder and CEO</h6>
                      <p>Tom Petersil has spent over 15 years with IBM and is bringing
                           innovative approach to the idea of streamlining the processes
                            and leveraging simple technologies  to solve complex problems
                             in the Canadian Healthcare market.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*//section*/}
          {/*section*/}
          {/*<div className="section">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="title-wrap">
                    <h2 className="h1">Our Office </h2>
                    <div className="h-decor" />
                  </div>
                  <p>
                    Our dental office in is a state of the art dental facility
                    equipped with the newest technology, capable of handling all
                    of your dental needs. All of our operatories are equipped
                    with intraoral cameras that are able to show us, and you,
                    the precise treatment you might attain on a television
                    screen.
                  </p>
                  <div className="mt-4" />
                  <h3>Amenities</h3>
                  <div className="mt-lg-4" />
                  <ul className="marker-list-md">
                    <li>TV’s in each treatment room</li>
                    <li>Complimentary coffee, Juice</li>
                    <li>Wireless Internet</li>
                    <li>Warm lavender towels</li>
                  </ul>
                </div>
                <div className="col-lg-8 mt-4 mt-lg-0">
                  <div className="slider-gallery">
                    <ul className="slider-gallery-main list-unstyled js-slider-gallery-main">
                      <li>
                        <img
                          src="images/content/slider-gallery-00.jpg"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="images/content/slider-gallery-01.jpg"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="images/content/slider-gallery-02.jpg"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="images/content/slider-gallery-03.jpg"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="images/content/slider-gallery-04.jpg"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="images/content/slider-gallery-05.jpg"
                          alt=""
                        />
                      </li>
                    </ul>
                    <ul className="slider-gallery-thumbs list-unstyled js-slider-gallery-thumbs">
                      <li>
                        <img
                          src="images/content/slider-gallery-00-sm.jpg"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="images/content/slider-gallery-01-sm.jpg"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="images/content/slider-gallery-02-sm.jpg"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="images/content/slider-gallery-03-sm.jpg"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="images/content/slider-gallery-04-sm.jpg"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="images/content/slider-gallery-05-sm.jpg"
                          alt=""
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>*/}
          {/*//section*/}
        </div>

        <Footer />
      </div>
    );
  }
}
