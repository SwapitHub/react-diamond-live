import React, { useEffect } from 'react'


export const MetaTagDetailsPage = ({description, keyword, titleName, image, currentUrl}) => {

   // meta detail start
 

   useEffect(() => {
    const metaTags = document.getElementsByTagName('meta');
    Array.from(metaTags).forEach(tag => {
      if (tag.getAttribute('name') === 'description') {
        tag.setAttribute('content' , description || '');
      }
      
      if (tag.getAttribute('property') === 'og:title') {
        tag.setAttribute('content' , titleName || '');
      }
      if (tag.getAttribute('property') === 'og:description') {
        tag.setAttribute('content' , description || '');
      }
      if (tag.getAttribute('property') === 'og:url') {
        tag.setAttribute('content', currentUrl || '');
      }
    });
  }, [description, currentUrl,titleName]);
  
   
  useEffect(() => {
    if (titleName) {
      document.title = titleName;
    }
  }, [titleName]);
  

  // meta detail end
  return (
   
  <></>
  )
}
