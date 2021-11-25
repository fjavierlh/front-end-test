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
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h3 {
    flex-basis: 100%;
  }
  & > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;
  }
  & > form > select {
    font-size: 1.2rem;
    display: block;
    width: 320px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    margin: 0 auto 1rem auto;
    padding: 0.5rem;
  }
`;
