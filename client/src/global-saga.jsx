import { fork, all } from 'redux-saga/effects';

import albumsSaga from './pages/Albums/watcher';

const sagas = [albumsSaga];

function* globalSagas() {
  const globalSagasForks = sagas.map(saga => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;
