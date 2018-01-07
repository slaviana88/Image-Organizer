import { takeLatest } from 'redux-saga/effects';

import fetchAlbumsWorker from './workers/fetchAlbumsWorker';

import { FETCH_ALBUMS } from './constants';

function* albumsSaga() {
  yield takeLatest(FETCH_ALBUMS, fetchAlbumsWorker);
}

export default albumsSaga;
