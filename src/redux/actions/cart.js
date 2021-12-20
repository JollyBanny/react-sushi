export const addItemToCart = (sushiObj) => ({
  type: "ADD_ITEM_CART",
  payload: sushiObj,
});

export const removeCartItem = (id) => ({
  type: "REMOVE_CART_ITEM",
  payload: id,
});

export const plusCartItem = (id) => ({
  type: "PLUS_CART_ITEM",
  payload: id,
});

export const minusCartItem = (id) => ({
  type: "MINUS_CART_ITEM",
  payload: id,
});
