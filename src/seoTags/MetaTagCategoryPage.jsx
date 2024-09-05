import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'

import { UserContext } from '../App';

export const MetaTagCategoryPage = ({mainCategory,currentUrl}) => {
    const [menuCategory, setMenuCategory] = useState(); 
    const { baseUrl } = useContext(UserContext);
    const newCategory = `${baseUrl}/cms-metadata?route=${mainCategory}`;
 
    useEffect(() => {
      axios
        .get(newCategory)
        .then((res) => {
          setMenuCategory(res.data.data); 
        })
        .catch((error) => {
          console.log("menu category error:", error);
        });
    }, [newCategory]);

    const metaDescriptionLimit = 160;

    const truncateMetaDescription = (description) => {
      if (description?.length > metaDescriptionLimit) {
        return description?.substring(0, metaDescriptionLimit) + '...';
      }
      return description;
    };

    // meta detail start
 

  useEffect(() => {
    const metaTags = document.getElementsByTagName('meta');
    Array.from(metaTags).forEach(tag => {
      if (tag.getAttribute('name') === 'description') {
        tag.setAttribute('content' , menuCategory?.meta_description ? truncateMetaDescription(menuCategory?.meta_description) : truncateMetaDescription(menuCategory?.description || ''));
      }
      
      if (tag.getAttribute('property') === 'og:title') {
        tag.setAttribute('content', menuCategory?.meta_title ? menuCategory?.meta_title : menuCategory?.name || '');
      }
      if (tag.getAttribute('property') === 'og:description') {
        tag.setAttribute('content' , menuCategory?.meta_description ? truncateMetaDescription(menuCategory?.meta_description) : truncateMetaDescription(menuCategory?.description || ''));
      }
      if (tag.getAttribute('property') === 'og:url') {
        tag.setAttribute('content', currentUrl || '');
      }
    });
  }, [menuCategory, currentUrl]);
  
   
  useEffect(() => {
    if (menuCategory?.meta_title ? menuCategory?.meta_title : menuCategory?.name) {
      document.title = menuCategory?.meta_title ? menuCategory?.meta_title : menuCategory?.name;
    }
  }, [menuCategory]);
  

  // meta detail end
  return (
  <>
  
  </>
    
  )
}
