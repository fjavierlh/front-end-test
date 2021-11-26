import React from 'react';
import styled from 'styled-components';
import ListProduct from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import useFetchAllProducts from '../hooks/useFetchAllProducts.hook';
import useFilterProductsSearch from '../hooks/useFilterProductsSearch.hook';

export const ListProductView = () => {
  const { products, ...loadState } = useFetchAllProducts();
  const { setSearchValue, searchedProducts } = useFilterProductsSearch(products);

  return (
    <ListProductViewStyled>
      <SearchBar onSearch={setSearchValue} products={products} />
      <ListProduct products={searchedProducts} loadState={loadState} />
    </ListProductViewStyled>
  );
};

const ListProductViewStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 1.5em;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
`;

export default ListProductView;
