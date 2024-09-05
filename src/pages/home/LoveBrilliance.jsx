import React, { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const LoveBrilliance = ({home}) => {
  const {imgAssetsUrl} = useContext(UserContext)
  return (
    <section className="love-bri-section">
      <div className="container">
        <div
          className="loves-inner"
          style={{ backgroundImage: `url(${imgAssetsUrl}/frontend/images/love-ring-back.png)` }}
        >
          <div className="love-left-image desktop">
            <LazyLoadImage src={home.section5?.image_desktop} alt="brilliance" effect="blur" width="auto"  height="auto"  />
          </div>
          <div className="love-left-image mobile"
          style={{ backgroundImage: `url(${imgAssetsUrl}/frontend/images/love-ring-back.png)` }}
          >
            <LazyLoadImage src={home.section5?.image_desktop} alt="brilliance" effect="blur" width="auto"  height="auto"  />
          </div>

          <div className="love-right-content">
            <h4>{home.section5?.subheading}</h4>
            <h3>{home.section5?.heading}</h3>
            <p>
            {home.section5?.description}
            </p>

            <Link class="btn explore" to={home.section5?.link}>
            {home.section5?.btn_name}
            </Link>
          </div>
        </div>


        
      </div>
    </section>
  );
};

export default LoveBrilliance;
