import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Background extends Component {
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
        <div className="section bg-grey  mt-md-0">
  <div className="container">
    <div className="title-wrap text-center">
      <h2 className="h1 double-title double-title--white double-title--center double-title--vcenter" data-title="  Getting Started"><span>Getting Started<span className="clearfix d-sm-none" /></span></h2>
      <div className="h-decor" />
    </div>
   
    <div id="tab-content" className="tab-content mt-2 mt-sm-4">
      <div id="tab-A" className="tab-pane fade show active" role="tabpanel">
        <div className="tab-bg"><img src="images/content/bg-map.png" alt="" /></div>
        <div className="row">
          <div className="col-md-6 h-100 mb-2 mb-md-0">
            <img src="images/content/about-11.jpg" alt="" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="pt-xl-1">
              <h3>Are you a doctor or clinician?</h3>
              <p>If you are a Doctor, clinic or lab and would like to leverage our platform in discuss intergration 
                  please contact info@meditserv.com </p>
                  <p>We can set you up same day and assist you in creating your own interpretations available on your personal portal within hours.</p>
            
              
            </div>
          </div>
        </div>
      </div>
    </div></div></div>
    </div>

<Footer />
</div>
);
}
}