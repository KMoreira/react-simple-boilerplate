import React from 'react';
import styled from 'styled-components';

const MenuButtonStyled = styled.button`
background-color: transparent;
border: 0 none;
outline: 0;
cursor: pointer;

div {
  transition: all 0.5s;
  position: absolute;
  right: 20px;
  top: 20px;

  &:before, &:after {
    content: '';
    transition: all 0.5s;
  }

  &:before, &:after, span {
    display: block;
    height: 2px;
    width: 30px;
    margin-bottom: 10px;
    background-color: #fff;
  }


  ${props => (props.toogleMenu ? `
    &:before { transform: rotate(45deg) translateY(17px) }
    &:after { transform: rotate(-45deg) translateY(-17px) }
    span { opacity: 0 }
    right: 15px
  ` : `
    &:before, &:after { transform: rotate(0); }
    span { opacity: 1 }
  `)}
}
`;

const MenuButton = ({ toogleMenu, onMenuButtonClick }) => (
  <MenuButtonStyled toogleMenu={toogleMenu} onClick={onMenuButtonClick}>
    <div>
      <span />
    </div>
  </MenuButtonStyled>
);

export default MenuButton;
