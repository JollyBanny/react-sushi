import React from "react";
import { Link } from "react-router-dom";

import cartSvg from "../assets/img/cart.svg";

function HeaderCart() {
  return (
    <div className="menu-cart">
      <Link to="/cart" className="button button-cart">
        <span>520 ₽</span>
        <div className="button-delimiter"></div>
        <img src={cartSvg} alt="" />
        <span>3</span>
      </Link>
    </div>
  );
}

export default HeaderCart;
