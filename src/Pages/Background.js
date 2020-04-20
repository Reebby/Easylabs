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
      <h2 className="h1 double-title double-title--white double-title--center double-title--vcenter" data-title="  Background"><span>Background<span className="clearfix d-sm-none" /></span></h2>
      <div className="h-decor" />
    </div>
   
    <div id="tab-content" className="tab-content mt-2 mt-sm-4">
      <div id="tab-A" className="tab-pane fade show active" role="tabpanel">
        <div className="tab-bg"><img src="images/content/bg-map.png" alt="" /></div>
        <div className="row">
          <div className="col-md-6 h-100 mb-2 mb-md-0">
            <img src="images/content/index-img-01.jpg" alt="" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="pt-xl-1">
              <h3>Common Biomarker Testing coupled with insights that are clear and actionable</h3>
              <p>With our advanced laboratory interpretations designed by multiple specialists with the unique perspective from their field of expertise, Easylabs.org can help unlock the mysteries of the body using clues found in the blood. We present diagnostic data in an easy-to-read dashboard that provides patients and even doctors with meaningful, actionable options.</p>
              <ul className="marker-list-md">
                <li>Unlock the mysteries of the body</li>
                <li>Easy to read diagnostic data</li>
                <li>We provide patients and  doctors with meaningful, actionable options</li>
               
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </div></div></div>




          {/*section*/}
          <div  style={{padding: '50px', marginTop:"-40px"}}>
  <div className=" mt-lg-8 row no-gutters col-sm-9"  />
  <h2 className="ml-2  " style={{textAlign:'center'}} >A New and Novel Approach</h2>
  <div className="mt-0 mt-lg-4" />

  <div className="mt-3 " />
  <ul className="numbered-list-lg ml-2">
      <p>Blood analysis tests have been around for years. They’re a classic method for finding out more about a patient’s health. 
           For the first time, we have the ability to provide the perspective a patient would get from the unique specialists of their 
           choice prior to going through the process and cost of meeting in person. Patients can get an expert perspective their lab results, 
           any time anywhere and be empowered to take the next step needed to optimize their health. Recommendations on nutrition, 
           supplements, lifestyle changes or even seeing an expert, are provided based on your specific lab results profile. Done right, 
           doctors see increased referrals, patients are more health aware, arrive at the appointment ready to cooperate and both compliance 
           and overall satisfaction are remarkably improved.  </p>

           <p>As a doctor, whether you want to survey a patient’s health, or need a second opinion on a suspected diagnosis, Easylabs.org testing gives you the confirmation you need to support a confident diagnosis.</p>
    <p>Our advanced analysis provides useful, actionable information that leads to significant improvement in patient outcomes.</p>
  </ul>
  <div className="mt-3 " />
  
</div>

         
          


    <div className="section bg-norepeat bg-md-none section-top-padding" style={{backgroundImage: 'url(images/bg-top-left.png)'}}>
  <div className="container-fluid px-0 over-visible">
    <div className="row">
      <div className="col-lg-6">
        <div className="services-tab-wrap float-right">
          <div className="title-wrap-alt text-center text-md-left">
            
            <h2 className="h1 double-title double-title--top-md" data-title="Services"><span>Baseline for Tracking <span className="theme-color">Progress </span></span></h2>
          </div>
          <p>Not only are Easylabs’ comprehensive blood panels a reliable way to measure a patient’s health, the same data can track patient progress. Tests are often repeated every three months to track
               how well your patient is responding to care as they continue along the road to complete, 
               whole-body health. <br/>Who should receive advanced testing? <br/> Anyone with Established NCEP ATP III risk factors below or the following signs or symptoms:</p>
          <div className="row">
            <div className="col-sm-auto">
              <ul className="marker-list-md">
              
                <li>High blood pressure</li> 
                <li>High cholesterol</li>
                <li>History of cardiovascular disease </li>
                <li>History of stroke </li>
                <li>Tobacco smoker</li>
                <li>Physical inactivity</li>
                <li>Overweight and Obesity</li>
                <li>Pre-diabetes or diabetes</li>
            <li>History of thrombosis or diabetes</li>
           
                <li>Age >45</li>
              </ul>
            </div>
            <div className="col-sm-auto mt-1 mt-md-0">
              <ul className="marker-list-md">
            
                <li>Chronic Fatigue</li>
                <li>Chronic Pain</li>
                <li>Mood Disorders</li>
                <li>Thyroid disorders</li>
                <li>Chronic GI issues</li>
                <li>Autoimmune diseases</li>
                <li>Neurological diseases</li>
                <li>Respiratory diseases</li>
                <li>Reproductive issues</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 position-relative">
        <div className="ml-xl-6">
          <img src="images/content/index-img-02.jpg" className="w-sm-100" alt="" />
        </div>
        
      </div>
    </div>
  </div>
</div>


        


          {/*section*/}
         

         
          
          


         
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
