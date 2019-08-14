import React from 'react';
import styled from 'styled-components';

import convertTime from 'Helpers';

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
  filter: ${props => (props.playing ? 'brightness(100%)' : 'brightness(70%)')};

  &:hover {
    filter: brightness(100%);
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
  <ListItem playing={playing}>
    <Button
      type="button"
      aria-label="play track"
      onClick={() => playTrackFn(track)}
    >
      {playing ? <Pause src={PauseIcon} alt="" /> : <Play />}
      <p>{name}</p>
      <time>{convertTime(time)}</time>
    </Button>
  </ListItem>
);

export default TrackItem;
