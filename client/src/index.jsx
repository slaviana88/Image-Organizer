import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';

import routes from 'routes';

const store = {initial: 'hello world'};

ReactDom.render(
  <Provider store={store}>
    <div>{routes()}</div>
  </Provider>,
  document.getElementById('root')
);
