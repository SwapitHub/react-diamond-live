import React, { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

export const OwnEngagementRing = ({ covetedProducts }) => {
  const {imgAssetsUrl} = useContext(UserContext)
  return (
    <section className="own-engagment">
      <div className="container">
        <div className="inner-own-eng">
          <div className="heading-sec">
            <h2 className="heading-text">Design Your Own Engagement Ring</h2>
          </div>
          <div className="ring-grid-sec">
            <div className="grid-wrapper-bar">
              <Link to="/engagement-rings/start-with-a-setting">
                <div className="img-bar">
                  <LazyLoadImage  width="auto"  height="auto"   src={`${imgAssetsUrl}/frontend/images/ring1.png`} alt="engagement-ring" effect="blur"/>
                </div>
                <div className="contant-bar">
                  <h5>Start with a Setting</h5>
                </div>
              </Link>
            </div>
            <div className="grid-wrapper-bar">
              <Link to="/engagement-rings/start-with-a-diamond">
                <div className="img-bar">
                  <LazyLoadImage  width="auto"  height="auto"   src={`${imgAssetsUrl}/frontend/images/ring2.png`} alt="diamonds" effect="blur"/>
                </div>
                <div className="contant-bar">
                  <h5>Start with a Natural Diamond</h5>
                </div>
              </Link>
            </div>
            <div className="grid-wrapper-bar">
              <Link to="/engagement-rings/start-with-a-diamond/lab_grown">
                <div className="img-bar">
                  <LazyLoadImage  width="auto"  height="auto"   src={`${imgAssetsUrl}/frontend/images/ring3.png`} alt="lab-diamonds" effect="blur"/>
                </div>
                <div className="contant-bar">
                  <h5>Start with a Lab Diamond</h5>
                </div>
              </Link>
            </div>
            <div className="grid-wrapper-bar">
              <Link to="/engagement-rings/start-with-a-gemstone">
                <div className="img-bar">
                  <LazyLoadImage  width="auto"  height="auto"   src={`${imgAssetsUrl}/frontend/images/ring4.png`} alt="gemstones" effect="blur"/>
                </div>
                <div className="contant-bar">
                  <h5>Start with a Gemstone</h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="popular-engagment">
          <div className="heading-sec">
            <h2 className="heading-text">
              Most Coveted Engagement Ring Styles
            </h2>
          </div>
          <div className="inner-polular-eng">
            {covetedProducts?.map((item) => {
              return (
                <div className="popular-grid-wrapper" key={item.slug}>
                  <Link to={`/engagement-ring/${item?.slug}?color=18k-white-gold`}>
                    <div className="imgg-sec">
                      <LazyLoadImage  width="auto"  height="auto"   src={item?.default_image_url} alt={item?.name} effect="blur"/>
                    </div>
                    <div className="text-con">
                      <p>{item?.name}</p>
                    </div>
                  </Link>
                </div>
              );
            })}

            
          </div>
        </div>
      </div>
    </section>
  );
};
