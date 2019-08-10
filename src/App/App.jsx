import React, { Fragment } from 'react';
import { Reset } from 'styled-reset';
import { BrowserRouter, Route } from 'react-router-dom';
import { About, AlbumPreview } from '../Pages';
import Main from '../Layouts';
import './GlobalStyle.css';

const App = () => (
  <Fragment>
    <Reset />
    <BrowserRouter>
      <Main>
        <Route path="/" exact component={AlbumPreview} />
        <Route path="/sobre" component={About} />
      </Main>
    </BrowserRouter>
  </Fragment>
);

export default App;
