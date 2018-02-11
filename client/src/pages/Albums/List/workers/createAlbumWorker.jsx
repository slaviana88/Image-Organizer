import axios from 'axios';
import {call, put} from 'redux-saga/effects';

import {CREATE_ALBUM_URL} from '../constants';
import {successCreateAlbum, failCreateAlbum, fetchAlbums} from '../actions';

function* uploadImage(fileData, file) {
  const postData = new FormData();
  _.each(fileData.fields, (field, fieldName) => {
    console.log(fieldName, field);
    postData.append(fieldName, field);
  });

  postData.append('file', file);

  const response = yield call(axios.post, CREATE_ALBUM_URL, postData);
}

export function* createAlbumWorker(action) {
  try {
    const {data, fileData, file} = action;

    yield call(uploadImage, fileData, file);

    let newData = Object.assign({}, data, {image: fileData});

    const response = yield call(axios.post, CREATE_ALBUM_URL, newData);

    yield put(successCreateAlbum(response.data));
  } catch (error) {
    yield put(failCreateAlbum(error.response.data));
  }
}

export default createAlbumWorker;
