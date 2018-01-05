import {
  FETCH_ALBUMS,
  SUCCESS_FETCH_ALBUMS,
  FAIL_FETCH_ALBUMS
} from './constants';

const initialAlbums = { albums: null };
const exampleAlbums = [
  {
    id: 1,
    name: 'Album for krasi',
    user: {
      name: 'krasi',
      age: 21
    }
  },
  {
    id: 2,
    name: 'Album for marto',
    user: {
      name: 'marto',
      age: 21
    }
  },
  {
    id: 3,
    name: 'Album for ivo',
    user: {
      name: 'ivo',
      age: 22
    }
  }
];

const albumsReducer = (state = { initialAlbums }, action) => {
  let newState;
  switch (action.type) {
    case SUCCESS_FETCH_ALBUMS:
      console.log('reducer');
      newState = {
        albums: action.data
      };
      break;

    default:
      return state;
  }

  return Object.assign({}, state, newState);
};

export default albumsReducer;
