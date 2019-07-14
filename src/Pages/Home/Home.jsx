import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <Fragment>
    <h1>Página inicial</h1>
    <Link to="/sobre">Sobre</Link>
  </Fragment>
);

export default Home;
