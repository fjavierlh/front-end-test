import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export const BreadCrumb = () => {
  const location = useLocation();
  const state = location.state;

  if (state === null) {
    return (
      <BreadCrumbStyled>
        <span>
          <b>Home</b>
        </span>
      </BreadCrumbStyled>
    );
  }

  return (
    <BreadCrumbStyled>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span className="separator">⯈</span>
      <span>
        <b>
          {state.brand} {state.model}
        </b>
      </span>
    </BreadCrumbStyled>
  );
};

const BreadCrumbStyled = styled.div`
  flex-basis: 100%;
  & > .separator {
    margin: 0 5px;
    color: #000;
  }
  & > * {
    text-decoration: none;
    display: inline-block;
    color: #666;
  }
`;
