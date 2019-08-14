import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

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

const ArtistName = styled.h2`
  margin: 0.3rem 0;
`;

const Album = withRouter(({
  history,
  children,
  id,
  tabIndex,
}) => (
  <ListItem
    onClick={() => history.push(`/${id}`)}
    tabindex={tabIndex}
  >
    {children}
  </ListItem>
));

const AlbumInfo = ({ data, tabindex }) => (
  <Album tabIndex={tabindex} id={data.id}>
    <Image src={data.cover_medium} alt={data.title} />
    <InfoWrapper>
      <h1>{data.title}</h1>
      <ArtistName>{data.artist.name}</ArtistName>
      <small>
        {`${data.nb_tracks} tracks`}
      </small>
    </InfoWrapper>
  </Album>
);

export default AlbumInfo;
