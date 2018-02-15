export const FETCH_ALBUM = 'FETCH_ALBUM';
export const SUCCESS_FETCH_ALBUM = 'SUCCESS_FETCH_ALBUM';
export const UPDATE_ALBUM = 'UPDATE_ALBUM';
export const SUCCESS_UPDATE_ALBUM = 'SUCCESS_UPDATE_ALBUM';

export const SET_PLACES = 'SET_PLACES';

export const FETCH_ALBUM_URL = albumId =>
  `http://localhost:3001/api/albums/${albumId}/`;

export const UPDATE_ALBUM_URL = albumId =>
  `http://localhost:3001/api/albums/${albumId}/update/`;
