import React, { useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

export const WeddingBanner = () => {
  const {imgAssetsUrl} = useContext(UserContext)
  return (
    <>
      <div className="banner-main engment-banner-sec wedding-banner">
        <div className="inner-banner-img">
          <LazyLoadImage className="desktop" src={`${imgAssetsUrl}/frontend/images/weddingbanner33.jpg`} alt="wedding-banner" effect="blur" width="auto"  height="auto"  />
          <LazyLoadImage className="mobile"  src={`${imgAssetsUrl}/frontend/images/wedding-band-mob.jpg`} alt="wedding-banner2" effect="blur" width="auto"  height="auto"  />
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
                    <Link to="#"> Wedding Bands</Link>
                  </li>
                </ul>
              </div>

              <h1>Wedding Rings & Bands</h1>
              <span>
                Discover SAMA designs to match your one-of-a-kind style!
              </span>
              <div className="btn-bar">
                <Link className="button" to="/wedding-band/women/curved-bands">
                  Shop Wedding Bands
                </Link>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};
