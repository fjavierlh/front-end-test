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

      <div className="cart-count">{cartCount}</div>
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
  & > .cart-count {
    display: flex;
    margin-right: 1rem;
    justify-content: center;
    align-items: center;
    background-color: #333;
    color: #fff;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 100%;
  }
`;

export default Header;
