import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

export const ShopDiamondShape = ({shapeData}) => {
  return (
    <>
      <div className="ShopDiamondShape">
        <div className="container">
          <h3>Shop Diamonds by Shape</h3>
          <div className="flex">
            {shapeData?.map((shapeItem, i) => {
              return (
               
                  <div className="ShopDiamondShape-img-text" key={i}>
                    <Link to={`/diamond/shape/${shapeItem.shape}`}>
                      <div className="own-ring-white">
                      <LazyLoadImage src={shapeItem.icon} alt={shapeItem.shape} effect="blur" width="auto"  height="auto"  />

                      </div>
                      <span>{shapeItem.shape}</span>
                    </Link>
                  </div>
               
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
