import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Actions } from '../components/Actions';
import { Description } from '../components/Description';
import { Image } from '../components/Image';
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

  const { imgUrl, brand, model, options } = { ...product };
  return (
    <ProductDetailStyled key={id}>
      <h2>
        {brand} {model}
      </h2>
      <Image imgUrl={imgUrl} altText={`${brand}-${model}`} />
      <Description product={product} />
      <Actions
        id={id}
        onSubmit={onSubmit}
        onChangeColor={onChangeColor}
        onChangeStorage={onChangeStorage}
        options={options}
        userOptions={userOptions}
      />
    </ProductDetailStyled>
  );
};

const ProductDetailStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  & > h2 {
    flex: 1;
  }

  & > Image {
    border: 1px solid red;
  }
`;
