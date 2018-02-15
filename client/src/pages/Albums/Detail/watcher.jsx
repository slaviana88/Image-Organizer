import {takeLatest} from 'redux-saga/effects';

import fetchAlbumWorker from './workers/fetchAlbumWorker';
import updateAlbumWorker from './workers/updateAlbumWorker';

import {FETCH_ALBUM, UPDATE_ALBUM} from './constants';

function* albumSaga() {
  yield takeLatest(FETCH_ALBUM, fetchAlbumWorker);
  yield takeLatest(UPDATE_ALBUM, updateAlbumWorker);
}

export default albumSaga;
