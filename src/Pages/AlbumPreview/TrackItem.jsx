import React from 'react';
import styled from 'styled-components';

import { Play } from './Icons';

import PauseIcon from './pause.png';

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

const Pause = styled.img`
  width: 2rem;
`;

const TrackItem = ({
  name, time, track, playTrackFn, playing,
}) => (
  <ListItem>
    <Button
      type="button"
      aria-label="play track"
      onClick={() => playTrackFn(track)}
    >
      {playing ? <Pause src={PauseIcon} alt="" /> : <Play />}
      <p>{name}</p>
      <time>{time}</time>
    </Button>
  </ListItem>
);

export default TrackItem;
