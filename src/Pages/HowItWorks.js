import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class HowItWorks extends Component {
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
          

          {/*section*/}
          <div style={{padding: '50px', marginTop:"-50px", marginBottom:"-50px"}}>
  <div className="mt-3 mt-lg-8 row no-gutters col-sm-9"  />
  <h3 className="ml-2" style={{textAlign: 'center'}}> How It Works</h3>
  <div className="mt-0 mt-lg-4" />

  <div className="mt-3 " />
  <ul className="numbered-list-lg ml-2">
    <li>Most people have access to their laboratory results, usually blood or urine and if you don’t have a printout, you are likely to find it online so the data is literally in your hands. Now imagine being able to select any expert to review the results with you at any time and at a cost that won’t even factor into the decision. This is what we offer, here and now and more affordably than you may imagine.</li>
    <li>With healthcare being slow to catch up with the remarkable technological advancements we’ve seen in recent years, Easylabs is here to bridge the gap. </li>
    <li>We know that blood and urine contain the insights vital to the understanding of how each unique person’s biochemistry responds to and interact with environmental factors including the foods we eat, chemicals we consume (coffee, alcohol) and environments we work and live in. There is a wealth of information in every lep report if only we could really understand it all.</li>
    <li>With Easylabs.org , you simply enter or upload the values from your lab results into our system and select the expert who’s opinion you wish to see. Family Doctor? Endocrinologist? Fertility specialist? Just click and within seconds your report will be analyzed and results interpreted using those expertise. </li>
   <li> Maybe complementary medicine is of interest to you these days, Naturopathy, Integrative and functional medicine are just some of the few becoming more mainstream than ever with specialists in those fields charging hundreds per session and often with no near term availability. With a click of the mouse you can access those and other perspectives right now and start making changes even prior to meeting with your specialist.</li>
  <li> Cutting edge early adopter? We have just the thing for you, Bio-Hacking and Anti-Aging are two hot interpretations that you may select from on your way to running that marathon or beating back mother time!</li>
  </ul>
  
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
                    Get your free result interpretations
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
                    <li>Complementary coffee, Juice</li>
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
