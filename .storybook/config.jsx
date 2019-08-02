import { configure } from '@storybook/react';

function loadStories() {
  // eslint-disable-next-line global-require
  require('./stories/index.jsx');
  // You can require as many stories as you need.
}

configure(loadStories, module);
