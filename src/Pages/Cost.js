import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Cost extends Component {
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

          <div
            className="section bg-norepeat bg-md-none "
            style={{ backgroundImage: "url(images/bg-top-left.png)" }}
          >
            <div className="container">
              <div className="title-wrap-alt  text-center">
                <h2
                  className="h1 double-title double-title--top-md"
                  data-title="Health Care Cost"
                >
                  <span>
                    Health Care <span className="theme-color">Cost </span>
                  </span>
                </h2>
              </div>

              <div style={{ padding: "50px", marginTop: "-120px" }}>
                <div className="mt-0 mt-lg-8 row no-gutters col-sm-9 " />

                <div className="mt-0 mt-lg-4" />

                <div className="mt-3 ml-2" />

                <p>
                  The status quo for healthcare is not enough: Something more
                  must be done to reverse this trend and save healthcare dollars
                  – and more importantly, save people’s lives. Improved clinical
                  tools are needed to identify patients with a predisposition to
                  CVD who can benefit from timely, preventative intervention.
                </p>

                <ul className="marker-list ml-2">
                  <li>
                    Avoiding HEART DISEASE can save an average of $5,693 in
                    healthcare costs per individual, yearly.{" "}
                  </li>
                  <li>
                    For related complications like kidney failure, the cost of
                    dialysis for one year is $75,000{" "}
                  </li>
                  <li>Heart complication procedures run upward of $60,000</li>
                  <li>
                    The total cost incurred by cardiovascular disease and stroke
                    in this country was most recently estimated at an astounding
                    $259.1 billion for one year.
                  </li>
                  <li>
                    Roughly 70% of all healthcare decisions that are made by
                    physicians are due to proper laboratory testing.
                  </li>
                  <li>
                    Laboratory testing represents just 5% of a health system’s
                    cost, but it can influence the other 95% of dollars spent.
                  </li>
                </ul>
                <div className="mt-3 " />
                <p className="mb-2" style={{ textAlign: "center" }}>
                  Estimate from the Milken Institute report: An Unhealthy
                  America: The Economic Impact of Chronic Disease,
                  http://www.chronicdiseaseimpact.com/
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
