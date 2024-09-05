import React, { useContext, useEffect, useMemo, useState } from "react";
import "../Style.css";
import { Banner } from "./Banner";
import { BridalJewellery } from "./BridalJewellery";
import { EngagementBridal } from "./EngagementBridal";
import { SeeProducts } from "./SeeProducts";
import { ShopDiamondShape } from "./ShopDiamondShape";
import axios from "axios";
import { UserContext } from "../../App";
import { AnniversaryRingFeatured } from "./AnniversaryRingFeatured";
import { AnniversaryRings } from "./AnniversaryRings";
import { CelebarteLove } from "./CelebarteLove";
import LoveBrilliance from "./LoveBrilliance";
import { ShopDiamondCotegory } from "./ShopDiamondCotegory";
import { WeddingCollection } from "./WeddingCollection";

export const Home = () => {
  const [shapeData, setShapeData] = useState([]);
  const [shopStyle, setShopStyle] = useState([]);
  const { baseUrl } = useContext(UserContext);
  const [homeContext, setHomeContext] = useState([]);
  const[homeAllSections, setHomeAllSections] = useState([])

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
        const response = await axios.get(
          `${baseUrl}/banners`
        );
        const data = response.data.data;

        setHomeContext(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useMemo(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/homecontent`
        );
        const data = response.data.data;

        setHomeAllSections(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // ============see products and wedding collection api start
  const [anniversaryRings, setAnniversaryRings] = useState();
  const [diamondPendants, setDiamondPendants] = useState()
  const [tennisBracelets, setTennisBracelets] = useState()
  const [diamondStuds, setDiamondStuds] = useState()
  useMemo(() => {
     axios
       .get(`${baseUrl}/widget/Trellis Rings`)
       .then((res) => {
         setAnniversaryRings(res.data.data);
       })
       .catch((error) => {
         console.log(error);
       });
   }, []);
 
   useMemo(() => {
     axios
       .get(`${baseUrl}/widget/Vintage Rings`)
       .then((res) => {
         setDiamondPendants(res.data.data);
       })
       .catch((error) => {
         console.log(error);
       });
   }, []);
 
   useMemo(() => {
     axios
       .get(`${baseUrl}/widget/Eternity Rings`)
       .then((res) => {
         setTennisBracelets(res.data.data);
       })
       .catch((error) => {
         console.log(error);
       });
   }, []);
 
   useMemo(() => {
     axios
       .get(`${baseUrl}/widget/Nature Inspired Rings`)
       .then((res) => {
         setDiamondStuds(res.data.data);
       })
       .catch((error) => {
         console.log(error);
       });
   }, []);


  const [engagementRings, setEngagementRings]= useState()
  const[weddingJewelry,setWeddingJewelry] = useState()
  const[weddingCollection, setWeddingCollection] =useState()
  useMemo(() => {
    axios
      .get(`${baseUrl}/widget/Natural diamonds`)
      .then((res) => {
        setEngagementRings(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useMemo(() => {
    axios
      .get(`${baseUrl}/widget/Gemstones`)
      .then((res) => {
        setWeddingJewelry(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useMemo(() => {
    axios
      .get(`${baseUrl}/widget/Lab Grown Diamonds`)
      .then((res) => {
        setWeddingCollection(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  // ============see products and wedding collection api end
  const[siteInfo,setSiteInfo]= useState()
  useMemo(() => {
    axios
      .get(`${baseUrl}/siteinfo`)
      .then((res) => {
        setSiteInfo(res.data.data);
      })
      .catch(() => {
        console.log("profile API is not working");
      });
  }, []);

  // meta detail start
  const currentUrl = window.location.href;

  useEffect(() => {
    const metaTags = document.getElementsByTagName('meta');
    Array.from(metaTags).forEach(tag => {
      if (tag.getAttribute('name') === 'description') {
        tag.setAttribute('content', siteInfo?.meta_description || '');
      }
      if (tag.getAttribute('name') === 'keywords') {
        tag.setAttribute('content', siteInfo?.meta_keyword || '');
      }
      if (tag.getAttribute('property') === 'og:title') {
        tag.setAttribute('content', siteInfo?.meta_title || '');
      }
      if (tag.getAttribute('property') === 'og:description') {
        tag.setAttribute('content', siteInfo?.meta_description || '');
      }
      if (tag.getAttribute('property') === 'og:url') {
        tag.setAttribute('content', currentUrl || '');
      }
    });
  }, [siteInfo, currentUrl]);
  
  useEffect(() => {
    const linkTags = document.getElementsByTagName('link');
    Array.from(linkTags).forEach(tag => {
      if (tag.getAttribute('rel') === 'icon') {
        tag.setAttribute('href', siteInfo?.favicon || '');
      }
    });
  }, [siteInfo]);
  
  useEffect(() => {
    if (siteInfo?.meta_title) {
      document.title = siteInfo.meta_title;
    }
  }, [siteInfo]);
  

  // meta detail end
  return (
    <>
      <div className="home-page">
        <Banner homeContext={homeContext}/>
        <ShopDiamondShape shapeData={shapeData} />
        <SeeProducts anniversaryRings={anniversaryRings} diamondPendants={diamondPendants} tennisBracelets={tennisBracelets} diamondStuds={diamondStuds}/>
        <ShopDiamondCotegory shopStyle={shopStyle}/>
        <BridalJewellery home={homeAllSections}/>
        <AnniversaryRings/>
        <CelebarteLove home={homeAllSections}/>
        <WeddingCollection engagementRings={engagementRings} weddingJewelry={weddingJewelry} weddingCollection={weddingCollection}/>

        <EngagementBridal home={homeAllSections}/>

        <LoveBrilliance home={homeAllSections}/>
        {/* <ShopDiamondSlider/>
  <ShopCategory/>
  <ShopByCategorySlider/>
  <EndsSoon/>
  <EternityRings/>
  <BridalSets/> */}
        {/* <MostLoved/> */}
        {/* <MostLovedSlider/> */}
        <AnniversaryRingFeatured home={homeAllSections}/>
      </div>
    </>
  );
};
