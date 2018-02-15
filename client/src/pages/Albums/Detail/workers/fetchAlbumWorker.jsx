import axios from 'axios';
import {call, put} from 'redux-saga/effects';

import {FETCH_ALBUM_URL} from '../constants';
import {successFetchAlbum} from '../actions';
import {addInitialImages} from '../../Photography/actions';

export function* fetchAlbumWorker(action) {
  try {
    const response = yield call(axios.get, FETCH_ALBUM_URL(action.data));
    yield* [
      put(successFetchAlbum(response.data)),
      put(addInitialImages(response.data[0].images))
    ];
  } catch (error) {
    console.log(error);
  }
}

export default fetchAlbumWorker;
