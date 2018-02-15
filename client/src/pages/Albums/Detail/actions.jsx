import {
  FETCH_ALBUM,
  SUCCESS_FETCH_ALBUM,
  UPDATE_ALBUM,
  SUCCESS_UPDATE_ALBUM,
  SET_PLACES
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


export const setPlaces = places => {
  return {
    type: SET_PLACES,
    places
  };
};

export const updateAlbum = (albumId, files = {}) => {
  return {
    type: UPDATE_ALBUM,
    albumId,
    files
  };
};

export const successUpdateAlbum = data => {
  return {
    type: SUCCESS_UPDATE_ALBUM,
    data
  };
};
