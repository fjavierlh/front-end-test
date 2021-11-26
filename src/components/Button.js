import React from 'react';
import styled from 'styled-components';

export const Button = ({ text, children, disabled }) => {
  return (
    <ButtonStyled disabled={disabled}>
      {text ? text : children ? children : 'Click me!'}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  font-weight: bold;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

  &:disabled {
    background-color: #555;
    color: #ccc;
    cursor: not-allowed;
  }
`;
