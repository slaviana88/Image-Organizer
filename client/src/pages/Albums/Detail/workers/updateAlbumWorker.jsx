import axios from 'axios';
import {call, put} from 'redux-saga/effects';

import {CREATE_ALBUM_URL, UPDATE_ALBUM_URL} from '../constants';
import {successUpdateAlbum, failCreateAlbum, fetchAlbums} from '../actions';

function* uploadImage(files, albumId) {
  const postData = new FormData();
  console.log('images', files);
  files.map(image => {
    console.log(image);
    postData.append('filename', image.name);
    postData.append('file_type', image.type);
    postData.append('file', image.file);
  });

  const url = UPDATE_ALBUM_URL(albumId);
  const response = yield call(axios.post, url, postData);
}

export function* updateAlbumWorker(action) {
  try {
    const {files, albumId} = action;
    yield call(uploadImage, files, albumId);

    let newData = Object.assign(
      {},
      {
        images: files.map(file => file.name)
      }
    );

    const url = UPDATE_ALBUM_URL(albumId);
    const response = yield call(axios.post, url, newData);

    yield put(successUpdateAlbum(response.data));
  } catch (error) {
    console.log(error);
  }
}

export default updateAlbumWorker;
