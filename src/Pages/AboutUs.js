import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Container/Header";
import Footer from "../Container/Footer";

class AboutUs extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="shadow-line"></div>
        <section className="admin-wrapper">
          <Container>
            {" "}
            <Row>
              <Col className="mt-5">
                <h2 className="sub-title">About Us</h2>
                <p>
                  Pragya Newari khaja Ghar serves you the typical newari food
                  with verities of newari dishes. We provide you the fresh ,
                  healthy and tasty newari food. We have the take away and
                  home/office delivery services as well We make a free delivery
                  food service near us . We are known for the tasty newari
                  dieses at a affordable price. We have been serving newari
                  dishes since 2004 AD.
                </p>
                <p>
                  Pragya Newari khaja Ghar is dedicated to provide quality food
                  at very affordable price. We don't charge any service charge.
                  We have the Good environment for family,friends gathering. We
                  have parking facility for two wheeler.
                </p>

                <h3 className="subhead-title mt-4">OUR VISION</h3>
                <p>
                  Pragya Newari khaja Ghar Is dedicated to provide the customer
                  with the good food and good enviroment for spending time
                  together with their friends and family and to provide healthy
                  and quality food at affordable price.
                </p>
                <h3 className="subhead-title mt-4">OUR MISSION</h3>
                <p>
                  We aim to serve the food as soon as posible ]. We don't let
                  our customer to wait. We value our customer time.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </>
    );
  }
}

export default AboutUs;
