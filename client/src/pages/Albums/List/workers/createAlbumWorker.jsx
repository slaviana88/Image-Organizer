import axios from 'axios';
import {call, put} from 'redux-saga/effects';

import {CREATE_ALBUM_URL} from '../constants';
import {successCreateAlbum, failCreateAlbum, fetchAlbums} from '../actions';

export function* createAlbumWorker(action) {
  try {
    const {data, fileData, file} = action;
    let newData = Object.assign({}, data, {image: fileData});

    const response = yield call(axios.post, CREATE_ALBUM_URL, newData);

    yield put(successCreateAlbum(response.data));
  } catch (error) {
    yield put(failCreateAlbum(error.response.data));
  }
}

export default createAlbumWorker;
