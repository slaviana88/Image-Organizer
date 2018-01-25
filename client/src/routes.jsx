import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import paths from 'paths';

import Albums from 'pages/Albums/List';

function routes() {
  return (
    <Router>
      <Switch>
        <Route path={paths.albums} component={Albums} />
      </Switch>
    </Router>
  );
}

export default routes;
