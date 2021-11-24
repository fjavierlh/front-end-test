import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = ({ logoUrl, title, cartCount }) => {
  return (
    <HeaderStyled>
      <Link to="/" className="brand">
        {logoUrl ? (
          <img className="logo" src={logoUrl} alt="logo"></img>
        ) : (
          <h4>{title}</h4>
        )}
      </Link>
      <div className="cart">
        <p>Items in your cart</p>
        <div className="cart-count">{cartCount}</div>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > .logo {
    width: 200px;
    max-width: 200px;
  }
  & > .brand {
    text-decoration: none;
    color: #333;
  }
  & > .cart {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    text-transform: uppercase;
    align-items: center;
    font-size: 0.9em;
    font-weight: bold;
  }
  & > .cart > .cart-count {
    display: flex;
    margin-right: 1rem;
    justify-content: center;
    align-items: center;
    background-color: #333;
    color: #fff;
    height: 1.5rem;
    width: 1.5rem;
    font-weight: bold;
    font-size: 0.8rem;
    border-radius: 100%;
  }
`;

export default Header;
