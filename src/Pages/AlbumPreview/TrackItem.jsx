import React from 'react';
import styled from 'styled-components';

import PlayIcon from './PlayIcon';

const ListItem = styled.li`
  border: 1px solid black;
  padding: 0.5rem 0.5rem;
  margin-bottom: 0.2rem;
  background-color: white;
  font-family: sans-serif;
  cursor: pointer;
  list-style: none;
  box-sizing: border-box;

  &:hover {
    filter: brightness(70%);
  }
`;

const Button = styled.button`
  border: none;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

const TrackItem = ({ name, time, track, playTrackFn }) => {


  return (
    <ListItem>
      <Button type="button" aria-label="play track" onClick={() => playTrackFn(track)}>
        <PlayIcon />
        <p>{name}</p>
        <time>{time}</time>
      </Button>
    </ListItem>
  );
};

export default TrackItem;
