import React from 'react';
import styled from 'styled-components';

import AlbumInfo from './AlbumInfo';

const StyledList = styled.ul`
  display: inline-block;
  position: fixed;
  width: 300px;
  ${({ toogleMenu }) => (toogleMenu ? 'left: 0;' : 'left: -100vw;')}
  top: 50px;
  height: calc(100vh - 50px);
  background-color: #000;
  overflow-y: auto;
  padding: 4px;
  transition: left .3s ease-in;

  & img {
    max-width: 120px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #000000;
    border: 2px solid #555555;
  }
`;

const Sidebar = ({ toogleMenu }) => (
  <StyledList toogleMenu={toogleMenu} tabindex={toogleMenu ? 0 : -1}>
    <AlbumInfo tabindex={toogleMenu ? 0 : -1} />
    <AlbumInfo tabindex={toogleMenu ? 0 : -1} />
    <AlbumInfo tabindex={toogleMenu ? 0 : -1} />
    <AlbumInfo tabindex={toogleMenu ? 0 : -1} />
  </StyledList>
);

export default Sidebar;
