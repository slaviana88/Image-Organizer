import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import albumsReducer from 'pages/Albums/List/reducer';
import albumReducer from 'pages/Albums/Detail/reducer';
import createAlbumReducer from 'pages/Albums/AlbumCreateForm/reducer';

const allReducers = combineReducers({
  albums: albumsReducer,
  form: formReducer,
  album: albumReducer,
  createAlbum: createAlbumReducer
});

export default allReducers;
