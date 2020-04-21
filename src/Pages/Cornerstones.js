import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Cornerstones extends Component {
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
                  data-title="Medical Cornerstones"
                >
                  <span>
                    What Are Medical{" "}
                    <span className="theme-color">Cornerstones </span>
                  </span>
                </h2>
              </div>

              <div style={{ padding: "50px", marginTop: "-150px" }}>
                <div className="mt-0 mt-lg-8 row no-gutters col-sm-9 " />

                <div className="mt-0 mt-lg-4" />

                <div className="mt-1 ml-2" />
                <p></p>

                <ul className="marker-list ml-2">
                  <li>
                    We group a whole variety of tests into four main categories,
                    or what we like to call the medical cornerstones:
                  </li>
                  <ul className="marked-list ml-0">
                    <li>Nutritional Health</li>
                    <li>Hormone Health </li>
                    <li>Heart complication procedures run upward of $60,000</li>
                    <li>Cardiovascular Health</li>
                    <li>Metabolic Health</li>
                    <li>
                      With supplemental categories being added such as Blood
                      Type and urine panel for common toxins.
                    </li>
                  </ul>
                  <p className="mt-2">
                    By grouping symptoms and tests in these four areas, we’re
                    able to consider a wide range of chronic illnesses, diseases
                    and conditions that prevent long, healthy lives.
                  </p>
                  <li>The Science</li>
                  <ul className="marked-list ml-0">
                    <p className="mt-2">
                      Easylabs.org offers comprehensive test panels and
                      biomarkers that uncover hidden risk factors to prevent
                      cardiovascular disease, diabetes, and related chronic
                      diseases to ensure more effective treatment for the
                      patient.
                    </p>
                    <li>Nutrition</li>
                    <p className="mt-2">
                      Iron metabolism, vitamins, and mineral deficiencies from
                      poor dietary choices can be expensive to manage when
                      allowed to progress such as Iron, Vitamin D, Folate and
                      Vitamin B12 deficiencies.
                    </p>
                    <li>Metabolic </li>
                    <p className="mt-2">
                      Electrolytes, renal, liver and pancreatic abnormalities
                      can cause serious dysfunction to organ function, which may
                      be contributing to a host of symptoms and underlying
                      disease states.
                    </p>
                    <li>Lipid Profile</li>
                    <p className="mt-2">
                      The conventional group of tests to determine risk is a
                      good start, but when normal can miss 50% of all heart
                      attacks and strokes. When combined with apolipoproteins
                      and lipoproteins a far better prediction of health risk
                      can be determined.
                    </p>
                    <li>Inflammation</li>
                    <p className="mt-2">
                      As natural response to stress or injury, inflammation
                      biomarkers reveals the extent of endothelial dysfunction
                      and oxidative stress occurring in the blood vessels.
                    </p>
                    <li>Glucose And Insulin Control</li>
                    <p className="mt-2">
                      Multiple biomarkers can accurately detect the stage of
                      progression towards diabetes and level of function of
                      pancreatic beta cell function, which may reduce or
                      eliminate a patient’s need for insulin.
                    </p>
                    <li>Hormones</li>
                    <p className="mt-2">
                      Hormone balance is essential for regulating physical,
                      mental, and metabolic health. A comprehensive hormone
                      assessment is essential to managing weight and serves as a
                      powerful early indicator of insulin resistance.
                    </p>
                    <li>AutoImmune</li>
                    <p className="mt-2">
                      Antibodies that respond to the body’s own tissue can have
                      deleterious effects on energy levels, gastrointestinal
                      health, immunity, and brain function.
                    </p>
                    
                  </ul>

                  
                </ul>
                
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
