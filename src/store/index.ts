import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { redirect } from './middlewares/redirect';
import { createAPI } from '../services/api';
import { main } from './reducers/main';
import { quests } from './reducers/quests';
import { booking } from './reducers/booking';
import { NameSpace } from '../const';

export const api = createAPI();
export const reducer = combineReducers({
  [NameSpace.Main]: main,
  [NameSpace.Quests]: quests.reducer,
  [NameSpace.Booking]: booking.reducer,
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
