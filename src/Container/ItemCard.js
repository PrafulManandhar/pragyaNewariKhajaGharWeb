import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Choila from "../Assets/Images/Items/Choila.jpg";
import BuffKhajaSet from "../Assets/Images/Items/BuffKhajaSet.jpg";
import Fokso from "../Assets/Images/Items/Fokso.jpg";

import Giddi from "../Assets/Images/Items/giddi.jpg";

import Bara from "../Assets/Images/Items/Bara.jpg";

import MoMo from "../Assets/Images/Items/momo.jpg";

const ItemCard = (props) => {
  const img = props.itemDetail.img;
  console.log("img", img);
  return (
    <Col className="item-card" md="6" xl="3" xs="12">
      <div>
        <img src={img} alt="menu" width="100%" height="250px" />
      </div>

      <div className="item-title">{props.itemDetail.name}</div>
      <div className="item-price">{props.itemDetail.price}</div>
    </Col>
  );
};

export default ItemCard;
