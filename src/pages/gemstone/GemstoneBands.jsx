import axios from "axios";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import { GemstoneBanner } from "./GemstoneBanner";
import { GemstoneByStyle } from "./GemstoneByStyle";
import { GemstoneEducation } from "./GemstoneEducation";
import { GemstoneFaq } from "./GemstoneFaq";
import { GemstoneOwnEngagementRing } from "./GemstoneOwnEngagementRing";
import { GemstoneSets } from "./GemstoneSets";
import { GemstoneShopByShape } from "./GemstoneShopByShape";

import { HeaderMetaTag } from "../../seoTags/MetaTagHeader";

export const GemstoneBands = () => {
  const location = useLocation();
  const pathSegmentsMeta = location.pathname.split('/').filter(segment => segment);
const mainCategory = pathSegmentsMeta[0] || '';
const subCategory = pathSegmentsMeta[1] || '';
  const [gemstoneBands, setGemstoneBands] =useState([]);
  const [birthStone, setBirthStone] = useState([])
  const [gemstoneMeaning, setGemstoneMeaning] = useState([])
  const [sapphireBuying, setSapphireBuying] = useState([])
  const [diamondGuide, setDiamondGuide] = useState([])
  const { baseUrl } = useContext(UserContext);

  // =========shape api
  const fetchGemstoneAttributes = useMemo(
    () => async () => {
      try {
        const response = await axios.get(`${baseUrl}/gemstone-attributes`);
        setGemstoneBands(response.data.data);
      } catch (error) {
        console.log("shape API error gemstone");
      }
    },
    []
  );

  // Call the memoized function inside useEffect
  useEffect(() => {
    fetchGemstoneAttributes();
  }, [fetchGemstoneAttributes]);

  useMemo(() => {
    axios
      .get(`${baseUrl}/widget/Birthstone Jewelry Guide`)
      .then((res) => {
        setBirthStone(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useMemo(() => {
    axios
      .get(`${baseUrl}/widget/Gemstone Meanings Guide`)
      .then((res) => {
        setGemstoneMeaning(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useMemo(() => {
    axios
      .get(`${baseUrl}/widget/Sapphire Buying Guide`)
      .then((res) => {
        setSapphireBuying(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useMemo(() => {
    axios
      .get(`${baseUrl}/widget/Moissanite vs. Diamond Guide`)
      .then((res) => {
        setDiamondGuide(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const currentUrl = window.location.href;
 
  return (
    <>
        <HeaderMetaTag
        mainCategory={mainCategory}
        subCategory={subCategory}
        // image="https://d24ppbhzdyfrur.cloudfront.net/uploads/image_url/s3_image/36274429/1701007RubyCushion1_17ct_3932_77c52f06-f67b-4338-8cd9-abcd817c178c.jpg"
        currentUrl={currentUrl}
      />
      <GemstoneBanner />
      <GemstoneShopByShape />
      <GemstoneByStyle gemstoneBands={gemstoneBands} />
      <GemstoneSets />
      <GemstoneOwnEngagementRing />
      {/* <GemstoneReviews /> */}
      <GemstoneEducation birthStone={birthStone} gemstoneMeaning={gemstoneMeaning} sapphireBuying={sapphireBuying} diamondGuide={diamondGuide}/>
      <GemstoneFaq />
    </>
  );
};
