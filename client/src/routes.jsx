import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import paths from 'paths';
import Layout from 'components/Layout';

import DashBoard from 'pages/DashBoard';
import Albums from 'pages/Albums';
import CreateAlbum from 'pages/Albums/CreateAlbum';

function routes() {
  return (
    <Router>
      <Switch>
        <Route path={paths.dashboard} component={DashBoard} />
        <Route path={paths.albums} component={Albums} />
      </Switch>
    </Router>
  );
}

export default routes;
