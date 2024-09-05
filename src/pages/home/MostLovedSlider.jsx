import axios from "axios";
import DOMPurify from "dompurify";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { UserContext } from "../../App";
export const MostLovedSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },


    ],
  };
  const {baseUrl} = useContext(UserContext)
  const [shapeData, setShapeData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${baseUrl}/homepage-data`
      )
      .then((res) => {
        setShapeData(res.data.data);
      })
      .catch(() => {
        console.log("API error");
      });
  }, []);
  

  return (
    <section
      className="mobile-Most-Loved-Engagement MostLoved"
    >
      <div className="container">
        <div className="mobile-ShopDiamondShape">
          <h2>Most Loved Engagement Rings</h2>
          <div className="">
            <Slider {...settings}>
              <div class="column-width">
                <Link to={shapeData.Bridal_sets?.url}>
                  <div className="MostLoved-img">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          shapeData.Bridal_sets?.description
                        ),
                      }}
                    ></span>
                  </div>
                  <h4>{shapeData.Bridal_sets?.name}</h4>
                </Link>
              </div>

              <div class="column-width">
              <Link to={shapeData.classic_rings?.url}>
                  <div className="MostLoved-img">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          shapeData.classic_rings?.description
                        ),
                      }}
                    ></span>
                  </div>
                  <h4>{shapeData.classic_rings?.name}</h4>
                </Link>
              </div>
              <div class="column-width">
              <Link to={shapeData.hidden_Halo_rings?.url}>
                  <div className="MostLoved-img">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          shapeData.hidden_Halo_rings?.description
                        ),
                      }}
                    ></span>
                  </div>
                  <h4>{shapeData.hidden_Halo_rings?.name}</h4>
                </Link>
              </div>
              <div class="column-width">
              <Link to={shapeData.lab_diamond_ring?.url}>
                  <div className="MostLoved-img">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          shapeData.lab_diamond_ring?.description
                        ),
                      }}
                    ></span>
                  </div>
                  <h4>{shapeData.lab_diamond_ring?.name}</h4>
                </Link>
              </div>
              <div class="column-width">
              <Link to={shapeData.hidden_Halo_rings?.url}>
                  <div className="MostLoved-img">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          shapeData.hidden_Halo_rings?.description
                        ),
                      }}
                    ></span>
                  </div>
                  <h4>{shapeData.hidden_Halo_rings?.name}</h4>
                </Link>
              </div>
              <div class="column-width">
              <Link to={shapeData.Bridal_sets?.url}>
                  <div className="MostLoved-img">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          shapeData.Bridal_sets?.description
                        ),
                      }}
                    ></span>
                  </div>
                  <h4>{shapeData.Bridal_sets?.name}</h4>
                </Link>
              </div>
              <div class="column-width">
              <Link to={shapeData.classic_rings?.url}>
                  <div className="MostLoved-img">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          shapeData.classic_rings?.description
                        ),
                      }}
                    ></span>
                  </div>
                  <h4>{shapeData.classic_rings?.name}</h4>
                </Link>
              </div>
              <div class="column-width">
              <Link to={shapeData.nature_inspired_rings?.url}>
                  <div className="MostLoved-img">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          shapeData.nature_inspired_rings?.description
                        ),
                      }}
                    ></span>
                  </div>
                  <h4>{shapeData.nature_inspired_rings?.name}</h4>
                </Link>
              </div>



            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
