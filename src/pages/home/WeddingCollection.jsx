import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import DOMPurify from "dompurify";

export const WeddingCollection = ({engagementRings,weddingJewelry,weddingCollection}) => {
  
    
  return (
    <section className="own-engagment gemstone WeddingCollection">
      <div className="container">
        <div className="inner-own-eng">
          <div className="heading-sec"></div>
          <div className="ring-grid-sec">
            <div className="grid-wrapper-bar">
              <Link to={engagementRings?.url}>
                <div className="img-bar">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(engagementRings?.description),
                    }}
                  ></div>
                </div>
                <div className="contant-bar">
                  <h5>Natural diamonds</h5>
                </div>
              </Link>
            </div>
            <div className="grid-wrapper-bar">
              <Link to={weddingJewelry?.url}>
                <div className="img-bar">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(weddingJewelry?.description),
                    }}
                  ></div>
                </div>
                <div className="contant-bar">
                  <h5>Gemstones</h5>
                </div>
              </Link>
            </div>
            <div className="grid-wrapper-bar">
              <Link to={weddingCollection?.url}>
                <div className="img-bar">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(weddingCollection?.description),
                    }}
                  ></div>
                </div>
                <div className="contant-bar">
                  <h5>Lab Grown Diamonds</h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
