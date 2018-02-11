import ADD_IMAGE from './constants';

export const addImage = data => {
  return {
    type: ADD_IMAGE,
    data
  };
};
