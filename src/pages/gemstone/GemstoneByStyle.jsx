import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import SlickSlider from "react-slick";

export const GemstoneByStyle = ({ gemstoneBands }) => {
  const moreGemstoneSliderColor = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };
  return (
    <section
      className="own-engagment own-pd-control shop-by-color-slider-section"
    >
      <div className="container">
        <div className="popular-engagment">
          <div className="heading-sec">
            <h2 className="heading-text">Shop By Color</h2>
          </div>
          <div className="inner-polular-eng shop-by-color-slider-main">
            <SlickSlider
              {...moreGemstoneSliderColor}
              responsive={[
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: true,
                  },
                },

                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                  },
                },
                {
                  breakpoint: 375,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                  },
                },
              ]}
            >
              {gemstoneBands?.gemstone_color?.map((item, i) => {
                return (
                  <>
                    <div className="popular-grid-wrapper" key={i}>
                      <Link to={`/gemstone/color/${item.name}`}>
                        <div className="imgg-sec">
                          <LazyLoadImage src={item.image} alt={item.name} effect="blur" width="auto"  height="auto"  />
                        </div>
                        <div className="text-icon">
                          <p>{item.name}</p>
                        </div>
                      </Link>
                    </div>
                  </>
                );
              })}
            </SlickSlider>
          </div>
        </div>
      </div>
    </section>
  );
};
