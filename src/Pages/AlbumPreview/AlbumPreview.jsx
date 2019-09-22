import React from 'react';
import styled from 'styled-components';

import AlbumImage from './AlbumImage';
import TrackList from './TracksList';
import Trackitem from './TrackItem';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.1fr 0.5fr 1.5fr;
  grid-template-areas: 'title title' 'album album' 'tracks tracks';

  @media screen and (min-width: 550px) {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    grid-template-rows: 0.3fr 1.7fr;
    grid-template-areas: 'title title' 'album tracks';
  }
`;

const Title = styled.h1`
  grid-area: title;
  font-family: sans-serif;
  color: white;
  font-size: 3rem;
  text-align: center;
  line-height: 1.2;
`;

const getAlbumById = async (id) => {
  const url = `https://deezerdevs-deezer.p.rapidapi.com/album/${id}`;
  const headers = new Headers({
    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
    'x-rapidapi-key': 'f4a0d690eamshf6426a03a71004ap1c8cc5jsnb4334069edb0',
  });

  const response = await fetch(url, {
    method: 'GET',
    headers,
  });

  const result = response.ok ? await response.json() : null;
  return !result.error ? result : null;
};

class AlbumPreview extends React.Component {
  state = {
    album: null,
    playing: null,
  };

  audio = new Audio();

  async componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    const { albumId } = this.props.match.params;
    this.updateAlbum(albumId);
    this.audio.addEventListener('ended', () => this.setState({ playing: null }));
  }

  async componentDidUpdate(prevProps) {
    // eslint-disable-next-line react/destructuring-assignment
    const { albumId } = this.props.match.params;

    if (prevProps.match.params.albumId !== albumId) {
      this.updateAlbum(albumId);
    }
  }

  updateAlbum = async (albumId) => {
    const album = albumId ? await getAlbumById(albumId) : null;
    this.setState({ album });
  }

  playTrack = (trackSource) => {
    if (trackSource === this.audio.src) {
      this.audio.pause();
      this.audio.src = null;
      this.setState({ playing: null });
      return;
    }

    this.audio.src = trackSource;
    this.audio.play();
    this.setState({ playing: trackSource });
  };

  render() {
    const { album, playing } = this.state;

    if (!album) {
      return (
        <Wrapper>
          <Title>Selecione um album no menu lateral ¯\_(ツ)_/¯</Title>
        </Wrapper>
      );
    }

    return (
      <Wrapper>
        <AlbumImage
          src={album.cover_big}
          alt={album.title}
          title={album.title}
        />

        <TrackList>
          {album.tracks.data.map(track => (
            <Trackitem
              key={track.id}
              name={track.title}
              track={track.preview}
              time={track.duration}
              playTrackFn={this.playTrack}
              playing={playing === track.preview}
            />
          ))}
        </TrackList>
      </Wrapper>
    );
  }
}

export default AlbumPreview;
