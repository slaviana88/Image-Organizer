import {takeLatest} from 'redux-saga/effects';

import fetchAlbumWorker from './workers/fetchAlbumWorker';

import {FETCH_ALBUM} from './constants';

function* albumSaga() {
  yield takeLatest(FETCH_ALBUM, fetchAlbumWorker);
}

export default albumSaga;
