import React from "react";
import { Container } from "react-bootstrap";
const MenuHeader = () => {
  const setActive = () => {
    var header = document.getElementById("menu-headers");
    var btns = header.getElementsByClassName("headerMenu");

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active-menu-header");
        current[0].className = current[0].className.replace(
          " active-menu-header",
          ""
        );
        this.className += " active-menu-header";
      });
    }
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  };
  return (
    <Container>
      <div>
        <div className="our-menu"> Our Menu</div>
        <div className="menu-headers" id="menu-headers">
          <a
            className="headerMenu active-menu-header"
            onClick={setActive}
            href="#comboo-offer"
          >
            Comboo Offer
          </a>
          <a
            className="headerMenu buff"
            onClick={() => setActive()}
            href="#buff"
          >
            Buff
          </a>

          <a className="headerMenu" onClick={setActive} href="#chicken">
            Chicken
          </a>

          <a className="headerMenu" onClick={setActive} href="#mutton">
            Mutton
          </a>
          <a className="headerMenu" onClick={setActive} href="#fish">
            Fish
          </a>

          <a className="headerMenu" onClick={setActive} href="#veg">
            Veg
          </a>

          <a className="headerMenu" onClick={setActive} href="#beverages">
            Beverages
          </a>
        </div>
      </div>
    </Container>
  );
};

export default MenuHeader;
