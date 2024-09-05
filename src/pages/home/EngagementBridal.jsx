import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import CustomizationForm from "../../components/AllRings/reusable_components/CustomizationForm";

export const EngagementBridal = ({ home }) => {
  const [isOpen, setIsOpen] = useState(false);


  const togglePopup = () => {
    setIsOpen(true);
    document.body.classList.toggle("customize-form-popup-open", isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("customize-form-popup-open");
    } else {
      document.body.classList.remove("customize-form-popup-open");
    }
  }, [isOpen]);
  return (
    <section className="EngagementBridal-main">
      <div className="container">
        <div className="flex common-row EngagementBridal">
          <div className="EngagementBridal-img">
            <LazyLoadImage
              src={home.section3?.image}
              alt="bridal"
              effect="blur" width="auto"  height="auto"  
            />
          </div>
          <div className="EngagementBridal-text">
            <h2>{home.section3?.heading}</h2>
            <p>{home.section3?.description}</p>

            <Link className="button" to={home.section3?.link}>
              {home.section3?.btn_name}
            </Link>
          </div>
        </div>

        <div className="flex common-row EngagementBridal-2">
          <div className="EngagementBridal-2-img">
            <LazyLoadImage
              src={home.section4?.image1}
              alt="bridal"
              effect="blur"
              width="auto"  height="auto"  
            />
          </div>
          <div className="EngagementBridal-2-img text">
            <p>{home.section4?.description}</p>
            <span>{home.section4?.heading}</span>
            <Link className="button" to="/custom-concierge">
              {home.section4?.btn_name}
            </Link>
              
            
          </div>
          <div className="EngagementBridal-2-img">
            <LazyLoadImage
              src={home.section4?.image2}
              alt="bridal"
              effect="blur"
              width="auto"  height="auto"  
            />
          </div>
        </div>
      </div>
    </section>
  );
};
