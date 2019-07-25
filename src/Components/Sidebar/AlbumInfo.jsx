import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 2px;
  :focus {
    outline: 1px dotted white;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 120px;
`;

const InfoWrapper = styled.div`
  color: #fff;
  margin-left: 1rem;
  font-family: sans-serif;

  & h1 {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const AlbumInfo = props => (
  <ListItem tabIndex="0" {...props}>
    <Image
      src="https://data.whicdn.com/images/5872230/large.jpg"
      alt="30stm album"
    />
    <InfoWrapper>
      <h1>This is War</h1>
      <h2>30 Seconds to Mars</h2>
      <small>11 músicas</small>
    </InfoWrapper>
  </ListItem>
);

export default AlbumInfo;
