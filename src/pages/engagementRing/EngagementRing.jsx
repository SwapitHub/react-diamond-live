import axios from 'axios'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { UserContext } from '../../App'
import { ShopDiamondCotegory } from '../home/ShopDiamondCotegory'
import { ShopDiamondShape } from '../home/ShopDiamondShape'
import { EngagementBanner } from './EngagementBanner'
import { OwnEngagementRing } from './OwnEngagementRing'
import { RingEducation } from './RingEducation'
import { RingEndsSoon } from './RingEndsSoon'
import { RingExclusive } from './RingExclusive'
import { RingReadyToShip } from './RingReadyToShip'

import { useLocation } from 'react-router-dom'
import { HeaderMetaTag } from '../../seoTags/MetaTagHeader'

export const EngagementRing = () => {
 
    const { baseUrl } = useContext(UserContext);
    const [shapeData, setShapeData] = useState([]);
    const [shopStyle, setShopStyle] = useState([])
    const [covetedProducts, setCovetedProducts] = useState([])
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

    useMemo(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${baseUrl}/product-style`);
          setShopStyle(response.data.data);
        } catch (error) {
          console.log("shop style api error:", error);
        }
      };
  
      fetchData();
    }, []);

    
    useMemo(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${baseUrl}/coveted-products/engagement-rings`);
          setCovetedProducts(response.data.data);
        } catch (error) {
          console.log("shop style api error:", error);
        }
      }; 
      fetchData();
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
            <EngagementBanner />
            <ShopDiamondShape shapeData={shapeData} />
            <OwnEngagementRing covetedProducts={covetedProducts}/>
            <RingEndsSoon />
            <ShopDiamondCotegory shopStyle={shopStyle}/>
            <RingReadyToShip />
            <RingExclusive />
            {/* <RingReviews /> */}
            <RingEducation />
            {/* <RingFaq /> */}
        </>
    )
}
