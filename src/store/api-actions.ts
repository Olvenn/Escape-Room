import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { AxiosInstance } from 'axios';
import { Quest } from '../types/types';
import { setError, redirectToRoute } from './action';
import { APIRoute, AppRoute, Message } from '../const';
import { loadQuests, setSuccessfullyData } from './reducers/quests';
import { BookingData } from '../types/state';
import { toast } from 'react-toastify';
import { setIsSending, setSuccessfully } from '../store/reducers/booking';

export const fetchQuestsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchQuests',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Quest[]>(APIRoute.Quests);
      dispatch(loadQuests(data));
      dispatch(setError(''));
      dispatch(setSuccessfullyData(true));
    } catch (error) {
      dispatch(loadQuests([]));
      dispatch(setError(Message.OrderError));
    }
  },
);

export const bookingAction = createAsyncThunk<void, BookingData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/booking',
  async (order: BookingData, { dispatch, extra: api }) => {
    try {
      await api.post<BookingData>(APIRoute.Orders, order);
      toast.info(Message.OrderSuccess);
      dispatch(setSuccessfully(true));
      dispatch(redirectToRoute(AppRoute.Root));
    } catch (error) {
      toast.error(Message.Problem);
      dispatch(setIsSending(false));
    }
  });
