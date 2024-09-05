import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

export const productDataWishlist = (data = [], action) => {
  switch (action.type) {
    // case PRODUCT_LIST:
    //   console.warn("product list condition ", action);
    //   return [...action.data];

    case SET_PRODUCT_LIST:
      console.warn("product list condition ", action.data.data);
      return action.data.data;

    default:
      return data;
  }
};
