import axios from 'axios';
import {call, put} from 'redux-saga/effects';

import {CREATE_ALBUM_URL} from '../constants';
import {successCreateAlbum, failCreateAlbum, fetchAlbums} from '../actions';

export function* createAlbumWorker(action) {
  try {
    const {data, files} = action;

    const postData = new FormData();

    files.map(image => {
      postData.append('filename', image.name);
      postData.append('file_type', image.type);
      postData.append('file', image.file);
    });

    postData.append('description', data.description);
    postData.append('title', data.title);

    data.longitude ? postData.append('longtitude', data.longitude) : null;
    data.latitude ? postData.append('latitude', data.latitude) : null;

    console.log('asdsa', postData);
    var data2;

    if (!_.isArray(postData)) {
      data2 = [postData];
    } else {
      data2 = postData;
    }
    debugger;
    const response = yield call(axios.post, CREATE_ALBUM_URL, data2);

    yield* [put(successCreateAlbum(response.data))].concat(
      action.extraActions.map(a => a())
    );
  } catch (error) {
    console.log(error);
  }
}

export default createAlbumWorker;
