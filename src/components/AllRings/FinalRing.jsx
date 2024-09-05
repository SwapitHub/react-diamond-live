import axios from "axios";
import debounce from "lodash.debounce";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { MdEmail, MdMarkEmailRead } from "react-icons/md";
import { RiTruckLine } from "react-icons/ri";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Popup from "reactjs-popup";
import { v4 as uuidv4 } from "uuid";
import { UserContext } from "../../App";
import { addToCart, addToWishList, removeToWishlist } from "../../redux/action";
import { productList, productListCart } from "../../redux/productAction";
import { useData } from "../context/DataContext";
import { DropHint } from "../forntFiles/DropHint";

import { MetaTagCategoryPage } from "../../seoTags/MetaTagCategoryPage";
import secureLocalStorage from "react-secure-storage";
import { Tabbing } from "./reusable_components/Tabbing";

export const FinalRing = () => {
  const [removeWishList, setRemoveWishList] = useState();
  const dispatch = useDispatch();
  const wishListDataBase = useSelector((state) => state.productDataWishlist);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nwProductSlug = useParams();
  var productSlug = nwProductSlug?.slug;

  const productColor = queryParams.get("color");
  const textEngraving = queryParams.get("textEngraving");
  const font_style = queryParams.get("font_style");
  const metal_type_platinum = productColor === "Platinum" ? "Platinum" : "18kt";
  const metalColor_platinum = productColor === "Platinum" ? "White" : "";
  const listColor = queryParams.get("color");
  const diamond_original = queryParams.get("diamond_original");
  const [labGrownDetails, setLabGrownDetails] = useState();
  const { baseUrl ,imgBaseUrl, imgAssetsUrl} = useContext(UserContext);
  const stock_num = queryParams.get("stock_num");
  const type_diamond = queryParams.get("diamond_origin");
  const ring_size = queryParams.get("ring_size");
  const [orderShow, setOrderShow] = useState({});
  const [toggle, setToggle] = useState({});
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [shapeData, setShapeData] = useState([]);
  const [metalColorShow, setMetalColorShow] = useState("white");
  useEffect(() => {
    switch (listColor) {
      case "18k-white-gold":
        setMetalColorShow("white");
        break;
      case "18k-yellow-gold":
        setMetalColorShow("yellow");
        break;
      case "18k-rose-gold":
        setMetalColorShow("rose");
        break;
      case "platinum":
        setMetalColorShow("white");
        break;
      default:
        setMetalColorShow("white");
        break;
    }
  }, [listColor]);


  const user_id = secureLocalStorage.getItem("formData");
  const diamondData = Object.assign({}, ...data);
  const ring_diamond = "ring_diamond";
  useMemo(() => {
    const fetchData = async () => {
      const url = `https://apiservices.vdbapp.com//v2/diamonds?type=${
        type_diamond == "natural" ? "Diamond" : "Lab_grown_Diamond"
      }&stock_num=${stock_num}`;
      const params = {
        stock_item_type: "Diamond",
        status: "pending",
        page_number: 1,
        page_size: 1,
      };

      const headers = {
        Authorization:
            "Token token=CX7r3wiul169qAGnMjzlZm8iEpJIMAgks_IgGD0hywg, api_key=_amT48wMLQ3rh4SP1inCzRQ",
      };

      try {
        const response = await axios.get(url, { params, headers });
        setData(response.data.response.body.diamonds);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleOrderShow = (index) => {
    setToggle((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const orderShowToggle = (index) => {
    setOrderShow((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  useEffect(() => {
    if (open) {
      document.body.classList.add("popup-open");
    } else {
      document.body.classList.remove("popup-open");
    }
  }, [open]);

  const options = [
    { value: "Less than 3", label: "Less than 3" },
    { value: "3", label: "3" },
    { value: "3 1/2", label: "3 1/2" },
    { value: "4", label: "4" },
    { value: "4 1/2", label: "4 1/2" },
    { value: "5", label: "5" },
    { value: "5 1/2", label: "5 1/2" },
    { value: "6", label: "6" },
    { value: "6 1/2", label: "6 1/2" },
    { value: "7", label: "7" },
    { value: "7 1/2", label: "7 1/2" },
    { value: "8", label: "8" },
    { value: "8 1/2", label: "8 1/2" },
    { value: "9", label: "9" },
    { value: "9 1/2", label: "9 1/2" },
    { value: "10", label: "10" },
    { value: "10 1/2", label: "10 1/2" },
    { value: "11", label: "11" },
    { value: "11 1/2", label: "11 /12" },
    { value: "12", label: "12" },
    { value: "Greater than 12", label: "Greater than 12" },
  ];

  const sortOptions = [
    { value: "Highest Rating", label: "Highest Rating" },
    { value: "Lowest Rating", label: "Lowest Rating" },
    { value: "Newest", label: "Newest" },
    { value: "Oldest", label: "Oldest" },
    { value: "Most Helpful", label: "Least Helpful" },
    { value: "Least Helpful", label: "Least Helpful" },
  ];

  // ===============ring details Api==============

  const [filterData, setFilterData] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const white = "18k-white-gold";
  const yellow = "18k-yellow-gold";
  const rose = "18k-rose-gold";
  const platinum = "platinum";

  useMemo(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/product/${productSlug}`);

        const product = response.data.data;
        const imgUrl = product.internal_sku;
          

        // Update state with both product and imgUrl
        setFilterData({
          product: product,
          imgUrl: imgUrl,
        });

        const similarProductsData = JSON.parse(product.similar_products);
        setSimilarProducts(similarProductsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [productSlug]);
  // ring api details Api end

  // =======================
  const userId = secureLocalStorage.getItem("formData");
 
  // ================cart post method
  // ================cart post method

  const handleCreateAccount = async (
    ring_price,
    ring_id,
    ring_data,
    ring_img,
    ring_color,
    diamond_id,
    diamondItem,
    diamond_price,
    userId,
    metalType,
    metalColor,
    product_type,
    ring_type,
    ring_size,
    event,
    diamond_stock_no,
    textEngraving,
    font_style
  ) => {
  
    const newItem = {
      ring_data,
      ring_img,
      ring_color,
      ring_price,
      diamondItem,
      qty: 1,
      uniqueId: uuidv4(),
      ring_type,
      ring_size,
      type_diamond,
      textEngraving,
      font_style,
      product_type,
    };

    dispatch(addToCart(newItem));

    const formData = {
      user_id: userId,
      ring_price: ring_price,
      ring_id: ring_id,
      ring_color: ring_color,
      diamond_id: diamond_id,
      diamond_price: diamond_price,
      img_sku: ring_img,
      metalType: metalType,
      metalColor: metalColor,
      product_type: product_type,
      ring_type: ring_type,
      ring_size: ring_size,
      diamond: diamondItem,
      diamond_stock_no: diamond_stock_no,
    };
    secureLocalStorage.setItem("cart_data", JSON.stringify(formData));



    const URL_2 = `${baseUrl}/cart?user_id=${formData.user_id}&ring_price=${
      formData.ring_price
    }&ring_id=${formData.ring_id}&ring_color=${
      formData.ring_color
    }&diamond_id=${formData.diamond_id}&diamond_price=${
      formData.diamond_price
    }&img_sku=${formData.img_sku}&metalType=${formData.metalType}&metalColor=${
      formData.metalColor
    }&product_type=${formData.product_type}&ring_type=${
      formData.ring_type
    }&ring_size=${formData.ring_size}&diamond_type=${
      type_diamond == "lab_grown" ? "Lab_grown_Diamond" : "Diamond"
    }&diamond_stock_no=${
      formData.diamond_stock_no
    }${textEngraving ? `&engraving=${textEngraving}`: ""}${font_style ? `&font=${font_style}`:""}`;



    axios
      .get(URL_2, {
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": shapeData,
        },
      })
      .then((response) => {
        if (response.status === 200) {

          dispatch(productListCart());
        } else {
          console.error("Error Status:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useMemo(() => {
    axios
      .get(
        "http://ec2-3-18-62-57.us-east-2.compute.amazonaws.com/admin/api/csrf-token"
      )
      .then((res) => {
        setShapeData(res.data.csrf_token);
      })
      .catch((error) => {
        console.log("CSRF Token API Error:", error);
      });
  }, []);

  // ===========
  const [ringPrice, setRingPrice] = useState({});

  useEffect(() => {
    // Update active price when productColor changes
    switch (productColor) {
      case "18k-white-gold":
        setRingPrice(filterData.product?.white_gold_price);
        break;
      case "18k-yellow-gold":
        setRingPrice(filterData.product?.yellow_gold_price);
        break;
      case "18k-rose-gold":
        setRingPrice(filterData.product?.rose_gold_price);
        break;
      case "platinum":
        setRingPrice(filterData.product?.platinum_price);
        break;
      default:
        setRingPrice(0);
    }
  });



  const wishlist = useSelector((state) => state.wishlistData);

 

  const handleWishlist = async (
    item,
    diamond,
    diamondItem,
    user_id,
    product_type,
    ring_id,
    ring_color,
    ring_price,
    imgSku,
    diamond_id,
    diamond_price,
    diamond_stock_no,
    ring_size,
    textEngraving,
    font_style
  ) => {
    const removingItem = {
      ringPrice: ringPrice,
      product_id: filterData.product?.id,
      ring_data: filterData.product,
      ring_img: filterData.imgUrl,
      ring_color: productColor,
      stock_num: diamondItem.stock_num,
      diamondItem: diamondItem,
      totalSalesPrice: diamondItem.total_sales_price,
      uniqueId: uuidv4(),
      textEngraving,
      font_style,
    };

    const newItem = {
      item,
      diamond,
      removingItem: removingItem,
      product_type: product_type,
      ring_size: ring_size,
      uniqueId: uuidv4(),
      type_diamond,
      textEngraving,
      font_style,
      ring_type: diamond_original,
      ring_price,
      img_sku: imgSku,
      ring_color,
    };
    dispatch(addToWishList(newItem));
    

    const formData = {
      user_id: user_id,
      product_type: product_type,
      ring_id: ring_id,
      ring_color: ring_color,
      ring_price: ring_price,
      img_sku: imgSku,
      diamond_id: diamond_id,
      diamond_price: diamond_price,
      diamond_stock_no: diamond_stock_no,
      ring_size: ring_size,
    };

    axios
      .get(
        `${baseUrl}/add_to_wishlist?user_id=${formData.user_id}&ring_price=${
          formData.ring_price
        }&ring_id=${formData.ring_id}&ring_color=${
          formData.ring_color
        }&product_type=${formData.product_type}&img_sku=${
          formData.img_sku
        }&diamond_price=${formData.diamond_price}&diamond_id=${
          formData.diamond_id
        }&diamond_stock_no=${
          formData.diamond_stock_no
        }&ring_type=${diamond_original}&ring_size=${
          formData.ring_size
        }&diamond_type=${
          type_diamond == "lab_grown" ? "Lab_grown_Diamond" : "Diamond"
        }${textEngraving ? `&engraving=${textEngraving}`: ""}${font_style ? `&font=${font_style}`:""}`,

        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": tokenData,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch(productList());
        } else {
          console.error("Error Status:", response.status);
        }
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const [tokenData, setTokenData] = useState();
  useMemo(() => {
    axios
      .get(
        "http://ec2-3-18-62-57.us-east-2.compute.amazonaws.com/admin/api/csrf-token"
      )
      .then((res) => {
        setTokenData(res.data.csrf_token);
      })
      .catch((error) => {
        console.log("CSRF Token API Error:", error);
      });
  }, []);

  useMemo(() => {
    const fetchData = () => {
      const removeWish = `${baseUrl}/remove_wishlist_item/${removeWishList}`;
     
      axios
        .get(removeWish)
        .then((res) => {
          dispatch(productList());
        })
        .catch((error) => {
          console.log("CSRF Token API Error:", error);
        });
    };

    const debouncedFetchData = debounce(fetchData, 50); // Adjust delay as needed (in milliseconds)

    if (removeWishList !== null) {
      debouncedFetchData();
    }

    return () => debouncedFetchData.cancel(); // Cleanup
  }, [removeWishList]);

  

  function handleWishlistRemove(belowItem, diamondItem) {
    wishlist.map((item) => {
      if (diamondItem?.id === item.diamond?.id) {
        dispatch(removeToWishlist(item));
      
      }
    });

    const values = Object.values(wishListDataBase);
    values.forEach((item) => {
      if (belowItem?.id === item?.ring_id) {
        setRemoveWishList(item?.id);
      }
    });
  }
  // ============ price  lab_grown =======================//
  useEffect(() => {

    let api = `${baseUrl}/get_product_price?product_sku=${filterData.product?.sku}&metalType=${listColor === "platinum" ? "Platinum" : "18kt"}&metalColor=${metalColorShow}&diamond_type=${diamond_original}`;
    
    const debouncedApiCall = debounce(() => {
      axios.get(api)
        .then((response) => {
          if (response.status === 200) {
            setLabGrownDetails(response.data.data);
          } else {
            console.error("Error Status:", response.status);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, 500); 

   
    debouncedApiCall();

    
    return () => {
      debouncedApiCall.cancel();
    };
  }, [
    baseUrl,
    filterData.product?.sku,
    metalColorShow,
    diamond_original,
    listColor,
  ]);
 
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.toLocaleString("default", {
    month: "long",
  });

  const currentDay = currentDate.getDate();
  const currentFinalDate = new Date(currentDate);
  currentFinalDate.setDate(
    currentFinalDate.getDate() + parseInt(filterData.product?.shippingDay)
  );
  const formattedDate = currentFinalDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const navigate = useNavigate();
  const { setHelpData } = useData();

  const handleClick = (diamond) => {
    secureLocalStorage.setItem(
      "helpData",
      JSON.stringify({
        filterData: filterData,
        listColor: listColor,
        diamond: diamond,
        diamond_original: diamond_original,
        diamond_origin: type_diamond,
        ring_size : ring_size,
        font: font_style,
        engraving: textEngraving
      })
    );
    setHelpData({
      filterData: filterData,
      listColor: listColor,
      diamond: diamond,
      diamond_original: diamond_original,
      diamond_origin: type_diamond,
      ring_size : ring_size,
      font: font_style,
      engraving: textEngraving
    });
    navigate("/help");
  };

  let wishlistIds = [];
  wishListDataBase.map((item) => {
    wishlistIds.push({
      diamond_stock_no: parseInt(item.diamond_stock_no),
      ring_id: parseInt(item.ring_id),
    });
  });

  let beforeLoginWishlistIds = [];
  wishlist.map((item) => {
    beforeLoginWishlistIds.push({
      diamond_id: parseInt(item.diamond?.id),
      ring_id: parseInt(item.item?.id),
    });
  });

  const [ringSize, setRingSize] = useState(false);
  useEffect(() => {
    if (ringSize) {
      document.body.classList.add("email-popup-open");
    } else {
      document.body.classList.remove("email-popup-open");
    }
  }, [ringSize]);


  // ============ meta tag  =======================//
  const currentUrl = window.location.href;
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);
  const mainCategory = pathSegments[0] || "";

  const handleError =(e)=>{
    e.target.onerror = null;
    e.target.src = `${imgAssetsUrl}/frontend/images/grayscalelogo.png`;
  }
  return (
    <>
      <MetaTagCategoryPage
        mainCategory={mainCategory}
        currentUrl={currentUrl}
      />

      <div className="sticky-right-column final-ring">
        <div className="container">
          {data.map((diamondItem, key) => {
            return (
              <>
                {/* ====================create your ring start */}
                <div className="main-arrow-heading">
                <Tabbing stock_num={stock_num} ringName={"1. Choose Rings"} ringLink={"/engagement-rings/start-with-a-setting"} diamondName={"2. Choose Diamonds"}  diamondLink={"/engagement-rings/start-with-a-diamond/"} type="ring-final"/>
                 
                </div>
                {/* ====================create your ring end */}
                <div className="sticky-inner-main">
                  <div className="left-product-images">
                    <ul className="product-list">
                      <li
                        className={
                          productColor === white ? "active" : "displayed"
                        }
                      >
                        <InnerImageZoom
                          imgAttributes={{alt: filterData.product?.name , onError: handleError}}
                          src={`${imgBaseUrl}/${filterData.imgUrl}/${filterData.imgUrl}.jpg`}
                          
                        />
                      </li>
                      <li
                        className={
                          productColor === yellow ? "active" : "displayed"
                        }
                      >
                        <InnerImageZoom
                          imgAttributes={{alt: filterData.product?.name , onError: handleError}}
                          src={`${imgBaseUrl}/${filterData.imgUrl}/${filterData.imgUrl}.alt.jpg`}
                        />
                      </li>
                      <li
                        className={
                          productColor === rose ? "active" : "displayed"
                        }
                      >
                        <InnerImageZoom
                          imgAttributes={{alt: filterData.product?.name , onError: handleError}}
                          src={`${imgBaseUrl}/${filterData.imgUrl}/${filterData.imgUrl}.alt1.jpg`}
                        />
                      </li>
                      <li
                        className={
                          productColor === platinum ? "active" : "displayed"
                        }
                      >
                        <InnerImageZoom
                          imgAttributes={{alt: filterData.product?.name , onError: handleError}}
                          src={`${imgBaseUrl}/${filterData.imgUrl}/${filterData.imgUrl}.jpg`}
                        />
                      </li>
                      <li>
                        <InnerImageZoom
                          imgAttributes={{alt: diamondItem?.shape , onError: handleError}}
                          src={diamondItem.image_url}
                        />
                      </li>

                      
                    </ul>
                  </div>
                  <div className="right-product-content">
                    <h4 className="heading-four border-botttom">
                      Your One-of-a-Kind Ring
                    </h4>
                    <p className="normal-statement">
                      The total diamond carat weight of your ring is
                      <span className="nowrap">{diamondItem.size} ct.</span>
                    </p>
                    <div className="seleted-items-purchage">
                      <div className="selected-inner-pair">
                        <div className="left-icon-image">
                          <img
                            src={`${imgAssetsUrl}/frontend/images/BlackRing.png`}
                            alt="Ring Icon"
                            width="auto"
                            height="auto"
                          onError={handleError}

                          />
                        </div>
                        <div className="right-purchage-icon-content">
                          <p>
                          {productColor?.replace(/-/g, " ")} {filterData.product?.name}
                          </p>
                          <p>
                            
                          </p>
                          <div className="name-price">
                            <div>
                              {/* <span>{filterData.product?.name}</span> */}
                            </div>

                            {diamond_original == "lab_grown"? (
                              <div className={`price-tabbing-common `}>
                                <span>
                                  {" "}
                                  ${Math.round(labGrownDetails?.price)}{" "}
                                </span>
                              </div>
                            ) : (
                              <div>
                                <div
                                  className={`price-common price-tabbing-common ${
                                    productColor === white ? "active" : ""
                                  }`}
                                >
                                  <span>
                                    {" "}
                                    $
                                    {Math.round(
                                      filterData?.product?.white_gold_price
                                    )}{" "}
                                  </span>
                                </div>
                                <div
                                  className={`price-common price-tabbing-common ${
                                    productColor === yellow ? "active" : ""
                                  }`}
                                >
                                  <span>
                                    {" "}
                                    $
                                    {Math.round(
                                      filterData?.product?.yellow_gold_price
                                    )}{" "}
                                  </span>
                                </div>
                                <div
                                  className={`price-common price-tabbing-common ${
                                    productColor === rose ? "active" : ""
                                  }`}
                                >
                                  <span>
                                    {" "}
                                    $
                                    {Math.round(
                                      filterData?.product?.rose_gold_price
                                    )}{" "}
                                  </span>
                                </div>

                                <div
                                  className={`price-common price-tabbing-common ${
                                    productColor === platinum ? "active" : ""
                                  }`}
                                >
                                  <span>
                                    {" "}
                                    $
                                    {Math.round(
                                      filterData?.product?.platinum_price
                                    )}{" "}
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="selected-inner-pair caret-rounded">
                        <div className="left-icon-image">
                          <img
                            src={`${imgAssetsUrl}/frontend/images/spark.png`}
                            alt="Diamond Icon"
                             width="auto"
                            height="auto"
                          onError={handleError}

                          />
                        </div>
                        <div className="right-purchage-icon-content">
                          <p>
                            <span>{diamondItem.size}</span> Carat{" "}
                            <span>{diamondItem.shape}</span> Diamond
                          </p>
                          <p>
                            {diamondItem.cut && 
                            <><span> {diamondItem.cut} Cut </span>  <span className="dots">•</span>{" "}</>}{" "}
                           
                            <span> {diamondItem.color} </span>{" "}
                            color <span className="dots">•</span>{" "}
                            <span> {diamondItem.clarity} </span> clarity
                          </p>
                          <span>
                            {" "}
                            ${Math.round(diamondItem.total_sales_price)}{" "}
                          </span>
                        </div>
                      </div>

                      <div className="setting-price-main">
                        {diamond_original == "lab_grown" ? (
                          <div className={`price-tabbing-common `}>
                            $
                            {Math.round(
                              parseFloat(labGrownDetails?.price) +
                                parseFloat(diamondItem?.total_sales_price)
                            )}
                          </div>
                        ) : (
                          <div className="setting-only-price">
                            <div
                              className={`price-common price-tabbing-common ${
                                productColor === white ? "active" : ""
                              }`}
                            >
                              <span>
                                $
                                {Math.round(
                                  parseFloat(
                                    filterData.product?.white_gold_price
                                  ) +
                                    parseFloat(diamondItem.total_sales_price) 
                                )}
                              </span>
                            </div>
                            <div
                              className={`price-common price-tabbing-common ${
                                productColor === yellow ? "active" : ""
                              }`}
                            >
                              <span>
                                $
                                {Math.round(
                                  parseFloat(
                                    filterData.product?.yellow_gold_price
                                  ) +
                                    parseFloat(diamondItem.total_sales_price) 
                                  
                                )}{" "}
                              </span>
                            </div>
                            <div
                              className={`price-common price-tabbing-common ${
                                productColor === rose ? "active" : ""
                              }`}
                            >
                              <span>
                                $
                                {Math.round(
                                  parseFloat(
                                    filterData.product?.rose_gold_price
                                  ) +
                                    parseFloat(diamondItem.total_sales_price) 
                                )}
                              </span>
                            </div>

                            <div
                              className={`price-common price-tabbing-common ${
                                productColor === platinum ? "active" : ""
                              }`}
                            >
                              <span>
                                $
                                {Math.round(
                                  parseFloat(
                                    filterData.product?.platinum_price
                                  ) +
                                    parseFloat(diamondItem.total_sales_price)
                                )}{" "}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="selected-inner-pair caret-rounded">
                        <div className="left-icon-image">
                          <img
                            src={`${imgAssetsUrl}/frontend/images/BlackRing.png`}
                            alt="Ring Icon"
                             width="auto"
                            height="auto"
                          onError={handleError}

                          />
                        </div>
                        <div className="right-purchage-icon-content">
                          <h4 className="media-heading">ENDS SOON!</h4>
                          <p className="media-text">
                            Lab Diamond Studs With Purchase Over $1,000.
                            Surprise Earrings With All Other Purchases.
                          </p>
                        </div>
                      </div>
                      <div className="purchage-select-box">
                        {/* <div className="select-custom-size-side">
                        <Select
                          defaultValue={selectedOption}
                          onChange={handleSelectSize}
                          options={options}
                          placeholder="Select Size"
                        />

                        <div onClick={() => togglePopup()}>
                          <span>
                            <IoInformationCircleOutline />
                          </span>
                          {ringSize && (
                            <div className="popup">
                              <RingSizeChart setRingSize={setRingSize} />
                            </div>
                          )}
                        </div>
                      </div> */}
                        {/* <p
                        id="error-message"
                        className="error"
                        style={{ color: "red" }}
                      ></p> */}
                        <div className="add-to-cart">
                          <Link
                            to="/cart"
                            onClick={(e) => {
                              // Validate input
                              // if (!selectedOption) {
                              //   document.getElementById(
                              //     "error-message"
                              //   ).innerText = "Please select the ring size.";
                              //   e.preventDefault(); // Prevent the default action (navigation)
                              //   return;
                              // }

                              // Proceed with adding to cart and navigation
                              handleCreateAccount(
                                diamond_original === "lab_grown"
                                  ? labGrownDetails?.price
                                  : ringPrice,
                                filterData.product?.id,
                                filterData.product,
                                filterData.imgUrl,
                                productColor,
                                diamondItem.stock_num,
                                diamondItem,
                                diamondItem.total_sales_price,
                                userId ? userId : null,
                                metal_type_platinum,
                                metalColor_platinum,
                                "ring_diamond",
                                labGrownDetails?.diamond_type,
                                ring_size,
                                e,
                                diamondItem?.id,
                                textEngraving,
                                font_style
                              );
                            }}
                          >
                            Add to bag
                          </Link>

                          <span className="heart-toggle-class">
                            <Link to="javascript:void(0);">
                              {" "}
                              {userId ? (
                                wishlistIds.some(
                                  (item) =>
                                    filterData?.product?.id === item.ring_id &&
                                    diamondItem?.id === item?.diamond_stock_no
                                ) ? (
                                  <IoMdHeart
                                    onClick={() =>
                                      handleWishlistRemove(
                                        filterData.product,
                                        diamondData
                                      )
                                    }
                                  />
                                ) : (
                                  <CiHeart
                                    onClick={
                                      () => {
                                        // if (!selectedOption) {
                                        //   document.getElementById(
                                        //     "error-message"
                                        //   ).innerText =
                                        //     "Please select the ring size.";
                                        //   return;
                                        // } else {
                                        handleWishlist(
                                          filterData?.product,
                                          diamondData,
                                          diamondItem,
                                          user_id,
                                          ring_diamond,
                                          filterData.product?.id,
                                          productColor,
                                          diamond_original === "lab_grown"
                                            ? labGrownDetails?.price
                                            : productColor === white
                                            ? filterData.product
                                                ?.white_gold_price
                                            : productColor === yellow
                                            ? filterData.product
                                                ?.yellow_gold_price
                                            : productColor === rose
                                            ? filterData.product
                                                ?.rose_gold_price
                                            : filterData.product
                                                ?.platinum_price,
                                          filterData.imgUrl,
                                          diamondItem?.stock_num,
                                          diamondData?.total_sales_price,
                                          diamondItem?.id,
                                          ring_size,
                                          textEngraving,
                                          font_style
                                        );
                                      }
                                      // }
                                    }
                                  />
                                )
                              ) : beforeLoginWishlistIds.some(
                                  (item) =>
                                    filterData?.product?.id === item?.ring_id &&
                                    diamondItem?.id === item?.diamond_id
                                ) ? (
                                <IoMdHeart
                                  onClick={() =>
                                    handleWishlistRemove(
                                      filterData.product,
                                      diamondData
                                    )
                                  }
                                />
                              ) : (
                                <CiHeart
                                  onClick={() => {
                                    // if (!selectedOption) {
                                    //   document.getElementById(
                                    //     "error-message"
                                    //   ).innerText =
                                    //     "Please select the ring size.";
                                    //   return;
                                    // } else {
                                    handleWishlist(
                                      filterData?.product,
                                      diamondData,
                                      diamondItem,
                                      user_id,
                                      ring_diamond,
                                      filterData.product?.id,
                                      white,
                                      diamond_original === "lab_grown"
                                        ? labGrownDetails?.price
                                        : productColor === white
                                        ? filterData.product?.white_gold_price
                                        : productColor === yellow
                                        ? filterData.product?.yellow_gold_price
                                        : productColor === rose
                                        ? filterData.product?.rose_gold_price
                                        : filterData.product?.platinum_price,
                                      filterData.imgUrl,
                                      diamondItem?.stock_num,
                                      diamondData?.total_sales_price,
                                      diamondItem?.id,
                                      ring_size,
                                      textEngraving,
                                      font_style
                                    );
                                    // }
                                  }}
                                />
                              )}
                            </Link>
                          </span>
                        </div>
                      </div>

                      <div className="shipping-add">
                        <ul>
                          <li>
                            <RiTruckLine />
                          </li>
                          <li>
                            <Link to="javascript:void(0)">
                              {" "}
                              Free Shipping, Free 30 Day Returns
                            </Link>
                          </li>
                        </ul>

                        <div className="order-data">
                          <span>
                            <FaRegCalendarAlt />
                          </span>
                          <p>
                            {" "}
                            Order now and your order ships by {
                              currentMonth
                            }{" "}
                            {currentDay}, {currentYear}, {formattedDate}{" "}
                            depending on center diamond.
                          </p>
                        </div>
                      </div>
                      <div className="social-icons">
                        <ul>
                          <li>
                            <Link to="javascript:void(0);">
                              <Popup
                                trigger={
                                  <Link to="javascript:void(0);">
                                    <MdMarkEmailRead /> Drop Hint
                                  </Link>
                                }
                                open={open}
                                closeOnDocumentClick
                                onOpen={() => setOpen(true)}
                                onClose={() => setOpen(false)}
                                position="center"
                              >
                                <DropHint
                                  setOpen={setOpen}
                                  filterData={filterData}
                                  diamondItem={diamondItem}
                                  productColor={productColor}
                                />
                              </Popup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/help"
                              onClick={() => handleClick(diamondItem)}
                            >
                              <span>
                                <MdEmail />
                              </span>{" "}
                              Email Us
                            </Link>
                          </li>
                          <li>
                            <Link to="tel:609-507-0003">
                              <span>
                                <BiSolidPhoneCall />
                              </span>
                              609-507-0003
                            </Link>
                          </li>
                          {/* <li>
                          <Link to="javascript:void(0);">
                            <span>
                              <IoChatbubbleOutline />
                            </span>{" "}
                            chat
                          </Link>
                        </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
