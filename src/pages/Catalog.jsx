import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchSushi } from "../redux/actions/sushi";

import { CatalogItem, CatalogItemLoad } from "../components";

function Catalog() {
  const categoryBy = useSelector(({ category }) => category.categoryBy);
  const { items, isLoaded } = useSelector(({ sushi }) => sushi);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchSushi(categoryBy));
  }, [dispatch, categoryBy]);

  return (
    <div className="catalog">
      <h4>{categoryBy.name}</h4>
      <div className="container">
        <div className="cards">
          {isLoaded
            ? items.map((obj) => <CatalogItem key={obj.id} {...obj} />)
            : Array(4)
                .fill(0)
                .map((_, index) => <CatalogItemLoad key={index} />)}
        </div>
      </div>
    </div>
  );
}

export default Catalog;
