import { ADD_IMAGE, REMOVE_IMAGE, MOVE_IMAGE, DELETE_STATE } from './constants';

export const addImage = image => {
  return {
    type: ADD_IMAGE,
    image
  };
};

export const removeImage = image => {
  return {
    type: REMOVE_IMAGE,
    image
  };
};

export const moveImage = (oldIndex, newIndex) => {
  return {
    type: MOVE_IMAGE,
    oldIndex,
    newIndex
  };
};

export const deleteState = () => {
  return {
    type: DELETE_STATE
  };
};
