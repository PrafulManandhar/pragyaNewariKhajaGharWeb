import React, { useState, useEffect } from "react";
import MainIcon from "../Assets/Images/Icons/pragyalogo.png";
// import OrderPng from "../Assets/Images/Icons/order.png";
import { withRouter } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  // Nav,
  // Navbar,
  // Button,
  // NavDropdown,
  // Spinner,
} from "react-bootstrap";
const Header = (props) => {
  useEffect(() => {
    // Update the document title using the browser API
    setActive(localStorage.active);
  }, []);

  const [active, setActive] = useState("menu");
  const getActive = () => {
    setActive(localStorage.active);
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <React.Fragment>
      <header className="header-main mt-3">
        <Container>
          <Navbar expand="lg" bg="light">
            <div
              className="navbar-brand"
              onClick={() => {
                localStorage.setItem("active", "menu");
                getActive();
                props.history.push("/");
              }}
              style={{ cursor: "pointer" }}
            >
              <img src={MainIcon} alt="logo" className="logo" width="400px" />
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-md-auto">
                <div lg="5" className="mt-4">
                  <div className="foot-nav" id="foot-nav">
                    {active === "menu" ? (
                      <span
                        className="active"
                        onClick={() => {
                          localStorage.setItem("active", "menu");
                          getActive();
                          props.history.push("/");
                        }}
                      >
                        {" "}
                        Menu{" "}
                      </span>
                    ) : (
                      <span
                        className="menu"
                        onClick={() => {
                          localStorage.setItem("active", "menu");
                          getActive();
                          props.history.push("/");
                        }}
                      >
                        {" "}
                        Menu{" "}
                      </span>
                    )}

                    {active === "about" ? (
                      <span
                        className="active"
                        onClick={() => {
                          props.history.push("/about");

                          localStorage.setItem("active", "about");
                          getActive();
                          props.history.push("/about");
                        }}
                      >
                        {" "}
                        About
                      </span>
                    ) : (
                      <span
                        className="menu"
                        onClick={() => {
                          props.history.push("/about");

                          localStorage.setItem("active", "about");
                          getActive();
                        }}
                      >
                        {" "}
                        About
                      </span>
                    )}
                    {active === "contact" ? (
                      <span
                        className="active"
                        onClick={() => {
                          localStorage.setItem("active", "contact");
                          getActive();
                          props.history.push("/contact");
                        }}
                      >
                        {" "}
                        Contact{" "}
                      </span>
                    ) : (
                      <span
                        className="menu"
                        onClick={() => {
                          localStorage.setItem("active", "contact");
                          getActive();
                          props.history.push("/contact");
                        }}
                      >
                        {" "}
                        Contact{" "}
                      </span>
                    )}

                    <span
                      className="menu"
                      onClick={() => {
                        openInNewTab(
                          "https://www.facebook.com/PragyaNewarikhajaGhar/?view_public_for=103870334828647"
                        );
                      }}
                    >
                      {" "}
                      Facebook Page
                    </span>
                    <span
                      className="menu"
                      onClick={() => {
                        openInNewTab(
                          "https://www.messenger.com/t/PragyaNewarikhajaGhar"
                        );
                      }}
                    >
                      {" "}
                      Message Us
                    </span>
                  </div>
                </div>
                {/* <Col lg="3" className="mt-1 d-flex justify-content-end">
                  <img src={OrderPng} height="70px" width="60%" alt="Order" />
                </Col> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    </React.Fragment>
  );
};
export default withRouter(Header);
