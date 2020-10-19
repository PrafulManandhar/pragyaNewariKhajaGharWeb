import React from "react";
import { Col } from "react-bootstrap";

const ItemCard = (props) => {
  const img = props.itemDetail.img;
  return (
    <Col className="item-card" md="6" xl="4" xs="12">
      <div>
        <img
          src={img}
          alt="menu"
          width="100%"
          height="300px"
          style={{ objectFit: "fit" }}
        />
      </div>

      <div className="item-title">{props.itemDetail.name}</div>
      <div className="item-price">{props.itemDetail.price}</div>
    </Col>
  );
};

export default ItemCard;
