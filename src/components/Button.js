import React from 'react';

export const Button = ({ text, children, disabled }) => {
  return <button disabled={disabled}>{text ? text : children}</button>;
};
