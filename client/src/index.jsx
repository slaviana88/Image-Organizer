import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';

const store = {initial: 'hello world'};

ReactDom.render(
  <Provider store={store}>
    <div>Hello everyone</div>
  </Provider>,
  document.getElementById('root')
);
