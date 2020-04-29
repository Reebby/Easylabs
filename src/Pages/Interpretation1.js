import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InterpretationCard from "../components/InterpretationCard";

export default class Interpretation1 extends Component {
  constructor(props) {
    super(props);
    this.modernPlan = [
      {
        name: "Standard Interpretation",
        cost: 0,
        text: `This interpretation should read in a manner similar to what you would expect to hear from your family physician. Tests are defined simplistically and mainstream suggestions may be made in areas that could be improved. This is an excellent way to get to know your health through a deeper undressing of simplified medical language as it pertains to your personal results. `,
      },
      {
        name: "Endocrinologist Interpretation",
        cost: 3,
        text: `When you are facing a diagnosis of a hormonal condition, like diabetes, Osteoporosis or thyroid disease, an endocrinologist may be the best expert to consult with.  An endocrinologist is a specialist who has thoroughly studied hormonal conditions and knows the best possible treatments, even when conventional treatments do not work well. Unlike a family doctor or general practitioner, an endocrinologist studies hormones and hormonal diseases in depth, and this specialist will be able to provide the best possible treatment. Most general practitioners have the skills necessary to diagnose and treat basic hormonal conditions, but sometimes the help of a specialist is needed. `,
      },
      {
        name: "Fertility Interpretation",
        cost: 3,
        text: `It goes without saying fertility challenges are often mysterious, complex and stressful. They can often manifest in those of us who had no previous indications of a potential problem. Fortunately, science has come a long way and success rates are promising. We offer a wealth of knowledge for women who are looking to prepare their bodies as a part of their family planning activities, women who may have some concerns based on personal or family history and women who are experiencing fertility challenges and would like to be educated in a focused manner so they can best support their physician's efforts. `,
      },
      {
        name: "Women's Health Interpretation",
        cost: 3,
        text: `Women's health refers to the branch of medicine that focuses on the treatment and diagnosis of diseases and conditions that affect a woman's physical and emotional well-being. But there is more to it, the language used, the way the information is communicated and the steps toward optimal health based on laboratory results are often conveyed in a unisex format that leave a lot to be desired. We hope that we've done a better job communicating the message of health, emotional wealth and general well being in this interpretation. `,
      },
      {
        name: "Men's Health Interpretation",
        cost: 0,
        text: `Men's health refers to a state of complete physical, mental, and social well-being, as experienced by men, and not merely the absence of disease or infirmity. As in our other interpretations, the focus here is on a manner of communication that would resonate with men in the best way possible and lead to improved self empowerment around health.`,
      },
      {
        name: "Oncology Interpretation",
        cost: 3,
        text: `Almost every one of us has had a direct or indirect experience with cancer. A full 40% of us will be diagnosed at one point in our lives and yet most of us know little to nothing about this disease. This interpretation provides an oncologist perspective on your lab results. Those that may serve as cancer markers and those that have no direct relations to cancer. This is an excellent educational tool for those interested in better understanding this disease from their own unique and personalized perspective and of course those who are battling cancer and would like to eliminate much of the confusion that may come with reading general content. We do not provide diagnostics information, that is for your physician to do but we certainly empower you to help your physician be effective and provide a wealth of preventative measures that have been shown to defer cancer and improve your odds of beating it if diagnosed.  `,
      },
      {
        name: "Dermatology Interpretation",
        cost: 3,
        text: `A dermatologist is a doctor that specializes in treating skin, hair, nail, and mucous membrane disorders and diseases.
	  Considering that our skin is the largest organ in our bodies, it is no surprise that many diseases and conditions do also manifest themselves in our skin. From mild food allergies to stress, environmental conditions and of course the many conditions it can suffer from, our skin speaks volumes and perfect skin is a rare commodity that many of us envy so, why not get to know your skin and the many things it can tell you about yourself? You will also be surprised with how much you can do for your skin and how easily you can do it.`,
      },
    ];
    this.state = {
      mobile_menu: false,
      loading: false,
      redirectToPhone: false,
      home: "active",
    };
  }

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
          <div
            style={{
              padding: "70px",
              marginTop: "-50px",
              marginBottom: "-50px",
            }}
          >
            <div className="mt-3 mt-lg-12 row no-gutters col-sm-9" />
            <h2 className="ml-2" style={{ textAlign: "center" }}>
              {" "}
              Select a modern medicine expert
            </h2>
            <div className="mt-0 mt-lg-12" />

            <div className="container">
              <div className="row ">
                {this.modernPlan.map((data) => (
                  <div className="col-md-12 col-xl-12">
                    <div className="department">
                      <InterpretationCard plan={data} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
