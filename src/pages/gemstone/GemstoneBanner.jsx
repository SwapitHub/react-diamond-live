import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { UserContext } from "../../App";
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";

export const GemstoneBanner = () => {

  const {imgAssetsUrl } = useContext(UserContext);


  return (
    <>
      <div className="banner-main engment-banner-sec gemstone-banner">
        <div className="bg-bannerr inner-banner-img">
          <div className="desktop">
            <LazyLoadImage
              className="desktop"
              src={`${imgAssetsUrl}/frontend/images/gembanner.jpg`}
              alt="banner"
              effect="blur"
              width="auto"  height="auto"  
            />
          </div>
          <div className="mobile">
            <img
              className="mobile"
              src={`${imgAssetsUrl}/frontend/images/gemstone_banner.jpg`}
              alt="banner"
              effect="blur"
              width="auto"  height="auto"  
            />
          </div>
        </div>
        <div className="container min-ht">
          <div className=" banner flex min-ht">
            <div className="banner-text min-ht gemstone">
              <div className="breadcrum">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </li>
                  <li>
                    <Link to="#">Gemstones</Link>
                  </li>
                </ul>
              </div>

              <h1>Design Your Own Gemstone Ring</h1>
              <span>
                Lorem Ipsum is simply dummy text of the printing and industry.
              </span>
              <div className="btn-bar">
                <Link
                  className="button"
                  to="/gemstones/gemstone-shop-all"
                >
                  Start With a Gemstone
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};
