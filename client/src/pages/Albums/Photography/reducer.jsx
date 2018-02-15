import _ from 'lodash';
import { arrayMove } from 'react-sortable-hoc';
import {
  ADD_IMAGE,
  REMOVE_IMAGE,
  MOVE_IMAGE,
  DELETE_STATE,
  ADD_INITIAL_IMAGES
} from './constants';

const initialState = {
  images: []
};

const dropzoneImagesReducer = (state = initialState, action) => {
  var newState;
  switch (action.type) {
    case ADD_IMAGE:
      const imageFile = action.image;
      const imageToAdd = {
        type: imageFile.type,
        preview: imageFile.preview,
        newImage: true,
        name: imageFile.name,
        file: imageFile
      };
      newState = {
        images: state.images.concat(imageToAdd)
      };
      break;

    case ADD_INITIAL_IMAGES:
      console.log(action);
      newState = {
        images: action.images
      };
      break;

    case REMOVE_IMAGE:
      newState = {
        images: state.images.filter(image => !_.isEqual(image, action.image))
      };
      break;

    case MOVE_IMAGE:
      newState = {
        images: arrayMove(state.images, action.oldIndex, action.newIndex)
      };
      break;

    case DELETE_STATE:
      newState = initialState;
      break;

    default:
      return state;
  }

  return Object.assign({}, state, newState);
};

export default dropzoneImagesReducer;
