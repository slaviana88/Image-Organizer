import {
  FETCH_ALBUMS,
  SUCCESS_FETCH_ALBUMS,
  FAIL_FETCH_ALBUMS,
  SUCCESS_CREATE_ALBUM
} from './constants';

const initialState = {albums: []};

const albumsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SUCCESS_FETCH_ALBUMS:
      console.log('reducer');
      newState = {
        albums: action.data
      };
      break;

    case SUCCESS_CREATE_ALBUM:
      newState = {
        albums: state.albums.concat(action.data)
      };
      break;

    default:
      return state;
  }

  return Object.assign({}, state, newState);
};

export default albumsReducer;
