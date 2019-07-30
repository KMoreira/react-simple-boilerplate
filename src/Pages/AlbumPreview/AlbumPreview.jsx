import React from 'react';
import styled from 'styled-components';

import AlbumImage from './AlbumImage';
import TrackList from './TracksList';
import Trackitem from './TrackItem';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 1px;
  align-items: center;
`;

const Title = styled.h1`
  grid-area: 1 / 1 / 2 / 3;
  font-family: sans-serif;
  color: white;
  font-size: 3rem;
  text-align: center;
  line-height: 1.2;
`;


const AlbumPreview = () => {
  return (
    <Wrapper>
      <Title>30 seconds to Mars</Title>

      <AlbumImage
        src="https://data.whicdn.com/images/5872230/large.jpg"
        alt="30 seconds to mars album"
        title="This is War"
      />

      <TrackList>
        <Trackitem name="Call to arms" time="3:00" />
        <Trackitem name="Call to arms" time="3:00" />
        <Trackitem name="Call to arms" time="3:00" />
      </TrackList>
    </Wrapper>
  );
};

export default AlbumPreview;
