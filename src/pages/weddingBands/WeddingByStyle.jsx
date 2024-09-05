import React, { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

export const WeddingByStyle = () => {
  const {imgAssetsUrl} = useContext(UserContext)
  return (
    <section className="own-engagment wedding-style ">
      <div className="container">
        <div className="popular-engagment">
          <div className="heading-sec">
            <h2 className="heading-text">Shop Wedding Bands By Style</h2>
          </div>
          <div className="inner-polular-eng">
            <div className="popular-grid-wrapper">
              <Link to="/wedding-band/women/eternity-bands">
                <div className="imgg-sec">
                  <LazyLoadImage  width="auto"  height="auto"   src={`${imgAssetsUrl}/frontend/images/Eternity.png`} alt="eternity" effect="blur"/>
                </div>
                <div className="text-con">
                  <p>Eternity </p>
                </div>
              </Link>
            </div>
            <div className="popular-grid-wrapper">
              <Link to="/wedding-band/women/curved-bands">
                <div className="imgg-sec">
                  <LazyLoadImage  width="auto"  height="auto"   src={`${imgAssetsUrl}/frontend/images/Curved.png`} alt="curved" effect="blur"/>
                </div>
                <div className="text-con">
                  <p>Curved</p>
                </div>
              </Link>
            </div>
            <div className="popular-grid-wrapper">
              <Link to="/wedding-band/women/chevron">
                <div className="imgg-sec">
                  <LazyLoadImage  width="auto"  height="auto"   src={`${imgAssetsUrl}/frontend/images/Channel-Set.png`} alt="channel-set" effect="blur"/>
                </div>
                <div className="text-con">
                  <p>Chevron Bands</p>
                </div>
              </Link>
            </div>
            <div className="popular-grid-wrapper">
              <Link to="/wedding-band/women/twisted">
                <div className="imgg-sec">
                  <LazyLoadImage  width="auto"  height="auto"   src={`${imgAssetsUrl}/frontend/images/Twisted.png`} alt="twisted" effect="blur"/>
                </div>
                <div className="text-con">
                  <p>Twisted </p>
                </div>
              </Link>
            </div>
            <div className="popular-grid-wrapper">
              <Link to="/wedding-band/women/womens-wedding-ring">
                <div className="imgg-sec">
                  <LazyLoadImage  width="auto"  height="auto"   src={`${imgAssetsUrl}/frontend/images/Baguette.png`} alt="baguette" effect="blur"/>
                </div>
                <div className="text-con">
                  <p>All Women Rings</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
