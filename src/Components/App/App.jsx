import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { About, Home } from '../../Pages';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sobre" component={About} />
    </Switch>
  </BrowserRouter>
);

export default App;
