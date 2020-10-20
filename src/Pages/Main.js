import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Header from "../Container/Header";
import Footer from "../Container/Footer";
import MenuHeader from "../Container/MenuHeader";
import MenuItems from "../Container/MenuItems";

class Main extends Component {
  componentDidMount = () => {
    localStorage.setItem("active", "menu");
  };
  render() {
    return (
      <>
        <Header />
        <div className="shadow-line"></div>
        <section className="admin-wrapper">
          <Container>
            <MenuHeader />
            <MenuItems />
          </Container>
        </section>
        <Footer />
      </>
    );
  }
}

export default Main;
