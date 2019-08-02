import React from 'react';
import styled from 'styled-components';

import PlayIcon from './PlayIcon';

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  padding: .5rem .5rem;
  margin-bottom: .2rem;
  background-color: white;
  font-family: sans-serif;
  cursor: pointer;
  filter: brightness(70%);

  &:hover {
    filter: brightness(100%);
  }
`;

const Button = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
`;

const TrackItem = ({ name, time }) => (
  <ListItem>
    <Button type="button" aria-label="play track">
      <PlayIcon />
    </Button>

    <p>{name}</p>
    <time>{time}</time>
  </ListItem>
);

export default TrackItem;
