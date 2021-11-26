import React from 'react';
import { Button } from './Button';

export const AddToCartButton = ({ userOptions, text, children }) => {
  const disabled = userOptions
    ? !userOptions.colorCode || !userOptions.storageCode
    : true;

  return (
    <Button
      text={text || 'Add to cart'}
      children={children}
      disabled={disabled}
    />
  );
};
