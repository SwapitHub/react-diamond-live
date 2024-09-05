import {
  ADD_TO_CART,
  REMOVE_CART_COUNT,
  REMOVE_FROM_CART,
  UPDATE_CART_COUNT
} from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD_TO_CART condition ", action);
      return [{ ...action.payload, qty: 1 }, ...data];
    case REMOVE_FROM_CART:
      console.warn("REMOVE_FROM_CART condition ", action);
      const remainingItems = data.filter(
        (item) => item.uniqueId !== action.data.uniqueId
      );
      return [...remainingItems];
    case UPDATE_CART_COUNT:
      return data.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            qty: action.payload.qty,
          };
        }
        return product;
      });

    case REMOVE_CART_COUNT:
      return data.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            qty: Math.max(action.payload.qty, 0),
          };
        }
        return product;
      });
      
    default:
      return data;
  }
};


