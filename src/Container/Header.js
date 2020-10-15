import React from "react";
import MainIcon from "../Assets/Images/Icons/pragyaLogo.png";
import OrderPng from "../Assets/Images/Icons/order.png";

import {
  Container,
  Nav,
  Navbar,
  Col,
  // Nav,
  // Navbar,
  // Button,
  // NavDropdown,
  // Spinner,
} from "react-bootstrap";
const Header = (props) => {
  const setActive = () => {
    var header = document.getElementById("foot-nav");
    var btns = header.getElementsByClassName("menu");

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  };

  return (
    <React.Fragment>
      <header className="header-main mt-3">
        <Container>
          <Navbar expand="lg" bg="light">
            <div
              className="navbar-brand"
              onClick={() => alert("pragya newari khaja ghar")}
              style={{ cursor: "pointer" }}
            >
              <img src={MainIcon} alt="logo" className="logo" width="350px" />
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-md-auto">
                <div lg="5" className="mt-4">
                  <div className="foot-nav" id="foot-nav">
                    <span
                      className="menu active"
                      onClick={() => {
                        setActive();
                      }}
                    >
                      {" "}
                      Menu{" "}
                    </span>
                    <span
                      className="menu"
                      onClick={() => {
                        setActive();
                      }}
                    >
                      {" "}
                      About
                    </span>

                    <span
                      className="menu"
                      onClick={() => {
                        setActive();
                      }}
                    >
                      {" "}
                      Contact{" "}
                    </span>

                    <a
                      className="menu"
                      onClick={() => {
                        setActive();
                      }}
                      target="_blank"
                      href="https://www.facebook.com/PragyaNewarikhajaGhar/?view_public_for=103870334828647"
                    >
                      {" "}
                      FeedBack
                    </a>
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
export default Header;
