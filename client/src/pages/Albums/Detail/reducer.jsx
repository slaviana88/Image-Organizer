import { SUCCESS_FETCH_ALBUM, SET_PLACES } from './constants';

const initialState = { album: null, places: [] };

const albumReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SUCCESS_FETCH_ALBUM:
      newState = {
        album: action.data
      };
      break;

    case SET_PLACES:
      newState = {
        places: action.places
      };
      break;

    default:
      return state;
  }

  return Object.assign({}, state, newState);
};

export default albumReducer;
