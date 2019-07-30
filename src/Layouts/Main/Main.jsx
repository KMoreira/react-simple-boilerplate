import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import { Sidebar } from '../../Components';

const StyledMain = styled.main`
  width: 100%;
  vertical-align: top;
  padding-top:70px;
`;

const Main = ({ children }) => {
  const [toogleMenu, setToogleMenu] = useState(false);
  return (
    <Fragment>
      <Header toogleMenu={toogleMenu} onMenuButtonClick={() => setToogleMenu(!toogleMenu)} />
      <Sidebar toogleMenu={toogleMenu} />
      <StyledMain>{children}</StyledMain>
    </Fragment>
  );
};

export default Main;
