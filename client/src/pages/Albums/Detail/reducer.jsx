import {SUCCESS_FETCH_ALBUM} from './constants';

const initialState = {album: null};

const albumReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SUCCESS_FETCH_ALBUM:
      newState = {
        albums: action.data
      };
      break;

    default:
      return state;
  }

  return Object.assign({}, state, newState);
};

export default albumReducer;
