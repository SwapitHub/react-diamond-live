import { ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_CART_COUNT, REMOVE_FROM_CART, REMOVE_TO_WISHLIST, SET_CART_DETAILS, SET_WISHLIST_DETAILS, UPDATE_CART_COUNT } from "./constant"

export const addToCart = (data) => {
    console.warn("action is called", data)
    return {
        type: ADD_TO_CART,
        data: data, 
        payload: data
    }
}

export const removeToCart = (data) => {
    console.warn("action removeToCart", data)
    return {
        type: REMOVE_FROM_CART,
        data: data,
        payload: data
    }
}

export const updateCartCount = (payload) => {
    return {
        type: UPDATE_CART_COUNT,
        payload: payload,
    };
};

export const removeCartCount = (payload) => {
    return {
      type: REMOVE_CART_COUNT,
      payload: payload
    };
};

export const addToWishList = (data)=>{
    console.warn("Add to wishlist ",data);
    return{
        type: ADD_TO_WISHLIST,
        data: data,
        payload: data
    }

} 

export const removeToWishlist = (data) => {
    console.warn("action remove to wishlist", data)
    return {
        type: REMOVE_TO_WISHLIST,
        data: data,
        payload: data
    }
}

export const setCartDetails = (cartDetails) => {
    console.log("cartDetails action call",cartDetails)
    return {
        type: SET_CART_DETAILS,
        payload: cartDetails
    }
   
}

  export const setWishlistDetails = (wishlistDetails) => {
    console.log("wishlistDetails action call",wishlistDetails)
return {


    type: SET_WISHLIST_DETAILS,
    payload: wishlistDetails
  }
}