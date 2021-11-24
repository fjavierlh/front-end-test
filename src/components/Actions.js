import React from 'react';
import styled from 'styled-components';
import { AddToCartButton } from './AddToCartButton';

export const Actions = ({
  id,
  onSubmit,
  onChangeColor,
  onChangeStorage,
  options,
  userOptions,
}) => {
  const { colors, storages } = options;
  return (
    <ActionsStyled>
      <h3>Options</h3>
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
    </ActionsStyled>
  );
};

const ActionsStyled = styled.div`
  & > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  & > form > select {
    font-size: 1.2rem;
    display: block;
    width: 320px;
    border: none;
    background-color: #fff;
    margin: 1rem auto;
    padding: 0.5rem;
  }
`;
