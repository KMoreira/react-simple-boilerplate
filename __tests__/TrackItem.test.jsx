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
    wrapper = mount(<TrackItem name="NameA" time="20000" track={trackUrl} playTrackFn={playTrack} />);
  });

  afterEach(() => jest.clearAllMocks());

  test('should receive name and time', () => {
    expect(wrapper.props().name).toBe('NameA');
    expect(wrapper.props().name).not.toBe('NameB');
  });

  test('should call function on click', () => {
    wrapper.find('button').simulate('click');
    expect(playTrack).toHaveBeenCalledWith(trackUrl);
  });
});
