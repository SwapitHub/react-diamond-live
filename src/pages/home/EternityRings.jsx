import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import axios from "axios";
import { UserContext } from "../../App";


export const EternityRings = () => {
  const [eternityRings, setEternityRings] = useState([])
  const {baseUrl} = useContext(UserContext)
  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.get(
          `${baseUrl}/homecontent`
        );
        const data = response.data.data;

        setEternityRings(data);


      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="eternityRings">
        <div className="container ">
          <div className="flex eternityRings-main">
            <div className="eternityRings-text">
              <h2>{eternityRings.ring_promotion_banner_title_1}</h2>
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(eternityRings.ring_promotion_banner_desc_1),
                }}
              ></span>
              <div>
                <Link className="button" to="/engagement-rings/start-with-a-setting?bridal-sets=true">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="eternityRings-img">
              <div className="dsk-eternityRings-img">
                <img src={eternityRings.ring_promotion_banner_desktop_1} alt="eternityRings" loading="lazy" width="auto"  height="auto"  />
              </div>
              <div className="mbl-eternityRings-img">
                <img src={eternityRings.ring_promotion_banner_mobile_1} alt="mblEternityRings" loading="lazy" width="auto"  height="auto"  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
