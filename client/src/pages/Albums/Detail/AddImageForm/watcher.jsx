import {takeLatest} from 'redux-saga/effects';

import addImageWorker from './workers/addImageWorker';

import {ADD_IMAGE} from './constants';

function* albumsSaga() {
  yield takeLatest(ADD_IMAGE, addImageWorker);
}

export default albumsSaga;
