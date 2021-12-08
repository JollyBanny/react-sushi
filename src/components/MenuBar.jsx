import React from "react";
import { Link } from "react-router-dom";

function MenuBar() {
  return (
    <ul class="menu-bar link-animate">
      <li>
        <Link to="/catalog?category=sushi">Суши</Link>
      </li>
      <li>
        <Link to="/catalog?category=rolls">Роллы</Link>
      </li>
      <li>
        <Link to="/catalog?category=sets">Сеты</Link>
      </li>
      <li>
        <Link to="/catalog?category=gunkans">Гунканы</Link>
      </li>
      <li>
        <Link to="/catalog?category=sashimi">Сашими</Link>
      </li>
      <li>
        <Link to="/catalog?category=soups">Супы</Link>
      </li>
      <li>
        <Link to="/catalog?category=salads">Салаты</Link>
      </li>
      <li>
        <Link to="/catalog?category=desserts">Десерты</Link>
      </li>
      <li>
        <Link to="/catalog?category=drinks">Напитки</Link>
      </li>
      <li>
        <Link to="/catalog?category=parts">Комплектующие</Link>
      </li>
    </ul>
  );
}

export default MenuBar;
