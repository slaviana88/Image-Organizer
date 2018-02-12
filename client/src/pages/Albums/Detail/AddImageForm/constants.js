const ADD_IMAGE = 'ADD_IMAGE';
const SUCCESS_ADD_IMAGE = 'SUCCESS_ADD_IMAGE';

const ADD_IMAGE_URL = albumId =>
  `http://localhost:3001/api/albums/${albumId}/add-image/`;

export {ADD_IMAGE, SUCCESS_ADD_IMAGE, ADD_IMAGE_URL};
