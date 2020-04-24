import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class InterpretationMain extends Component {
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
          <div className="section bg-grey  mt-md-0">
            <div className="container">
              <div className="title-wrap text-center">
                <h2
                  className="h1 double-title double-title--white double-title--center double-title--vcenter"
                  data-title="Interpretations"
                >
                  <span>
                    Interpretations Menu
                    <span className="clearfix d-sm-none" />
                  </span>
                </h2>
                <div className="h-decor" />
              </div>

              <div id="tab-content" className="tab-content mt-2 mt-sm-4">
                <div
                  id="tab-A"
                  className="tab-pane fade show active"
                  role="tabpanel"
                >
                  <div className="tab-bg">
                    <img src="images/content/bg-map.png" alt="" />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="pt-xl-1">
                        <h3>Modern Medicine Expert</h3>
                        {/* <ul className="marker-list-md">
													<li>1 in 3 have been diagnosed with CARDIOVASCULAR DISEASE</li>
													<li>1 in 3 are DIABETIC or PREDIABETIC</li>
													<li>1 in 4 have been diagnosed with METABOLIC SYNDROME</li>
													<li>1 in 5 have been diagnosed with FATTY LIVER DISEASE</li>
													<li>70% are OVERWEIGHT or OBESE</li>
													<li>
														Heart disease causes over 1 million deaths a year in the U.S.
														alone—or an average of about 2600 deaths each day.
													</li>
												</ul>{' '} */}
                        <br />
                        <p>
                          A system in which medical doctors and other healthcare
                          professionals (such as nurses, pharmacists, and
                          therapists) treat symptoms and diseases using drugs,
                          radiation, or surgery. Also called western medicine,
                          allopathic medicine, biomedicine, conventional
                          medicine, mainstream medicine, and orthodox medicine.
                          This medical system is likely familiar to you through
                          your interactions with your healthcare system and is
                          renowned for the highest standard of science and
                          evidence based approach. This aims to maximizes
                          positive outcomes while minimizing risks in most cases
                          and as such, it is the best methodology we have. Those
                          who criticize it often point to the need to move from
                          sick care to health care and the need for more focus
                          on prevention as well as expediting the adoption of
                          new information which is often delayed by the rigorous
                          testing and standards required to make it into the
                          system.
                        </p>
                        <Link
                          to="/interpretation1"
                          className="btn link-inside"
                          data-animation="fadeInUp"
                          data-animation-delay="2s"
                        >
                          <i className="icon-right-arrow" />
                          <span>Modern Medicine Expert interpretations</span>
                          <i className="icon-right-arrow" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6 h-100 mb-2 mb-md-0">
                      <img
                        src="images/content/about-15.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*section*/}

          <div
            className="section bg-norepeat bg-md-none "
            style={{ backgroundImage: "url(images/bg-top-left.png)" }}
          >
            <div className="container">
              <div id="tab-content" className="tab-content mt-1 mt-sm-4">
                <div
                  id="tab-A"
                  className="tab-pane fade show active"
                  role="tabpanel"
                >
                  <div className="row">
                    <div className="col-md-6 h-100 mb-2 mb-md-0">
                      <img
                        src="images/content/about-16.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="pt-xl-1">
                        <h3>Complementary Medicine Expert</h3>

                        <br />
                        <p>
                          Complementary and alternative healthcare and medical
                          practices (CAM) is a group of diverse medical and
                          health care systems, practices, and products that are
                          not presently considered to be part of conventional
                          medicine. These are often sought after by patients who
                          are looking for an alternative to conventional
                          medicine including seeking to avoid drugs or surgery.
                          These are also areas of healthcare where conventional
                          care offered through mainstream avenues may not be
                          able to allocate resources that are satisfactory to
                          the patient. Prevention and optimal health are often
                          not areas your MD would be able to spend much time
                          with you on. At Easylabs our focus with the
                          complementary approach is on optimal health. We do not
                          aim at replacing your healthcare provider but rather
                          provide you with education on alternative approaches
                          that could help you reach optimal health and empower
                          you to make the most of your time with your doctor
                          when addressing your health concerns.
                        </p>
                        <Link
                          to="/interpretation2"
                          className="btn link-inside"
                          data-animation="fadeInUp"
                          data-animation-delay="2s"
                        >
                          <i className="icon-right-arrow" />
                          <span>
                            Complementary Medicine Expert Interpretations
                          </span>
                          <i className="icon-right-arrow" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                    Get your free result interpretations
                  </div>
                  <div className="banner-center-text2">
                    We strive to provide interpretations that are easy to
                    understand
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
