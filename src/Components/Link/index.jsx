import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(RouterLink)`
  color: #fff;
  text-decoration: none;
`;

const Link = (props) => {
  const { children } = props;
  return (
    <StyledLink {...props}>{children}</StyledLink>
  );
};

export default Link;
