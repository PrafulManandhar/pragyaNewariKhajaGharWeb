import React, { Component } from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import Header from "../Container/Header";
import Footer from "../Container/Footer";

class Contact extends Component {
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
            <Row>
              <Col>
                <div className="our-menu">Contact Us</div>{" "}
                <Row className="mt-4">
                  <Col>
                    <Accordion defaultActiveKey="0">
                      <Card xl="12">
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          Pragya Newari Khaja Ghar{" "}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <Row>
                              <Col>
                                <Row>
                                  <Col md="3" sm="3" className="text-muted">
                                    Address :
                                  </Col>
                                  <Col md="9" sm="9">
                                    Baghbazar 28, kathmandu 46620 , Nepal
                                  </Col>
                                </Row>
                                <Row className="mt-3">
                                  <Col md="3" xs="3" className="text-muted">
                                    Phone :
                                  </Col>
                                  <Col md="9" xs="9">
                                    <a href="tel:014219296">014219296</a>
                                  </Col>
                                </Row>
                                <Row className="mt-3">
                                  <Col md="3" xs="3" className="text-muted">
                                    Mobile :
                                  </Col>
                                  <Col md="8" xs="8">
                                    <a href="tel:9808697457">9808697457</a>
                                  </Col>
                                </Row>
                                <Row className="mt-3">
                                  <Col md="3" xs="3" className="text-muted">
                                    Email :
                                  </Col>
                                  <Col md="9" xs="9">
                                    <a href="mailto:manandhar.praful13@gmail.com">
                                      manandhar.praful13@gmail.com
                                    </a>
                                  </Col>
                                </Row>
                                <Row className="mt-3">
                                  <Col md="3" xs="3" className="text-muted">
                                    Map :
                                  </Col>
                                  <Col md="9" xs="9">
                                    <a href="https://goo.gl/maps/ETQa3RWX2pXs3n8cA">
                                      Get direction here
                                    </a>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </>
    );
  }
}

export default Contact;
