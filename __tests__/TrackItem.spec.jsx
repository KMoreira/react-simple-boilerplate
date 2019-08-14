import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TrackItem from '../src/Pages/AlbumPreview/TrackItem';

configure({ adapter: new Adapter() });

describe('TrackItem', () => {
  let wrapper;
  const playTrack = jest.fn();
  const trackUrl = 'http://dezzer/track/test';

  beforeEach(() => {
    wrapper = mount(<TrackItem name="Era so mais um silva" time="230" track={trackUrl} playTrackFn={playTrack} playing="true" />);
  });

  afterEach(() => jest.clearAllMocks());

  test('should receive name and time', () => {
    expect(wrapper.props().name).toBe('Era so mais um silva');
    expect(wrapper.props().name).not.toBe('Bohemia Raphsody');
  });

  test('should call function on click', () => {
    wrapper.find('button').simulate('click');
    expect(playTrack).toHaveBeenCalledWith(trackUrl);
  });
});
