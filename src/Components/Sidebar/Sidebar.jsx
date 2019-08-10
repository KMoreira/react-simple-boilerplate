import React, { useState } from 'react';
import styled from 'styled-components';

import AlbumInfo from './AlbumInfo';

const StyledAside = styled.aside`
  background-color: #000;
  display: inline-block;
  position: fixed;
  width: 320px;
  padding: 4px;
  ${({ toogleMenu }) => (toogleMenu ? 'left: 0;' : 'left: -100vw;')}
  bottom: 0;
  top: 70px;
  height: calc(100vh - 78px);
  transition: left 0.3s ease-in;
  overflow-y: auto;

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #000000;
    border: 2px solid #555555;
  }
`;

const StyledList = styled.ul`
  & img {
    max-width: 120px;
  }
`;

const StyledSearchDiv = styled.section`
  padding: 5px;
  color: white;
  font-family: sans-serif;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const debounce = (fn, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
};
const Sidebar = ({ toogleMenu }) => {
  const tabIndexValue = toogleMenu ? 0 : -1;

  const [albums, setAlbums] = useState([]);

  const searchAlbuns = debounce(async ({ value }) => {
    if (!value || value === '') return;

    const url = `https://deezerdevs-deezer.p.rapidapi.com/search/album?q=${value}&limit=20`;
    const headers = new Headers({
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'x-rapidapi-key': 'f4a0d690eamshf6426a03a71004ap1c8cc5jsnb4334069edb0',
    });

    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) return;

    const result = await response.json();
    setAlbums(result.data);
  }, 400);

  return (
    <StyledAside toogleMenu={toogleMenu}>
      <StyledSearchDiv role="search">
        <label htmlFor="album-search">Seach:</label>
        <input id="album-search" name="album-search" type="search" onKeyUp={({ target }) => searchAlbuns(target)} />
      </StyledSearchDiv>
      <StyledList tabindex={tabIndexValue}>
        {albums.map(album => (<AlbumInfo key={album.id} data={album} tabindex={tabIndexValue} />))}
      </StyledList>
    </StyledAside>
  );
};

export default Sidebar;
