// src/reducers/index.js

import { combineReducers } from 'redux';
import AlbumReducer from './album-reducer';

const reducers = {
    albumStore: AlbumReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
