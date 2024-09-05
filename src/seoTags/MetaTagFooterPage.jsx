import React, { useEffect } from 'react'

export const MetaTagFooterPage = ({titleTag, descriptionTag, keywords,currentUrl}) => {
    useEffect(() => {
        const metaTags = document.getElementsByTagName('meta');
        Array.from(metaTags).forEach(tag => {
          if (tag.getAttribute('name') === 'description') {
            tag.setAttribute('content',  descriptionTag || '');
          }
          if (tag.getAttribute('name') === 'keywords') {
            tag.setAttribute('content', keywords || '');
          }
          if (tag.getAttribute('property') === 'og:title') {
            tag.setAttribute('content', titleTag || '');
          }
          if (tag.getAttribute('property') === 'og:description') {
            tag.setAttribute('content',  descriptionTag || '');
          }
          if (tag.getAttribute('property') === 'og:url') {
            tag.setAttribute('content', currentUrl || '');
          }
        });
      }, [titleTag, descriptionTag, keywords,currentUrl])
      
    
      
      useEffect(() => {
        if (titleTag) {
          document.title =  titleTag
        }
      }, [titleTag]);
  return (
    <></>
  )
}
