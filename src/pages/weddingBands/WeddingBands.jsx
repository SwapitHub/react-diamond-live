import axios from 'axios'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { UserContext } from '../../App'
import { HeaderMetaTag } from '../../seoTags/MetaTagHeader'
import { WeddingBanner } from './WeddingBanner'
import { WeddingByStyle } from './WeddingByStyle'
import { WeddingEndsSoon } from './WeddingEndsSoon'
import { WeddingPopular } from './WeddingPopular'
import { WeddingReadyShip } from './WeddingReadyShip'
import { WeddingSets } from './WeddingSets'

export const WeddingBands = () => {
    const {baseUrl} = useContext(UserContext);
    const [covetedWeddingBands, setCovetedWeddingBands] = useState([])
    const location = useLocation();
    const pathSegmentsMeta = location.pathname.split('/').filter(segment => segment);
  const mainCategory = pathSegmentsMeta[0] || '';
  const subCategory = pathSegmentsMeta[1] || '';
    useMemo(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${baseUrl}/coveted-products/wedding-band`);
            setCovetedWeddingBands(response.data.data);
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
            <WeddingBanner/>
            <WeddingSets/>
            <WeddingByStyle/>
       
            <WeddingEndsSoon/>
            
            <WeddingPopular covetedWeddingBands={covetedWeddingBands}/>
            <WeddingReadyShip/>
          
           
         
          
        </>
    )
}
