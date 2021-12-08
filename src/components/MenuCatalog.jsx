import React from "react";
import { Link } from "react-router-dom";

import {
  sushi,
  desserts,
  drinks,
  gunkans,
  parts,
  rolls,
  salads,
  sashimi,
  sets,
  soups,
} from "../assets/img/catalog";

const catalogItems = [
  { name: "Cуши", link: "sushi", img: sushi },
  { name: "Роллы", link: "rolls", img: rolls },
  { name: "Сеты", link: "sets", img: sets },
  { name: "Гунканы", link: "gunkans", img: gunkans },
  { name: "Сашими", link: "sashimi", img: sashimi },
  { name: "Супы", link: "soups", img: soups },
  { name: "Салаты", link: "salads", img: salads },
  { name: "Десерты", link: "desserts", img: desserts },
  { name: "Напитки", link: "drinks", img: drinks },
  { name: "Комплектующие", link: "parts", img: parts },
];

function MenuCatalog() {
  return (
    <div className="catalog">
      <h4>Каталог</h4>
      <div className="container">
        <div className="catalog-items">
          {catalogItems.map((obj) => (
            <div className="card" key={`${obj.name}_${obj.img}`}>
              <div className="item">
                <div className="image">
                  <img src={obj.img} alt="" />
                </div>
                <div className="summary">
                  <Link to={`/catalog?category=${obj.link}`}>{obj.name}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuCatalog;
