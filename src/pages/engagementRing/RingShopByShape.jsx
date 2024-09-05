import React, { useState, useEffect, useContext } from "react";
import round from "../../images/Round.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";

export const RingShopByShape = () => {
  // diamond shape
  const [shapeData, setShapeData] = useState([]);
  const {baseUrl} = useContext(UserContext)
  useEffect(() => {
    axios
      .get(`${baseUrl}/diamondshape`)
      .then((res) => {
        setShapeData(res.data.data);
      })
      .catch(() => {
        console.log("API error");
      });
  }, []);
  return (
    <>
      <div className="ShopDiamondShape">
        <div className="container">
          <h2>Shop diamonds by shape</h2>
          <div className="flex">
            {shapeData.map((shapeItem) => {
              return (
                <>
                  <div className="ShopDiamondShape-img-text">
                    <Link to="#">
                      <img width="auto"  height="auto"   src={shapeItem.icon} alt={shapeItem.shape} />
                      <span>{shapeItem.shape}</span>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
