import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import albumsReducer from 'pages/Albums/List/reducer';

const allReducers = combineReducers({
  albums: albumsReducer,
  form: formReducer
});

export default allReducers;
