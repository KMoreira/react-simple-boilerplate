import React, { Fragment } from 'react';
import { Reset } from 'styled-reset';
import { BrowserRouter, Route } from 'react-router-dom';
import { About, Home } from '../../Pages';
import Main from '../../Layouts';

const App = () => (
  <Fragment>
    <Reset />
    <BrowserRouter>
      <Main>
        <Route path="/" exact component={Home} />
        <Route path="/sobre" component={About} />
      </Main>
    </BrowserRouter>
  </Fragment>
);

export default App;
