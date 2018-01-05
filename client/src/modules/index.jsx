import {combineReducers} from 'redux';

import albumsReducer from './albums';

const allReducers = combineReducers({albums: albumsReducer});

export default allReducers;
