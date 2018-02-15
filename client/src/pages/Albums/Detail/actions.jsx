import {
  FETCH_ALBUM,
  SUCCESS_FETCH_ALBUM,
  UPDATE_ALBUM,
  SUCCESS_UPDATE_ALBUMS
} from './constants';

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

export const updateAlbum = (albumId, files = {}) => {
  return {
    type: UPDATE_ALBUM,
    albumId,
    files
  };
};

export const successUpdateAlbums = data => {
  return {
    type: SUCCESS_UPDATE_ALBUMS,
    data
  };
};
