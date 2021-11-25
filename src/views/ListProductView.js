import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductItem from '../components/ProductItem';
import SearchBar from '../components/SearchBar';

export const ListProductView = ({ products = [], loadState }) => {
  const { loading, error, success } = loadState;
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        search
          ? `${product.brand} ${product.model}`
              .toLocaleLowerCase()
              .includes(search) ||
            `${product.model} ${product.brand}`
              .toLocaleLowerCase()
              .includes(search) ||
            product.model.toLocaleLowerCase().includes(search) ||
            product.brand.toLocaleLowerCase().includes(search)
          : product
      )
    );
  }, [products, search]);

  return (
    <ListProductViewStyled>
      <SearchBar onSearch={setSearch} products={products} />
      {loading && <p>Loading...</p>}
      {error && <p>Shomething was wrong... :(</p>}
      {success &&
        filteredProducts.map(({ id, imgUrl, brand, model, price }) => (
          <ProductItem
            key={id}
            id={id}
            imgUrl={imgUrl}
            brand={brand}
            model={model}
            price={price}
          />
        ))}
      {filteredProducts.length === 0 && !error && <p>No products found</p>}
    </ListProductViewStyled>
  );
};

const ListProductViewStyled = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 1.5em;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
`;

export default ListProductView;
