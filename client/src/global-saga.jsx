import { fork, all } from 'redux-saga/effects';

import albumsSaga from './pages/Albums/List/watcher';

const sagas = [albumsSaga];

function* globalSagas() {
  const globalSagasForks = sagas.map(saga => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;
