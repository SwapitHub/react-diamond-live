import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export const Banner = ({homeContext}) => {
  


  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <section className="banner-section">
        <div className="container">
          <div className="common-row banner">
            <Slider {...settings}>
              {
                homeContext.map((item, index) => (                  
                  <div className="banner-img-slider">
                  <div className="banner-ring-text-btn">
                  <h1>{item?.title}</h1>
                    <span>
                     {item?.subtitle}
                    </span>
                    <div className="banner-Rings">
                      <Link
                        className="button"
                        to="engagement-rings/start-with-a-setting"
                      >
                        {item?.btn_name}
                      </Link>
                    </div>
                  </div>
                  <LazyLoadImage src={item?.banner} alt={item?.btn_name} effect="blur" width="auto"  height="auto"  />
                </div>
                ))
              }
             

              
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
