import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import albumsReducer from 'pages/Albums/List/reducer';
import albumReducer from 'pages/Albums/Detail/reducer';
import dropzoneImagesReducer from 'pages/Albums/Photography/reducer';
import navigationReducer from 'pages/Navigation/reducer';

const allReducers = combineReducers({
  albums: albumsReducer,
  form: formReducer,
  album: albumReducer,
  dropzoneImages: dropzoneImagesReducer,
  navigation: navigationReducer
});

export default allReducers;
