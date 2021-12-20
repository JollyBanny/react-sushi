import React from "react";

import { BsPlusLg, BsDashLg } from "react-icons/bs";
import order from "../assets/img/order.png";

function OrderForm({ totalPrice }) {
  return (
    <div className="confirm">
      <form action="post">
        <fieldset>
          <legend>Персональная информация</legend>
          <div className="row">
            <label htmlFor="name" className="name">
              <span className="required-input">Имя</span>
              <input
                type="text"
                className="form-control"
                placeholder="Ваше имя"
                name="name"
                required
              />
            </label>
            <label htmlFor="telephone" className="phone">
              <span className="required-input">Телефон</span>
              <input
                type="text"
                className="form-control"
                required
                placeholder="Телефон"
                name="phone"
              />
            </label>
            <label htmlFor="email" className="email">
              <span className="required-input">Email</span>
              <input
                type="email"
                className="form-control"
                required
                placeholder="E-mail"
                name="email"
              />
            </label>
            <label htmlFor="cnt" className="cnt">
              <span>Кол-во приборов</span>
              <div className="row">
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="1"
                  name="cnt"
                />
                <div className="cnt-btn row">
                  <span className="decbutton">
                    <BsDashLg />
                  </span>
                  <span className="incbutton">
                    <BsPlusLg />
                  </span>
                </div>
              </div>
            </label>
          </div>
        </fieldset>
        <div className="row adress-block">
          <fieldset className="adress">
            <legend>Адрес доставки</legend>
            <label htmlFor="street" className="street">
              <span className="required-input">Улица</span>
              <input
                type="text"
                className="form-control"
                placeholder="Введите улицу"
                name="street"
                required
              />
            </label>
            <label htmlFor="house" className="house">
              <span className="required-input">Номер дома</span>
              <input
                type="text"
                className="form-control"
                required
                placeholder="Введите номер дома"
                name="house"
              />
            </label>
            <p>Дополнительная информация</p>
            <div className="row add-adress">
              <label htmlFor="entrance" className="entrance">
                <span className="input">Подъезд</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Подъезд"
                  name="entrance"
                />
              </label>
              <label htmlFor="floor" className="floor">
                <span className="input">Этаж</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Этаж"
                  name="floor"
                />
              </label>
              <label htmlFor="flat" className="flat">
                <span className="input">Квартира</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Квартира"
                  name="flat"
                />
              </label>
              <label htmlFor="comment" className="comment">
                <span className="input">Комментарий</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Введите комментарий"
                  name="comment"
                />
              </label>
            </div>
          </fieldset>
          <fieldset className="submit">
            <img src={order} alt="" />
            <div className="total_price">
              <span>Итого к оплате</span>
              <span className="total-sum">{totalPrice} ₽</span>
            </div>
            <input type="submit" className="sub" value="Оформить" />
          </fieldset>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
