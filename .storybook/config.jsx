import { configure } from '@storybook/react';

function loadStories() {
  // eslint-disable-next-line global-require
  require('./stories/TrackItem/index');
  // You can require as many stories as you need.
}

configure(loadStories, module);
