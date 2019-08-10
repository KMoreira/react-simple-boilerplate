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

const AlbumInfo = ({ data, tabindex }) => (
  <ListItem tabindex={tabindex}>
    <Image
      src={data.cover_medium}
      alt={data.title}
    />
    <InfoWrapper>
      <h1>{data.title}</h1>
      <h2>{data.artist.name}</h2>
      <small>{data.nb_tracks} tracks</small>
    </InfoWrapper>
  </ListItem>
);

export default AlbumInfo;
