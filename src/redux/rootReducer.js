import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { wishlistData } from "./wishlistReducer";
import { productDataWishlist } from "./productReducer";
import { productDataCart } from "./productReducerCart";
import { compareData } from "./compareReducer";

export default combineReducers({
  cartData,
  wishlistData,
  productDataWishlist,
  productDataCart,
  compareData,
});
