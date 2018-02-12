import {fork, all} from 'redux-saga/effects';

import albumsSaga from './pages/Albums/List/watcher';
import albumSaga from './pages/Albums/Detail/watcher';

const sagas = [albumsSaga, albumSaga];

function* globalSagas() {
  const globalSagasForks = sagas.map(saga => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;
