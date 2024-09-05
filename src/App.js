import { createContext, useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import LoaderSpinner from "./components/LoaderSpinner";
import { Routing } from "./components/Routing";
import { DataProvider } from "./components/context/DataContext";
import { Footer } from "./components/forntFiles/Footer";
import Header from "./components/forntFiles/Header3";
import "./pages/Style.css";
import { useLocation } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
export const UserContext = createContext(null);

function App() {
  const searchedItem = JSON?.parse(secureLocalStorage.getItem("searchedItem")) || "";
  const [cartDetails, setCartDetails] = useState();
  const [userId, setUserId] = useState();
  const [removeWishList, setRemoveWishList] = useState();
  const [searching, setSearching] = useState(searchedItem);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [showSuggestionHeader, setShowSuggestionHeader] = useState(false);
  const [loadingCart, setLoadingCart] = useState(false);
  const [toggle, setToggle] = useState(1);
  const baseUrl =
    "https://ec2-3-18-62-57.us-east-2.compute.amazonaws.com/admin/api/v1";
  const imgBaseUrl =
    "https://assets.rocksama.com/products/images";

  const imgAssetsUrl= 
  "https://assets.rocksama.com"

  const buttonRef = useRef(null);

  const triggerCart = () => {
    buttonRef.current.click();
  };

  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const ScrollToTopOnNavigate = () => {
    const location = useLocation();

    useEffect(() => {
      // Scroll to top after a delay
      const timeout = setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50);
      return () => clearTimeout(timeout);
    }, [location.pathname]);

    return null;
  };

  return (
    <>
      <div className="App">
        <UserContext.Provider
          value={{
            setCartDetails: setCartDetails,
            cartDetails: cartDetails,
            userId: userId,
            setUserId: setUserId,
            removeWishList: removeWishList,
            setRemoveWishList: setRemoveWishList,
            searching: searching,
            setSearching: setSearching,
            showSuggestion: showSuggestion,
            setShowSuggestion: setShowSuggestion,
            showSuggestionHeader: showSuggestionHeader,
            setShowSuggestionHeader: setShowSuggestionHeader,
            buttonRef: buttonRef,
            triggerCart: triggerCart,
            loadingCart: loadingCart,
            setLoadingCart: setLoadingCart,
            baseUrl: baseUrl,
            toggle: toggle,
            setToggle: setToggle,
            imgBaseUrl: imgBaseUrl,
            imgAssetsUrl:imgAssetsUrl,
          }}
        >
          {loading ? (
            <LoaderSpinner />
          ) : (
            <>
              <DataProvider>
                <ScrollToTopOnNavigate />
                <Header />
                <Routing />
                <Footer />
              </DataProvider>
            </>
          )}
          <ToastContainer
            className="toast-position"
            position="bottom-right"
          ></ToastContainer>
        </UserContext.Provider>
        {/* <PaymentGetWayForm/> */}
      </div>
    </>
  );
}

export default App;
