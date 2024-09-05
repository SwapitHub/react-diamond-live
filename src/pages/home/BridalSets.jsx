import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";
import { UserContext } from "../../App";

export const BridalSets = () => {
  const [bridalSet, setBridalSet] = useState([])
  const {baseUrl} = useContext(UserContext)
  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.get(
          `${baseUrl}/homecontent`
        );
        const data = response.data.data;

        setBridalSet(data);


      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="bridalSets-necklaces flex">
        <div className="bridalSets flex">
          <div className="bridalSets-text">
            <h3>{bridalSet.ring_promotion_banner_title_2}</h3>
            <span
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(bridalSet.ring_promotion_banner_desc_2),
              }}
            ></span>
            <div className="bridalSets-btn">
              <Link className="button" to="/engagement-rings/start-with-a-setting?bridal-sets=true">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="bridalSets-img dsk-bridalSets-img">
            <img src={bridalSet.ring_promotion_banner_desktop_2} alt="ring_promotion_banner_desktop_2" loading="lazy" width="auto"  height="auto"  />
          </div>
          <div className="mb-bridalSets-img">
            <img src={bridalSet.ring_promotion_banner_mobile_2} alt="ring_promotion_banner_mobile_2" loading="lazy" width="auto"  height="auto"  />
          </div>
        </div>
        <div className="bridalSets-2">
          <div className="bridalSets-img dsk-bridalSets-img">
            <img src={bridalSet.ring_promotion_banner_desktop_3} alt="bridalSet" loading="lazy" width="auto"  height="auto"  />
          </div>
          <div className="mb-bridalSets-img">
            <img src={bridalSet.ring_promotion_banner_mobile_3} alt="bridalSet" loading="lazy" width="auto"  height="auto"  />
          </div>
          <div className="bridalSets-text">
            <h3>{bridalSet.ring_promotion_banner_title_3}</h3>
            <span
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(bridalSet.ring_promotion_banner_desc_3),
              }}
            ></span>
            <div className="bridalSets-btn">
              <Link className="button" to="/engagement-rings/start-with-a-setting?bridal-sets=true">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
