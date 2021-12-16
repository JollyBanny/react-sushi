import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchSushi } from "../redux/actions/foods";

import { CatalogItem } from "../components";

function Catalog() {
  const { categoryBy } = useSelector(({ category }) => category);
  const items = useSelector(({ foods }) => foods.items);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchSushi(categoryBy));
  }, [dispatch, categoryBy]);

  return (
    <div className="catalog">
      <h4>{categoryBy.name}</h4>
      <div className="container">
        <div className="cards">
          {items && items.map((obj) => <CatalogItem key={obj.id} {...obj} />)}
        </div>
      </div>
    </div>
  );
}

export default Catalog;
