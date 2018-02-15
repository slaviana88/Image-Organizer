import axios from 'axios';
import {call, put} from 'redux-saga/effects';

import {CREATE_ALBUM_URL} from '../constants';
import {successCreateAlbum, failCreateAlbum, fetchAlbums} from '../actions';

function* uploadImage(files) {
  const postData = new FormData();

  files.map(image => {
    postData.append('filename', image.name);
    postData.append('file_type', image.type);
    postData.append('file', image.file);
  });

  const response = yield call(axios.post, CREATE_ALBUM_URL, postData);
}

export function* createAlbumWorker(action) {
  try {
    const {data, files} = action;

    yield call(uploadImage, files);

    let newData = Object.assign({}, data, {
      images: files.map(file => file.name)
    });

    const response = yield call(axios.post, CREATE_ALBUM_URL, newData);

    yield put(successCreateAlbum(response.data));
  } catch (error) {
    console.log(error);
    // yield put(failCreateAlbum(error.response.data));
  }
}

export default createAlbumWorker;
