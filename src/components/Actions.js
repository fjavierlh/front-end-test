import React from 'react';
import { AddToCartButton } from './AddToCartButton';

export const Actions = ({ id, onSubmit, onChangeColor, onChangeStorage, options, userOptions }) => {
  const { colors, storages } = options;
  return (
    <div>
      Options:
      <form onSubmit={onSubmit}>
        <select onChange={onChangeColor}>
          <option key={`${id}-colors`} disabled selected>
            Colors
          </option>
          {colors &&
            colors.map(({ name, code }) => (
              <option key={`${id}-${code}`} value={code}>
                {name}
              </option>
            ))}
        </select>
        <select onChange={onChangeStorage}>
          <option key={`${id}-storages`} disabled selected>
            Storages
          </option>
          {storages &&
            storages.map(({ name, code }) => (
              <option key={`${id}-${code}`} value={code}>
                {name}
              </option>
            ))}
        </select>
        <AddToCartButton userOptions={userOptions} text="Add to cart" />
      </form>
    </div>
  );
};
