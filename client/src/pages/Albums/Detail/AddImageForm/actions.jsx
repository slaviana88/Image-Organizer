import {ADD_IMAGE, SUCCESS_ADD_IMAGE} from './constants';

export const addImage = (data, fileData = {}, file = {}) => {
  return {
    type: ADD_IMAGE,
    data,
    fileData,
    file
  };
};

export const successAddImage = data => {
  return {
    type: SUCCESS_ADD_IMAGE,
    data
  };
};
