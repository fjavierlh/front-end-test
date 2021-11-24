import React from 'react';

export const Image = ({ imgUrl, altText, lazyLoading }) => {
  return <img src={imgUrl} alt={altText} loading={lazyLoading ? 'lazy' : ''} />;
};
