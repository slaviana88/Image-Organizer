import {takeLatest} from 'redux-saga/effects';

import fetchAlbumsWorker from './workers/fetchAlbumsWorker';
import createAlbumWorker from './workers/createAlbumWorker';

import {FETCH_ALBUMS, CREATE_ALBUM} from './constants';

function* albumsSaga() {
  yield takeLatest(FETCH_ALBUMS, fetchAlbumsWorker);
  yield takeLatest(CREATE_ALBUM, createAlbumWorker);
}

export default albumsSaga;
