import React, { useContext, useEffect, useState } from "react";
import engagementRing from "../../images/EngagementRing.png";
import { Link } from "react-router-dom";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import axios from "axios";
import { UserContext } from "../../App";

export const ShopCategory = () => {
  const {baseUrl} = useContext(UserContext)
  const ShopStyleSliderOuter = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  const [ShopByStyle, setShopStyle] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${baseUrl}/product-style`
      )
      .then((res) => {
        setShopStyle(res.data.data);
        // setActiveStyleIds(menuShapeName)
      })
      .catch(() => {
        console.log("shop style api error");
      });
  }, []);
  return (
    <>
      <div className="ShopCategory">
        <div className="container">
          <h3>Shop by category</h3>
          <div className="flex">
            <div class="column-width">

              <SlickSlider
                {...ShopStyleSliderOuter}
                responsive={[
                  {
                    breakpoint: 991,
                    settings: {
                      slidesToShow: 5,
                      slidesToScroll: 3,
                      infinite: true,
                    },
                  },
                  {
                    breakpoint: 639,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      infinite: true,
                    },
                  },

                  {
                    breakpoint: 375,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      infinite: true,
                    },
                  },
                ]}
              >
                {ShopByStyle.map((styleItem) => {
                  return (
                    <>
                      <Link
                        to={`/engagement-rings/${styleItem.alias}`}
                      >
                        <div className="shop-style-img">
                          <img src={styleItem.image} alt={styleItem.name}  width="auto"  height="auto"  />
                        </div>
                        <div className="shop-style-text">
                          <span>{styleItem.name}</span>
                        </div>
                      </Link>
                    </>
                  );
                })}
              </SlickSlider>
            </div>
          </div>


          

        </div>
      </div >

    </>
  );
};
