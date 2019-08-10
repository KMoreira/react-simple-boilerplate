
import React from 'react';
import { storiesOf } from '@storybook/react';
import TrackItem from '../../../src/Pages/AlbumPreview/TrackItem';

storiesOf('TrackItem', module)
  .add('with name and time', () => (
    <TrackItem name="Call to arms" time="3:00" />
  ));
