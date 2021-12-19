const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SUSHI_CART": {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      const totalSushi = [].concat.apply([], Object.values(newItems));
      const totalPrice = totalSushi.reduce((sum, obj) => obj.price + sum, 0);
      return {
        ...state,
        items: newItems,
        totalCount: totalSushi.length,
        totalPrice: totalPrice,
      };
    }

    default:
      return state;
  }
};

export default cart;
