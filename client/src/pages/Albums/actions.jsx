import {
  FETCH_ALBUMS,
  SUCCESS_FETCH_ALBUMS,
  FAIL_FETCH_ALBUMS
} from './constants';

export const fetchAlbums = () => {
  return {
    type: FETCH_ALBUMS
  };
};

export const successFetchAlbums = data => {
  return {
    type: SUCCESS_FETCH_ALBUMS,
    data
  };
};

export const failFetchAlbums = errors => {
  return {
    type: FAIL_FETCH_ALBUMS,
    errors
  };
};
