import React from "react";
import { Link } from "react-router-dom";

import { MenuBar, Carousel } from "../components";

function Home() {
  return (
    <div class="main">
      <div class="menu">
        <div class="container">
          <MenuBar />
          <div class="menu-cart">
            <a href="/cart.html" class="button button-cart">
              <span>520 ₽</span>
              <div class="button-delimiter"></div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>3</span>
            </a>
          </div>
        </div>
      </div>
      <Carousel />
      <div class="catalog">
        <h4>Каталог</h4>
        <div class="container">
          <div class="catalog-items">
            <div class="card">
              <div class="item">
                <div class="image">
                  <img
                    src="https://yoji-cdn.arora.pro/upload/57605119-91bb-4c26-aded-c31b450f1c37/size-1/75cebfd5-649c-4bf8-9b94-adc901731eb5.jpg"
                    alt=""
                  />
                </div>
                <div class="summary">
                  <Link to="/catalog?category=sushi">Суши</Link>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="item">
                <div class="image">
                  <img
                    src="https://yoji-cdn.arora.pro/upload/57605119-91bb-4c26-aded-c31b450f1c37/size-1/0b5708f9-60c0-4fb2-b780-adb201724f69.jpg"
                    alt=""
                  />
                </div>
                <div class="summary">
                  <Link to="/catalog?category=rolls">Роллы</Link>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="item">
                <div class="image">
                  <img
                    src="https://yoji-cdn.arora.pro/upload/57605119-91bb-4c26-aded-c31b450f1c37/size-1/d0e6b842-40df-462e-aa5c-adcc011d6b51.jpg"
                    alt=""
                  />
                </div>
                <div class="summary">
                  <Link to="/catalog?category=sets">Сеты</Link>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="item">
                <div class="image">
                  <img
                    src="https://yoji-cdn.arora.pro/upload/57605119-91bb-4c26-aded-c31b450f1c37/size-1/11f46690-558f-41b9-8209-ad8000edfa70.jpg"
                    alt=""
                  />
                </div>
                <div class="summary">
                  <Link to="/catalog?category=gunkans">Гунканы</Link>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="item">
                <div class="image">
                  <img
                    src="https://yoji-cdn.arora.pro/upload/57605119-91bb-4c26-aded-c31b450f1c37/size-1/ffccb6e3-7dda-4dab-8eef-ad8001248dac.jpg"
                    alt=""
                  />
                </div>
                <div class="summary">
                  <Link to="/catalog?category=sashimi">Сашими</Link>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="item">
                <div class="image">
                  <img
                    src="https://yoji-cdn.arora.pro/upload/57605119-91bb-4c26-aded-c31b450f1c37/size-1/628db05a-8778-47ec-92e3-adb500067188.jpg"
                    alt=""
                  />
                </div>
                <div class="summary">
                  <Link to="/catalog?category=soups">Супы</Link>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="item">
                <div class="image">
                  <img
                    src="https://yoji-cdn.arora.pro/upload/57605119-91bb-4c26-aded-c31b450f1c37/size-1/9a014cf2-9c95-48d4-805d-adb1016b9df6.jpg"
                    alt=""
                  />
                </div>
                <div class="summary">
                  <Link to="/catalog?category=salads">Салаты</Link>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="item">
                <div class="image">
                  <img
                    src="https://yoji-cdn.arora.pro/upload/57605119-91bb-4c26-aded-c31b450f1c37/size-1/974d9258-45ff-4765-9140-ad8000f071f9.jpg"
                    alt=""
                  />
                </div>
                <div class="summary">
                  <Link to="/catalog?category=desserts">Десерты</Link>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="item">
                <div class="image">
                  <img
                    src="https://yoji-cdn.arora.pro/upload/57605119-91bb-4c26-aded-c31b450f1c37/size-1/43e91be9-e92a-4f06-a712-ad7100a868a9.jpg"
                    alt=""
                  />
                </div>
                <div class="summary">
                  <Link to="/catalog?category=drinks">Напитки</Link>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="item">
                <div class="image">
                  <img
                    width="270px"
                    height="235px"
                    src="https://avatars.mds.yandex.net/get-zen_doc/3415797/pub_6013d9b37fd0a5390fce4b63_6013da411dce1b4b96371cdb/scale_1200"
                    alt=""
                  />
                </div>
                <div class="summary">
                  <Link to="/catalog?category=parts">Комплектующие</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
