import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import globalSagas from './global-saga';
import createSagaMiddleware from 'redux-saga';

import Navigation from './pages/Navigation';

import routes from 'routes';
import reducers from './global-reducer';
import './assets/styles/base.scss';

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);

sagaMiddleware.run(globalSagas);

ReactDom.render(
  <Provider store={store}>
    <div>
      <Navigation />
      <div>{routes()}</div>
    </div>
  </Provider>,
  document.getElementById('root')
);
