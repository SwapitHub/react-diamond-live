import { PRODUCT_LIST, PRODUCT_LIST_CART, SET_PRODUCT_LIST } from "./constant";

export const productList = () => {
  console.warn("productList Called");
  return {
    type: PRODUCT_LIST,
  };
};

export const productListCart = () => {
  console.warn("product cart Called");
  return {
    type: PRODUCT_LIST_CART,
  };
};
