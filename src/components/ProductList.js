import React from 'react';
import ProductItem from './ProductItem';

const ListProduct = ({ products, loadState }) => {
  const { loading, error, success } = loadState;
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Shomething was wrong... :(</p>}
      {success &&
        products.map(({ id, imgUrl, brand, model, price }) => (
          <ProductItem
            key={id}
            id={id}
            imgUrl={imgUrl}
            brand={brand}
            model={model}
            price={price}
          />
        ))}
      {success && products.length === 0 && <p>No products found</p>}
    </>
  );
};

export default ListProduct;
