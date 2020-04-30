import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";

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
       <Form/>

<Footer />
</div>
);
}
}