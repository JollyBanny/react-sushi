import React from "react";
import { OrderForm, CartItem } from "../components";

function Cart({ items }) {
  return (
    <div className="container">
      <div className="cart">
        <h1>Корзина</h1>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <OrderForm />
    </div>
  );
}

export default Cart;
