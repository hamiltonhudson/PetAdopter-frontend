import React from 'react';
import { React, IndexRoute } from 'react-router';
import App from './components/App';
import Dashboard from './Dashboard';
import Welcome from './WElcome';
// import PetsContainer from './components/pets/PetsPage';
// import PetPage from './components/pets/PetPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    {/* <Route path="/pets" component={PetsContainer} /> */}
  </Route>
);
