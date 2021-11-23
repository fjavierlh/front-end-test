import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListProductViewRaw = ({ products, loadState }) => {
  const { loading, error, success } = loadState;
  return (
    <ListProductViewStyled>
      {loading && <p>Loading...</p>}
      {error && <p>Shomething was wrong... :(</p>}
      {success &&
        products.map(({ id, imgUrl, brand, model, price }) => (
          <Link
            className="item"
            to={`/product/${model}`.toLocaleLowerCase().replaceAll(' ', '-')}
            key={id}
            state={{ id, imgUrl, brand, model }}
          >
            <img className="img-item" src={imgUrl} alt={`${brand}-${model}`} />
            <h5>
              {brand}-{model}
            </h5>
            <b>{price}€</b>
          </Link>
        ))}
    </ListProductViewStyled>
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