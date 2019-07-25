import React from 'react';
import styled from 'styled-components';

const MenuButtonStyled = styled.button`
background-color: transparent;
border: 0 none;
outline: 0;
cursor: pointer;

:focus div {
  outline: 1px dotted white;
};

div {
  transition: all 0.5s;
  position: absolute;
  right: 20px;
  top: 20px;

  &:before, &:after {
    content: '';
    transition: all 0.3s;
  }

  &:before, &:after, span {
    display: block;
    height: 2px;
    width: 30px;
    margin-bottom: 10px;
    background-color: #fff;
    position: relative;
  }


  ${props => (props.toogleMenu ? `
    &:before { transform: rotate(45deg) translateY(17px); left: 11px;}
    &:after { transform: rotate(-45deg) translateY(-17px); left: 11px; }
    span { opacity: 0; left: 11px;}
    right: 15px
  ` : `
    &:before, &:after { transform: rotate(0); }
    span { opacity: 1 }
  `)}
}
`;

const MenuButton = ({ toogleMenu, onMenuButtonClick }) => (
  <MenuButtonStyled toogleMenu={toogleMenu} onClick={onMenuButtonClick} tabIndex="0">
    <div>
      <span />
    </div>
  </MenuButtonStyled>
);

export default MenuButton;
