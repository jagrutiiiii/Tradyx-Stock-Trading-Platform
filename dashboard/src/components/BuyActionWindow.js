import React, { useState } from "react";


import axios from "./axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const context = React.useContext(GeneralContext);

  const handleBuyClick = async (e) => {
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/newOrder`, {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });
      context.closeBuyWindow();
    } catch (err) {
      // alert("Buy failed. Try again.");
    }
  };

  const handleCancelClick = () => {
    context.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
        <button className="btn btn-blue" type="button" onClick={handleBuyClick}>
          Buy
        </button>
        <button className="btn btn-grey" type="button" onClick={handleCancelClick}>
          Cancel
        </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
