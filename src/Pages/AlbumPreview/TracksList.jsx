import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  grid-area: tracks;
  margin: 0 1rem;
  align-self: start;
`;

const TracksList = ({ children }) => (
  <List>
    { children }
  </List>
);

export default TracksList;
