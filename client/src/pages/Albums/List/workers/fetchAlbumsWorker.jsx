import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import { LIST_ALBUMS_URL } from '../constants';
import { successFetchAlbums, failFetchAlbums } from '../actions';

export function* fetchAlbumsWorker(action) {
  try {
    const response = yield call(axios.get, LIST_ALBUMS_URL);

    yield put(successFetchAlbums(response.data));
  } catch (error) {
    console.log(error);
    yield put(failFetchAlbums(error.response.data));
  }
}

export default fetchAlbumsWorker;
