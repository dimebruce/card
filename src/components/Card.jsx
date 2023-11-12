import React from "react";
import Chips from "../Logos/Chips.svg";

import Visa from "../Logos/Visa.svg";

import "../Styles/Card.css";

function Card({
  label,
  customerName,
  cardNumber,
  expiryDate,
  backgroundImage,
}) {
  return (
    <div>
      <div className="cardFrame">
        <img
          src={backgroundImage}
          alt="Card Background"
          className="bg-Image"
        />
        <div className="rows">
          <div className="rowTop">
            <span className="topLeft"> {label}</span>
            <img src={Chips} className="wifiIcon" />
          </div>

          <div className="rowMiddle">
            <span className="name">name</span>
            <div className="cardDetail">
              <span className="customerName">{customerName}</span>
              <span className="cardNumber">{cardNumber}</span>
            </div>
          </div>
          <div className="rowEnd">
            {expiryDate && (
                <span className="customerName"> {expiryDate}</span>
            )}
            <img src={Visa} className="paymentMethod" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Card;
