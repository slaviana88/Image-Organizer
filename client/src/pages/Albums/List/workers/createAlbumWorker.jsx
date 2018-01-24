import axios from 'axios';
import {call, put} from 'redux-saga/effects';

import {CREATE_ALBUM_URL} from '../constants';
import {successCreateAlbum, failCreateAlbum} from '../actions';

export function* createAlbumWorker(action) {
  try {
    const response = yield call(axios.get, CREATE_ALBUM_URL);

    yield put(successCreateAlbum(response.data));
  } catch (error) {
    console.log(error);
    yield put(failCreateAlbum(error.response.data));
  }
}

export default createAlbumWorker;
