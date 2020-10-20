import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Container/Header";
import Footer from "../Container/Footer";

class AboutUs extends Component {
  componentDidMount = () => {
    localStorage.setItem("active", "contact");
  };
  render() {
    return (
      <>
        <Header />
        <div className="shadow-line"></div>
        <section className="admin-wrapper">
          <Container>
            {" "}
            <Row>
              <Col>
                <div className="our-menu">About Us</div>{" "}
                <p>
                  Pragya Newari khaja Ghar serves you the typical newari food
                  with varities of newari dishes. We provide you fresh ,healthy
                  and tasty newari food. We're also offering takeaway for those
                  who would prefer to enjoy newari food from the comfort of
                  their own homes.as well We make a free delivery food service
                  near us.We have been serving newari dishes since 2004 AD.We
                  are known for the tasty newari dishes at a affordable price.
                </p>
                <p>
                  Pragya Newari khaja Ghar is dedicated to provide quality food
                  at very affordable price without any service charge. We are
                  offering a warm, friendly atmosphere to share a foods/dishes
                  with your family and friends at any time. All of our dishes
                  are made with quality fresh ingredients. We have parking
                  facility for two wheeler. People from all types of cultural
                  backgrounds are welome to our newari khaja ghar.popular newari
                  dishes like choila,chatamari and aloo tama are loved by most
                  of our customers
                </p>
                <h5 className="category-heading">OUR VISION</h5>
                <p>
                  Pragya Newari khaja Ghar Is dedicated to provide the customer
                  with the good food and good enviroment for spending time
                  together with their friends and family and to provide healthy
                  and quality food at affordable price.
                </p>
                <h5 className="category-heading">OUR MISSION</h5>
                <p>
                  "Make and serve the freshest, most delicious newari dishes
                  quickly and courteously ,promote newari culture and dishes.”
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
