import React from "react";
import { Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCategory } from "../redux/actions/category";

import { Home, About, Delivery, Catalog } from "../pages";
import { Cart, MenuBar } from "../components";

function Pages() {
  const dispatch = useDispatch();
  const onSelectCategory = React.useCallback((category) => {
    dispatch(setCategory(category));
  }, [dispatch]);

  return (
    <div className="main">
      <div className="menu">
        <div className="container">
          <MenuBar onClickCategory={onSelectCategory} />
          <Cart />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home onClickCategory={onSelectCategory} />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/catalog" element={<Catalog />}>
          <Route path="/catalog/:id" element={<Catalog />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Pages;
