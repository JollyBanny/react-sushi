import React from "react";
import PropTypes from "prop-types";

import { BsPlusLg, BsDashLg, BsXLg } from "react-icons/bs";

function CartItem({ name, description, price, totalPrice }) {
  return (
    <div className="cart_card">
      <div className="cart_item">
        <div className="image">
          <img
            src="http://cdng.arora.pro/upload/57605119-91bb-4c26-aded-c31b450f1c37/size-2/d0e6b842-40df-462e-aa5c-adcc011d6b51.jpg"
            alt=""
          />
        </div>
        <div className="cart_info">
          <div className="cart_summary">
            <h4>Сет Трио</h4>
          </div>
          <div className="cart_ingredients">
            <span>
              <b>Состав: </b>Роллы: Тунец Креветка с авокадо, Филадельфия с
              авокадо и огурцом, Филадельфия с Копчёным Угрём
            </span>
          </div>
        </div>
        <div className="cart_price">
          <span> 2960 ₽ </span>
        </div>
        <div className="count">
          <span className="increments_button">
            <BsPlusLg />
          </span>
          <span>1</span>
          <span className="decrements_button">
            <BsDashLg />
          </span>
        </div>
        <div className="sum">
          <span> 2690 ₽ </span>
        </div>
        <span className="delete">
          <BsXLg />
        </span>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  totalPrice: PropTypes.number,
};

export default CartItem;
