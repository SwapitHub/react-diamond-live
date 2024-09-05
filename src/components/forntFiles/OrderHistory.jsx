import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { toast } from 'react-toastify';
import { UserContext } from "../../App";
import { removeToCart, removeToWishlist } from "../../redux/action";


export const OrderHistory = ({setFormData}) => {
  const dispatch = useDispatch()
  const cartData = useSelector((state) => state.cartData);
  const wishlistData = useSelector((state) => state.wishlistData);
  const {setToggle} = useContext(UserContext);
 const navigate= useNavigate()
  const signOut = (event) =>{
    event.preventDefault();

    cartData.map((item) => {
      dispatch(removeToCart(item));
    });
    wishlistData.map((item) => {
      dispatch(removeToWishlist(item));
    });
    setTimeout(() => {
      navigate("/login");
      // window.location.reload(true)
    }, 3000);

    secureLocalStorage.clear();
    secureLocalStorage.removeItem("persist:persist-store");

    toast.success("Sign Out Successfully", {
      position: "top-right"
    });

    
  }
  return (
    <>
      <div className="order-history" id="user-log">
        <div className="container">
          <div className="order-history-main">
            <ul className="list-unstyled">
              <li>
                <Link to="/accounts" onClick={()=>setToggle(1)}>My Account</Link>
              </li>
              <li>
                <Link to="/accounts" onClick={()=>setToggle(2)}>Order History</Link>
              </li>
              <li>
                <Link to="/wishlist">Wish List</Link>
              </li>
            </ul>
            <div className="sign-btn">
              <button className="submit"
              onClick={(event) => signOut(event)}
              >sign out</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
