import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { UserContext } from "../../App";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const EngagementBanner = () => {

  const { baseUrl, imgAssetsUrl} = useContext(UserContext);
 

  return (
    <>
      <div className="banner-main engment-banner-sec" >

      <div className="inner-banner-img">
        <LazyLoadImage className="desktop" src={`${imgAssetsUrl}/frontend/images/Layer 45.png`} alt="engagement-rings" effect="blur" width="auto"  height="auto" />
        <LazyLoadImage className="mobile" src={`${imgAssetsUrl}/frontend/images/eing-mob.jpg`} alt="engagement-rings" effect="blur" width="auto"  height="auto" />
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
                    <Link to="#">Engagement Ring</Link>
                  </li>
                </ul>
              </div>

              <h1>Engagement Rings</h1>
              <span>
                Discover engagement ring settings to match your one-of-a-kind
                style!
              </span>
              <div className="btn-bar">
                <Link
                  className="button"
                  to="/engagement-rings/start-with-a-setting"
                >
                  Engagement Rings
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};
