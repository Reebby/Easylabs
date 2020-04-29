import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Patients extends Component {
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


<div className="section mt-0">

  <div className="container-fluid px-0 ">
    <div className="row no-gutters" style={{backgroundColor: '#f6f7f5', padding: '40px'}}>
      <div className="col-xl-6 bg-grey ">
        <div className="max-670 mx-lg-auto px-15">
          <div className="title-wrap">
            <h2 className="h1">Calling All <span className="theme-color">Patients</span></h2>
          </div>
          <div className="mt-lg-5" />
          <div className="row">
            <div className="col-sm-10">
            <div className="h-sub ">If you have to 
            deal with health matters it may as well be now.
             Medical insights found in the results of laboratory tests hold the key to a healthier you.</div>
              <ul className="marker-list-md">
                <li>Dealing with weight issues</li>
                <li>fertility challenges</li>
                <li>low energy </li>
                <li>and other acute conditions</li>
                
              </ul>
            </div>
           
          </div>
        </div>
      </div>
      <div className="col-xl-6 banner-left bg-full" style={{backgroundImage: 'url(images/content/tesimonials-bg.png)'}} />
    </div>
  </div>
</div>

          {/*section*/}
          <div  style={{padding: '50px', marginTop:"-40px"}}>
  <div className=" mt-lg-8 row no-gutters col-sm-9"  />
  <h2 className="ml-2  " style={{textAlign:'center',}} >How we can assist you</h2>
  <div className="mt-0 mt-lg-4" />

  <div className="mt-3 " />
  <ul className="numbered-list-lg ml-2">
    <li>Dealing with weight issues, fertility challenges, low energy and the many acute conditions afflicting modern society all have one thing in common, they show up as markers in your lab results long before symptoms become apparent, you just have to look.</li>
    <li>Your doctor will likely prescribe a standard blood test, CBC, Nutritional, Cardiovascular, Hormonal, Heavy metals and more, the options are endless but it may be cost prohibitive and your Doctor may not be familiar with the different correlations and dependencies showing up in the results. </li>
    <li>To further impair the value of the test, the results are often binary, normal vs abnormal only. This simply means that you can be on the verge of normal today and completely abnormal tomorrow since some fluctuations are normal. However, with no regard to the wide spectrum of results or how close you may be to showing multiple abnormal findings, current reports do not provide an accurate reflection of your fluid state and are not designed to inform you in a manner that encourages the many avenues available for you to take.</li>
    <li>That’s where we come in, Easylabs.org eliminate the dreaded Google search. Patients world wide spend hours trying to decipher the results of the tests leading to fear, confusion and uncertainty.  Easylabs.org simply takes the hard work and guessing out of it all. We offer mainstream interpretations based on North American standard found in common medical literature and we get it done in SECONDS.</li>
    <li>Either upload the file provided by your lab or simply enter the results manually and click on View Report. There is no log-in, no email or name needed, we are here to arm you with the knowledge you are entitled to without the need to pay for an expensive report or the need to have it explained by your Dr (although it is recommended). </li>
  </ul>
  <div className="mt-3 " />
  <p style={{textAlign: 'center'}}>We are also in the process of building alternative interpretations so you may choose the type of Dr interpreting your results, endocrinologist, hematology, family Dr, Naturopath …whichever interpretation you find most relevant to you, we offer access to the data!</p>
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
                  Free results interpretations for patients
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
