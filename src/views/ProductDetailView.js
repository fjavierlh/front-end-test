import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Actions } from '../components/Actions';
import Description from '../components/Description';
import { Image } from '../components/Image';
import breakpoints from '../constants/devices-sizes';
import useFetchSingleProduct from '../hooks/useFetchSingleProduct.hook';

export const ProductDetailView = ({ onAddToCart }) => {
  const location = useLocation();
  const { id } = location.state;

  const defaultOptions = { id, colorCode: null, storageCode: null };
  const [userOptions, setUserOptions] = useState(defaultOptions);

  const { product, ...loadStateProduct } = useFetchSingleProduct(id);

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

  if (loadStateProduct.error || !product) {
    return <p>Shomething was wrong... :(</p>;
  }

  const { imgUrl, brand, model, options } = { ...product };
  return (
    <ProductDetailStyled key={id}>
      <h2 className="product-name">
        {brand} {model}
      </h2>
      <Image imgUrl={imgUrl} altText={`${brand}-${model}`} />
      <div className="product-right-box">
        <Description product={product} />
        <Actions
          id={id}
          onSubmit={onSubmit}
          onChangeColor={onChangeColor}
          onChangeStorage={onChangeStorage}
          options={options}
          userOptions={userOptions}
        />
      </div>
    </ProductDetailStyled>
  );
};

const ProductDetailStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: flex-start;

  & > img {
    margin: 6.5rem auto;
  }

  & > .product-name {
    margin-bottom: 0;
    font-size: 1.5rem;
    font-weight: bold;
    flex-basis: 100%;
  }

  & > .product-right-box {
    flex-basis: 60%;
    margin: 0 auto;
  }

  @media only screen and (${breakpoints.device.xs}) {
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and (${breakpoints.device.sm}) {
  }
  @media only screen and (${breakpoints.device.lg}) {
    flex-direction: row;
  }
`;
