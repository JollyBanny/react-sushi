import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div class="footer">
      <div class="container">
        <div class="footer_left">
          <div class="fuji">
            <span>FUJI SUSHI - доставка японской премиум еды в Невельске</span>
          </div>
          <div class="policy">
            <Link to="/"> Политика конфиденциальности </Link>
          </div>
          <div class="developer">
            <a href="https://www.instagram.com/_bollodecanela/">
              Разработка сайта - bollodecanela
            </a>
          </div>
        </div>
        <div class="footer_right">
          <div class="pay">
            <span>Мы принимаем:</span>
            <div class="payment_system">
              <img
                src="https://yoji-cdn.arora.pro/upload/57605119-91bb-4c26-aded-c31b450f1c37/file_manager/theme/mastercard-classic.svg?I=141021"
                alt=""
              />
              <img
                src="https://yoji-cdn.arora.pro/upload/57605119-91bb-4c26-aded-c31b450f1c37/file_manager/theme/visa-classic.svg?I=141021https://yoji-cdn.arora.pro/upload/57605119-91bb-4c26-aded-c31b450f1c37/file_manager/theme/visa-classic.svg?I=141021"
                alt=""
              />
            </div>
          </div>
          <div class="insta">
            <span>Следите за нами в Instagram</span>
            <a href="https://www.instagram.com/_bollodecanela/">
              <i class="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
