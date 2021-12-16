import React from "react";

function CatalogItem({ title, description, weight, price, superPrice, img }) {
  return (
    <div className="card">
      <div className="item">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="summary">
          <div className="title">
            <span>{title}</span>
          </div>
          <div className="ingredients">{description}</div>
        </div>
        <div className="price">
          <div className="price-bottom">
            <div className="value">
              <span>{weight} грамм</span>
            </div>
            {superPrice !== null ? (
              <div className="pr">
                <span className="bad-price">{price} ₽</span>
                <span>{superPrice} ₽</span>
              </div>
            ) : (
              <div className="pr">
                <span>{price} ₽</span>
              </div>
            )}
          </div>
          <button className="bottom-button">В корзину</button>
        </div>
      </div>
    </div>
  );
}

export default CatalogItem;
