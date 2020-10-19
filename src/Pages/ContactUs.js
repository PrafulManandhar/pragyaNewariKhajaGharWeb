import React, { Component } from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import Header from "../Container/Header";
import Footer from "../Container/Footer";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    // const { name, email, message } = this.state;

    return (
      <>
        <Header />
        <div className="shadow-line"></div>
        <section className="admin-wrapper">
          <Container>
            <Row>
              <Col className="mt-5">
                <h2 className="sub-title text-center">Contact Us</h2>
                <form
                  name="contact"
                  method="POST"
                  netlify-honeypot="bot-field"
                  data-netlify="true"
                >
                  <p class="hidden">
                    <label>
                      Don’t fill this out if you're human:{" "}
                      <input name="bot-field" />
                    </label>
                  </p>
                  <p>
                    <label>
                      Email: <input type="text" name="email" />
                    </label>
                  </p>
                  <p>
                    <label>
                      Message: <textarea name="message"></textarea>
                    </label>
                  </p>
                  <p>
                    <button type="submit">Send</button>
                  </p>
                </form>
                {/* <form onSubmit={this.handleSubmit}>
                  <p>
                    <label>
                      Your Name:{" "}
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                      />
                    </label>
                  </p>
                  <p>
                    <label>
                      Your Email:{" "}
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                      />
                    </label>
                  </p>
                  <p>
                    <label>
                      Message:{" "}
                      <textarea
                        name="message"
                        value={message}
                        onChange={this.handleChange}
                      />
                    </label>
                  </p>
                  <p>
                    <button type="submit">Send</button>
                  </p>
                </form> */}
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
                                  <Col md="4" className="text-muted">
                                    Address
                                  </Col>
                                  <Col md="8">
                                    Baghbazar 28, kathmandu 46620 , Nepal
                                  </Col>
                                </Row>
                                <Row className="mt-3">
                                  <Col md="4" className="text-muted">
                                    Phone Number LandLine
                                  </Col>
                                  <Col md="8">
                                    <a href="tel:014219296">014219296</a>
                                  </Col>
                                </Row>
                                <Row className="mt-3">
                                  <Col md="4" className="text-muted">
                                    Phone Number Praful Manandhar
                                  </Col>
                                  <Col md="8">
                                    <a href="tel:9808697457">9808697457</a>
                                  </Col>
                                </Row>
                                <Row className="mt-3">
                                  <Col md="4" className="text-muted">
                                    Email
                                  </Col>
                                  <Col md="8">
                                    <a href="mailto:manandhar.praful13@gmail.com">
                                      manandhar.praful13@gmail.com
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
