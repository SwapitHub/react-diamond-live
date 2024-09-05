import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { UserContext } from "../../App";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const DiamondBanner = () => {
  const { baseUrl, imgAssetsUrl } = useContext(UserContext);

  

  return (
    <>
      <div className="banner-main engment-banner-sec diamond">
        <div className="bg-bannerr inner-banner-img">
          <LazyLoadImage  width="auto"  height="auto"   className="desktop" src={`${imgAssetsUrl}/frontend/images/dmddgrp.jpg`} alt="diamond" effect="blur" />
          <LazyLoadImage  width="auto"  height="auto"   className="mobile"  src={`${imgAssetsUrl}/frontend/images/diamond-banner.jpg`} alt="diamond" loading="lazy" />

        </div>
        <div className="container min-ht">
          <div className=" banner flex min-ht">
            <div className="banner-text min-ht">
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
                    <Link to="/diamond"> Diamonds</Link>
                  </li>
                </ul>
              </div>

              <h1> Diamonds</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                quisquam.
              </span>
              <div className="btn-bar">
                <Link
                  className="button"
                  to="/engagement-rings/start-with-a-diamond"
                >
                  Shop Natural Diamonds
                </Link>
                <Link
                  className="button bg-trans"
                  to="/engagement-rings/start-with-a-diamond/lab_grown"
                >
                  Shop Lab Diamonds
                </Link>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};
