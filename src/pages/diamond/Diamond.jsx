import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ShopDiamondShape } from '../home/ShopDiamondShape';
import { DiamondBanner } from './DiamondBanner';
import { DiamondCommitment } from './DiamondCommitment';
import { DiamondEdu } from './DiamondEdu';
import { DiamondFaq } from './DiamondFaq';
import { DiamondReadyToShip } from './DiamondReadyToShip';
import { DiamondReviews } from './DiamondReviews';
import { DiamondSets } from './DiamondSets';
import axios from 'axios';
import { UserContext } from '../../App';
import { useLocation } from 'react-router-dom';

import { HeaderMetaTag } from '../../seoTags/MetaTagHeader';

export const Diamond = () => {
  const { baseUrl } = useContext(UserContext);
  const [shapeData, setShapeData] = useState([]);
  const location = useLocation();
  const pathSegmentsMeta = location.pathname.split('/').filter(segment => segment);
const mainCategory = pathSegmentsMeta[0] || '';
const subCategory = pathSegmentsMeta[1] || '';
useMemo(() => {
    axios
      .get(`${baseUrl}/diamondshape`)
      .then((res) => {
        setShapeData(res.data.data);
      })
      .catch(() => {
        console.log("API error");
      });
  }, []);
  const currentUrl = window.location.href;
  return (
    <>
  <HeaderMetaTag
        mainCategory={mainCategory}
        subCategory={subCategory}
        image="https://d24ppbhzdyfrur.cloudfront.net/uploads/image_url/s3_image/36274429/1701007RubyCushion1_17ct_3932_77c52f06-f67b-4338-8cd9-abcd817c178c.jpg"
        currentUrl={currentUrl}
      />
      <DiamondBanner />
      <ShopDiamondShape shapeData={shapeData} />
      <DiamondReadyToShip />
      {/* <DiamondCommitment /> */}
      <DiamondSets />
      <DiamondReviews />
      <DiamondEdu />
      <DiamondFaq />
    </>
  )
}
