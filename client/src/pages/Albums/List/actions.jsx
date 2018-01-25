import {
  FETCH_ALBUMS,
  SUCCESS_FETCH_ALBUMS,
  FAIL_FETCH_ALBUMS,
  CREATE_ALBUM,
  SUCCESS_CREATE_ALBUM,
  FAIL_CREATE_ALBUM
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

export const createAlbum = data => {
  return {
    type: CREATE_ALBUM,
    data
  };
};

export const successCreateAlbum = data => {
  return {
    type: SUCCESS_CREATE_ALBUM,
    data
  };
};

export const failCreateAlbum = errors => {
  return {
    type: FAIL_CREATE_ALBUM,
    errors
  };
};
