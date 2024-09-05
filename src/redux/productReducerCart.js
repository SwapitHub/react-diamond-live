import { SET_CART_LIST } from "./constant";

export const productDataCart = (data = [], action) => {
  switch (action.type) {
    // case PRODUCT_LIST:
    //   console.warn("product list condition ", action);
    //   return [...action.data];

    case SET_CART_LIST:
      console.warn("product list cart Condition ", action);
      return action.data;

    default:
      return data;
  }
};
