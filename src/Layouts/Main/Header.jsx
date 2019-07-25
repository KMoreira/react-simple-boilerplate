import React from 'react';
import styled from 'styled-components';

import MenuButton from './MenuButton';
import logo from './logo.jpeg';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: black;
  height: fit-content;
  padding: 2px;
  position: fixed;
  z-index: 2;
`;

const StyledImg = styled.img`
  max-width: 150px;
  height: auto;
`;

const Header = props => (
  <StyledHeader>
    <StyledImg src={logo} alt="Deezer Logo" />
    <MenuButton {...props} />
  </StyledHeader>
);

export default Header;
