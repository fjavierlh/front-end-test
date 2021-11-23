import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SearchBar } from '../components/SearchBar';

export const ListProductViewRaw = ({ products, loadState }) => {
  const { loading, error, success } = loadState;
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        search
          ? product.brand.toLocaleLowerCase().includes(search) ||
            product.model.toLocaleLowerCase().includes(search)
          : product
      )
    );
  }, [products, search]);

  return (
    <>
      <SearchBar onSearch={setSearch} />
      <ListProductViewStyled>
        {loading && <p>Loading...</p>}
        {error && <p>Shomething was wrong... :(</p>}
        {success &&
          filteredProducts.map(({ id, imgUrl, brand, model, price }) => (
            <Link
              className="item"
              to={`/product/${model}`.toLowerCase().replaceAll(' ', '-')}
              key={id}
              state={{ id, imgUrl, brand, model }}
            >
              <img
                className="img-item"
                src={imgUrl}
                alt={`${brand}-${model}`}
              />
              <p>
                <b>{brand}</b> {model}
              </p>
              <b>{price}€</b>
            </Link>
          ))}
        {filteredProducts.length === 0 && <p>No products found</p>}
      </ListProductViewStyled>
    </>
  );
};

const ListProductViewStyled = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  & > .item {
    flex: 1 0 21%;
    text-align: center;
    background-color: #fff;
    padding: 2rem 0 2rem 0;
    text-decoration: none;
    color: #333;

    & > .img-item {
      display: block;
      max-height: 180px;
      margin: 0 auto;
    }
  }
`;

export default ListProductViewRaw;
