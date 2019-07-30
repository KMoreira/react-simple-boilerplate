import React from 'react';
import styled from 'styled-components';

import { Button } from '../../Components';

const Title = styled.h1`
  max-width: 1200px;
  width: 100%;
  line-height: 1.2;
  color: white;
  font-size: 5rem;
`;

const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Home = () => (
  <Wrapper>
    <Title>Welcome</Title>
    <Button>Enter</Button>
  </Wrapper>
);

export default Home;
