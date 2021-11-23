import React from 'react';
import { Button } from './Button';

export const AddToCartButton = ({ userOptions, text, children }) => {
  return (
    <Button
      text={text}
      children={children}
      disabled={!userOptions.colorCode || !userOptions.storageCode}
    />
  );
};
