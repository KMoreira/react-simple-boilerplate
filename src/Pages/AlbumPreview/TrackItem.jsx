import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
  padding: .5rem .2rem;
  margin-bottom: .2rem;
  background-color: white;
  font-family: sans-serif;
  cursor: pointer;

  &:hover {
    filter: brightness(70%)
  }
`;

const TrackItem = ({ name, time }) => (
  <ListItem>
    <span aria-label="play track">Play</span>
    <p>{name}</p>
    <time>{time}</time>
  </ListItem>
);

export default TrackItem;
