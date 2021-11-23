import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import useFetchSingleProduct from '../hooks/useFetchSingleProduct.hook';

export const ProductDetailView = ({ onAddToCart }) => {
  const location = useLocation();
  const id = location.state.id;

  const defaultOptions = { id, colorCode: null, storageCode: null };

  const [userOptions, setUserOptions] = useState(defaultOptions);

  const { product, ...loadStateProduct } = useFetchSingleProduct(
    location.state.id
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    await onAddToCart({ ...userOptions, id });
  };

  const onChangeColor = (e) => {
    const colorCode = parseInt(e.target.value);
    setUserOptions({ ...userOptions, colorCode });
  };
  const onChangeStorage = (e) => {
    const storageCode = parseInt(e.target.value);
    setUserOptions({ ...userOptions, storageCode });
  };

  if (loadStateProduct.loading) {
    return <p>Loading...</p>;
  }

  if (loadStateProduct.error) {
    return <p>Shomething was wrong... :(</p>;
  }

  const {
    imgUrl,
    brand,
    model,
    dimensions,
    weight,
    displayType,
    displayResolution,
    displaySize,
    os,
    cpu,
    chipset,
    externalMemory,
    internalMemory,
    ram,
    primaryCamera,
    secondaryCamera,
    nfc,
    usb,
    options: { colors, storages },
  } = { ...product };
  return (
    <ProductDetailStyled key={id}>
      <div>
        <h2>
          {brand} {model}
        </h2>
        <img src={imgUrl} alt={`${brand}-${model}`} />
      </div>
      <article className="description">
        <div>Description:</div>
        {dimensions && <p>Dimensions: {dimensions}</p>}
        {weight && <p>Weight: {weight}</p>}
        {displayType && <p>Display Type: {displayType}</p>}
        {displayResolution && <p>Display Resolution: {displayResolution}</p>}
        {displaySize && <p>Display Size: {displaySize}</p>}
        {os && <p>OS: {os}</p>}
        {cpu && <p>CPU: {cpu}</p>}
        {chipset && <p>Chipset: {chipset}</p>}
        {externalMemory && <p>External Memory: {externalMemory}</p>}
        {internalMemory && <p>Internal Memory: {internalMemory}</p>}
        {ram && <p>RAM: {ram}</p>}
        {primaryCamera && <p>Primary Camera: {primaryCamera}</p>}
        {secondaryCamera && <p>Secondary Camera: {secondaryCamera}</p>}
        {nfc && <p>NFC: {nfc}</p>}
        {usb && <p>USB: {usb}</p>}
      </article>
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
          {}
          <button disabled={!userOptions.colorCode || !userOptions.storageCode}>
            Add to cart
          </button>
        </form>
      </div>
    </ProductDetailStyled>
  );
};

const ProductDetailStyled = styled.div`
  display: flex;

  & > .descrption {
    flex: 1 0 100%;
  }
`;
