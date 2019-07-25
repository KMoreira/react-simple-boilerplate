import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  min-width: 100px;
  max-width: 200px;
  background-color: #fff;
  color: #000;
  padding: 3px;
  border: none;
  border-radius: 5px;
  transition-duration: 0.3s;
  transition-timing-function: ease-in;
  transition-property: all;
  &:hover {
    filter: brightness(90%);
  }
`;

const Button = (props) => {
  const { children } = props;
  return (
    <StyledButton {...props}>{children}</StyledButton>
  );
};

export default Button;
