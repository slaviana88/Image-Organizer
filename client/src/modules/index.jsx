import { combineReducers } from 'redux';

import albumsReducer from '../pages/Albums/reducer';

const allReducers = combineReducers({ albums: albumsReducer });

export default allReducers;
