import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import routes from 'routes';
import reducers from 'modules';

const store = createStore(reducers);

ReactDom.render(
  <Provider store={store}>
    <div>{routes()}</div>
  </Provider>,
  document.getElementById('root')
);
