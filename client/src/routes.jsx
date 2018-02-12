import React from 'react';
import {Router} from 'react-router';
import {Switch, Route} from 'react-router-dom';

import Albums from 'pages/Albums/List';
import AlbumDetail from 'pages/Albums/Detail';
import {ALBUM_DETAIL_URL} from 'pages/Albums/List/constants';

import history from './history';

function routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/albums" component={Albums} />
        <Route exact path="/albums/:albumId" component={AlbumDetail} />
      </Switch>
    </Router>
  );
}

export default routes;
