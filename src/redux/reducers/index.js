import { combineReducers } from "redux";

import categoryReducer from "./category";
import foodsReducer from "./foods";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  category: categoryReducer,
  cart: cartReducer,
  foods: foodsReducer,
});

export default rootReducer;
