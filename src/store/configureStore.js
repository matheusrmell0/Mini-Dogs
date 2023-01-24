import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

// Middlewares
import logger from './middleware/logger';
import localStorage from './middleware/localStorage';

// Reducers
import login from './login';
import photos from './photos';

const middleware = [...getDefaultMiddleware(), logger, localStorage];
const reducer = combineReducers({ login, photos });
const store = configureStore({ reducer, middleware });

export default store;
