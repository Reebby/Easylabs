import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Doctors extends Component {
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
          
          {/*//section*/}
          <div className="section mt-3">
  <div className="container-fluid px-0">
    <div className="row no-gutters">
      <div className="col-xl-6 bg-grey">
        <div className="max-670 mx-lg-auto px-15">
          <div className="title-wrap">
            <h2 className="h1">MDs, NDs and everyone <span className="theme-color">in between</span></h2>
          </div>
          <div className="mt-lg-5" />
          <div className="row " >
            <div className="col-sm-10">
            <div className="h-sub ">How we assist doctors</div>
              <ul className="marker-list-md">
              <li>Validate and supplement your knowledge</li>
                <li>Alternative interpretations from reputable sources</li>
                <li>Easy on-boarding of new staff to your clinic </li>
               
                
              </ul>
            </div>
           
          </div>
        </div>
      </div>
      <div className="col-xl-6 banner-left bg-full" style={{backgroundImage: 'url(images/content/banner-right-1.jpg)'}} />
    </div>
  </div>
</div>

          {/*section*/}
          <div style={{padding: '50px', marginTop:"-50px"}}>
  <div className="mt-3 mt-lg-8 row no-gutters col-sm-9"  />
  <h3 className="ml-2" style={{textAlign: 'center'}}> Doctors may leverage this tool in the following ways;</h3>
  <div className="mt-0 mt-lg-4" />

  <div className="mt-3 " />
  <ul className="numbered-list-lg ml-2">
    <li>Those who can not promote products and services may use this tool to validate and supplement their knowledge. Alternative interpretations from reputable sources can be used for Dr. education and keeping on top of cutting edge research reflected in some of the interpretations being developed. </li>
    <li>In addition, any medical practitioner may produce a report that could be shared with the patient for optimal patient retention of physician provided information and improved compliance with prescribed treatment. Patients feedback on getting detailed reading material specific to their results is off the charts!</li>
    <li>On-boarding new staff to your clinic has never been easier. Every practitioner in the clinic will have access to the format interpretation designed by the clinic to ensure streamlined messaging or to help staff follow protocols designed by senior practitioners. </li>
    <li>Alternative medicine Doctors and those outside of Canada who are able to promote products and services can do so right on the report. Therapies, supplements and even medications can be identified and discussed in the body of the report within the relevant are of the results interpretations. This may very well be the best such tool to grow your practice while educating your patients and promoting preventative care.</li>
    
  </ul>
  <div className="mt-3 " />
  <p style={{textAlign: 'center'}}>To design your own custom interpretation and receive a no cost business portal (www.easylabs.org/your name) contact info@meditserv.com</p>
</div>

         
          
          
          <div className="section">
            <div className="container-fluid px-0">
              <div
                className="banner-center bg-cover"
                style={{
                  backgroundImage: "url(images/content/banner3.png)",
                }}
              >
                <div className="banner-center-caption text-center">
                  <div className="banner-center-text1">
                    Result interpretations for doctors
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
