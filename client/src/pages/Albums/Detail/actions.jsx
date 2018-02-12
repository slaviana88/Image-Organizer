import {FETCH_ALBUM, SUCCESS_FETCH_ALBUM} from './constants';

export const fetchAlbum = data => {
  return {
    type: FETCH_ALBUM,
    data
  };
};

export const successFetchAlbum = data => {
  return {
    type: SUCCESS_FETCH_ALBUM,
    data
  };
};
