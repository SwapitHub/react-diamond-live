import axios from "axios";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { UserContext } from "../../App";

export const AnniversaryRings = () => {
  const { baseUrl } = useContext(UserContext);
  const [homeAllSections, setHomeAllSections] = useState([]);
  useMemo(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/homecontent`);
        const data = response.data.data;

        setHomeAllSections(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="ShopCategory ShopDiamondCotegory Anniversary Rings">
        <div className="container">
          <h3>Shop by Style</h3>

          <div className="flex-container">
            <div className="flex">
              {homeAllSections?.shopbycategory?.map((item,i) => {
                return (
                 
                    <div className="column-width" key={i}>
                      <Link to={item.link}>
                        <div className="ShopCategory-img">
                          <LazyLoadImage
                            src={item?.image}
                            alt={item?.title}
                            effect="blur"
                            width="auto"  height="auto"  
                          />
                        </div>
                        <h4>{item?.title}</h4>
                      </Link>
                    </div>
                
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
