import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { redirect } from './middlewares/redirect';
import { createAPI } from '../services/api';
import { main } from './reducers/main';
import { offers } from './reducers/offers';
import { NameSpace } from '../const';

export const api = createAPI();
export const reducer = combineReducers({
  [NameSpace.Main]: main,
  [NameSpace.Offers]: offers.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
