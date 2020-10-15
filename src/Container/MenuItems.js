import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Choila from "../Assets/Images/Items/Choila.jpg";
import BuffKhajaSet from "../Assets/Images/Items/BuffKhajaSet.jpg";
import Fokso from "../Assets/Images/Items/Fokso.jpg";

import Giddi from "../Assets/Images/Items/giddi.jpg";

import Bara from "../Assets/Images/Items/Bara.jpg";

import MoMo from "../Assets/Images/Items/momo.jpg";
import Sekuwa from "../Assets/Images/Items/sekuwa.jpg";
import FishPiece from "../Assets/Images/Items/FishPiece.jpg";
import ChickenLeg from "../Assets/Images/Items/ChickenLeg.jpg";
import BuffSusage from "../Assets/Images/Items/BuffSusage.png";
import ChickenSusage from "../Assets/Images/Items/chickenSusage.jpg";
import Prawn from "../Assets/Images/Items/Prawn.jpg";
import AlluTama from "../Assets/Images/Items/AlluTama.jpg";
import Chanaa from "../Assets/Images/Items/Chanaa.jpg";
import Chatamari from "../Assets/Images/Items/Chatamari.jpg";
import Coke from "../Assets/Images/Items/Coke.png";
import Sprite from "../Assets/Images/Items/Sprite.jpg";
import Fanta from "../Assets/Images/Items/Fanta.jpg";
import Vutan from "../Assets/Images/Items/vutan.jpg";
import Pangra from "../Assets/Images/Items/pangra.jpg";
import Omlet from "../Assets/Images/Items/omlet.jpg";
import Supumhicha from "../Assets/Images/Items/Sapuphicha.jpg";

import MuttonVuttan from "../Assets/Images/Items/muttonVutan.jpg";

import Aalu from "../Assets/Images/Items/aalu.jpg";

import CurryFish from "../Assets/Images/Items/CurryFish.jpg";

import GreenVatmas from "../Assets/Images/Items/GreenVatmas.JPG";

import EggPouch from "../Assets/Images/Items/EggPouch.jpg";
import Kachila from "../Assets/Images/Items/Kachila.jpg";

