import React from 'react';
import { React, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import PetsContainer from './components/pets/PetsPage';
import PetPage from './components/pets/PetPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/pets" component={PetsContainer} />
  </Route>
);
