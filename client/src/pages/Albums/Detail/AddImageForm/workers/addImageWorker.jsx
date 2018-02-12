import axios from 'axios';
import {call, put} from 'redux-saga/effects';

import {ADD_IMAGE_URL} from '../constants';
import {successAddImage} from '../actions';

function* uploadImage(fileData, file) {
  const postData = new FormData();
  _.each(fileData.fields, (field, fieldName) => {
    console.log(fieldName, field);
    postData.append(fieldName, field);
  });

  postData.append('file', file);

  const response = yield call(axios.post, ADD_IMAGE_URL, postData);
}

export function* addImageWorker(action) {
  try {
    const {data, fileData, file} = action;

    yield call(uploadImage, fileData, file);

    let newData = Object.assign({}, data, {image: fileData});

    const response = yield call(axios.post, ADD_IMAGE_URL, newData);

    yield put(successAddImage(response.data));
  } catch (error) {
    console.log(error);
  }
}

export default addImageWorker;
