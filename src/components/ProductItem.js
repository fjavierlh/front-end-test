import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Image } from './Image';

const ProductItem = ({ id, imgUrl, brand, model, price }) => {
  return (
    <ProductItemStyled>
      <Link
        to={`/product/${model}`.toLowerCase().replaceAll(' ', '-')}
        className="product-link"
        key={id}
        state={{ id, imgUrl, brand, model }}
      >
        <Image
          className="img-item"
          imgUrl={imgUrl}
          altText={`${brand}-${model}`}
          lazyLoading={true}
        />
        <div className="product-info">
          <p>
            <b>{brand}</b> {model}
          </p>
          <span className="price-text">
            {price ? <b>{price}€</b> : <small>Price to be consulted</small>}
          </span>
        </div>
      </Link>
    </ProductItemStyled>
  );
};

const ProductItemStyled = styled.article`
  flex: 1 0 21%;
  min-height: 180px;
  & > .product-link {
    flex: 1 0 21%;
    flex-basis: 100%;
    text-decoration: none;
    color: #333;

    & > .product-info {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  }
  text-align: center;
  background-color: #fff;
  padding: 2rem 0 2rem 0;

  & > .img-item {
    display: block;
    max-height: 180px;
    min-height: 180px;

    margin: 0 2em;
  }

  & > .product-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export default ProductItem;