import ItemCard from "./ItemCard";
const MenuItems = (props) => {
  const [state, setState] = useState({
    combooOffer: [
      {
        img: BuffKhajaSet,
        name: "Buff Khaja Set",
        price: "120 Nrs",
      },
      {
        img: BuffKhajaSet,
        name: "Chicken Khaja Set",
        price: "120 Nrs",
      },
      {
        img: BuffKhajaSet,
        name: "Mutton Khaja Set",
        price: "120 Nrs",
      },
    ],
    buffItem: [
      {
        img: Giddi,
        name: "Giddi",
        price: "120 Nrs",
      },
      {
        img: MoMo,
        name: "MoMo",
        price: "120 Nrs",
      },
      {
        img: Giddi,
        name: "Giddi",
        price: "120 Nrs",
      },
      {
        img: Bara,
        name: "Mix Bara",
        price: "120 Nrs",
      },
      {
        img: Sekuwa,
        name: " Buff Sekuwa",
        price: "120 Nrs",
      },
      {
        img: Choila,
        name: "Buff Choila",
        price: "120 Nrs",
      },
      {
        img: BuffSusage,
        name: "Buff Sussage",
        price: "120 Nrs",
      },
      {
        img: Vutan,
        name: "Buff Vutan",
        price: "120 Nrs",
      },
      {
        img: Supumhicha,
        name: " Supu Mhicha ",
        price: "120 Nrs",
      },
      {
        img: MoMo,
        name: " Buff MoMo ",
        price: "120 Nrs",
      },
      {
        img: Chatamari,
        name: " Mix Chatamari",
        price: "120 Nrs",
      },
      {
        img: Kachila,
        name: "Kachila",
        price: "120 Nrs",
      },
    ],
    chickenItem: [
      {
        img: ChickenLeg,
        name: "Chicken Leg Piece",
        price: "120 Nrs",
      },
      {
        img: Pangra,
        name: " Pangra",
        price: "120 Nrs",
      },
      {
        img: ChickenSusage,
        name: "Chicken Sussage",
        price: "120 Nrs",
      },
      {
        img: Omlet,
        name: "Omlet",
        price: "120 Nrs",
      },
      {
        img: EggPouch,
        name: "Pouch",
        price: "120 Nrs",
      },
      {
        img: ChickenSusage,
        name: "Chicken Sekuwa",
        price: "120 Nrs",
      },
    ],
    muttonItem: [
      {
        img: Fokso,
        name: "Mutton Fokso",
        price: "120 Nrs",
      },
      {
        img: MuttonVuttan,
        name: "Mutton Vutan",
        price: "120 Nrs",
      },
    ],
    fishItem: [
      {
        img: FishPiece,
        name: "Fish Fry",
        price: "120 Nrs",
      },
      {
        img: Prawn,
        name: "Prawn Fish",
        price: "120 Nrs",
      },
      {
        img: CurryFish,
        name: "Curry Fish",
        price: "120 Nrs",
      },
    ],
    vegItem: [
      {
        img: Aalu,
        name: "Sadheko Aalu",
        price: "120 Nrs",
      },
      {
        img: GreenVatmas,
        name: "Green Vatmas",
        price: "120 Nrs",
      },
      {
        img: GreenVatmas,
        name: "Vatmas",
        price: "120 Nrs",
      },
      {
        img: Chanaa,
        name: "Chanaa",
        price: "120 Nrs",
      },
      {
        img: AlluTama,
        name: "Allu Tamma",
        price: "120 Nrs",
      },
      {
        img: Bara,
        name: "Veg Bara",
        price: "120 Nrs",
      },
      {
        img: Aalu,
        name: "Achar",
        price: "120 Nrs",
      },
    ],
    beverages: [
      {
        img: Coke,
        name: "Coke",
        price: "120 Nrs",
      },
      {
        img: Fanta,
        name: "Fanta",
        price: "120 Nrs",
      },
      {
        img: Sprite,
        name: "Sprite",
        price: "120 Nrs",
      },
      {
        img: Coke,
        name: "Soda",
        price: "120 Nrs",
      },
    ],
  });

  return (
    <Container>
      <div className="menu-category-list">
        <div id="comboo-offer" className="menu-category">
          <h5 className="category-heading">Comboo Offers</h5>
          <div className="items">
            {state.combooOffer.map((item, index) => {
              return <ItemCard itemDetail={item} key={index} />;
            })}
          </div>
        </div>
        <div id="buff" className="menu-category">
          <h5 className="category-heading">Buff Items</h5>
          <div className="items">
            {state.buffItem.map((item, index) => {
              return <ItemCard itemDetail={item} key={index} />;
            })}
          </div>
        </div>
        <div id="chicken" className="menu-category">
          <h5 className="category-heading">Chicken Items</h5>
          <div className="items">
            {state.chickenItem.map((item, index) => {
              return <ItemCard itemDetail={item} key={index} />;
            })}
          </div>
        </div>
        <div id="mutton" className="menu-category">
          <h5 className="category-heading">Mutton Items</h5>
          <div className="items">
            {state.muttonItem.map((item, index) => {
              return <ItemCard itemDetail={item} key={index} />;
            })}
          </div>
        </div>
        <div id="fish" className="menu-category">
          <h5 className="category-heading">Fish Items</h5>
          <div className="items">
            {state.fishItem.map((item, index) => {
              return <ItemCard itemDetail={item} key={index} />;
            })}
          </div>
        </div>
        <div id="veg" className="menu-category">
          <h5 className="category-heading">Veg Items</h5>
          <div className="items">
            {state.vegItem.map((item, index) => {
              return <ItemCard itemDetail={item} key={index} />;
            })}
          </div>
        </div>
        <div id="beverages" className="menu-category">
          <h5 className="category-heading">Beverages</h5>
          <div className="items">
            {state.beverages.map((item, index) => {
              return <ItemCard itemDetail={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MenuItems;
