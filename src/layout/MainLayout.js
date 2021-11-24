import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { BreadCrumb } from '../components/BreadCrumb';
import Header from '../components/Header';
import breakpoints from '../constants/devices-sizes';

export const MainLayout = ({ cartCount }) => {
  return (
    <MainLayoutStyled>
      <Header title="Mobile devices shop" cartCount={cartCount} />
      <BreadCrumb />
      <Outlet />
    </MainLayoutStyled>
  );
};

const MainLayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${breakpoints.size.lg};
  margin: 0 auto;
  padding: 1rem;
`;

export default MainLayout;
