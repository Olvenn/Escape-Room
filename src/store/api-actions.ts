import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { AxiosInstance } from 'axios';
import { Quest } from '../types/types';
import { setError, redirectToRoute } from './action';
import { APIRoute, TIMEOUT_SHOW_ERROR, AppRoute } from '../const';
import { handleError } from '../services/handle-error';
import { loadQuests, loadQuest } from './reducers/quests';
import { store } from '../store';
import { BookingData } from '../types/state';
import { api } from './index'


export const clearErrorAction = createAsyncThunk(
  'main/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

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
      // console.log(data);
      dispatch(setError(''));
    } catch (error) {
      dispatch(setError('Something was wrong. Try it more later.'));
      dispatch(loadQuests([]));
      // console.log('data');
      handleError(error);
    }
  },
);

export const fetchQuestAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/loadOffer',
  async (id: number, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Quest>(`${APIRoute.Quest}/${id}`);
      dispatch(loadQuest(data));
      // console.log(data);
      console.log("data");
    } catch (error) {
      handleError(error);
    }
  },
);


export const bookingAction = createAsyncThunk<void, BookingData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/booking',
  // async (id: number, { dispatch, extra: api }) => {
  async (order: BookingData, { dispatch, extra: api }) => {
    try {

      await api.post<BookingData>(APIRoute.Orders, order)
      // toast.success(MESSAGE.success, theme);
      console.log('sucsess');
      console.log(order);
    } catch (error) {
      console.log(order);
      console.log('error');


    }
  })

// export const fetchCommentsAction = createAsyncThunk<void, number, {
//   dispatch: AppDispatch,
//   state: State,
//   extra: AxiosInstance
// }>(
//   'data/fetchComments',
//   async (id, { dispatch, extra: api }) => {
//     try {
//       const { data } = await api.get<Comment[]>(`${APIRoute.Comments}/${id}`);
//       dispatch(setComments(data));
//       dispatch(setIsLoading(false));
//     } catch (error) {
//       handleError(error);
//     }
//   },
// );

// export const commentAction = createAsyncThunk<void, CommentData, {
//   dispatch: AppDispatch,
//   state: State,
//   extra: AxiosInstance
// }>(
//   'user/comment',
//   async ({ offerId, rating, comment }, { dispatch, extra: api }) => {
//     try {
//       dispatch(setIsLoading(true));
//       const { data } = await api.post<Comment>(`${APIRoute.Comments}/${offerId}`, { rating, comment });
//       dispatch(setComments(data));
//       dispatch(setIsLoading(false));
//       dispatch(setSuccessfully(1));
//     } catch (error) {
//       dispatch(setIsLoading(false));
//       dispatch(setError('Something was wrong. Try it more later.'));
//       dispatch(clearErrorAction());
//       handleError(error);
//     }
//   },
// );

// export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
//   dispatch: AppDispatch,
//   state: State,
//   extra: AxiosInstance
// }>(
//   'data/fetchFavorites',
//   async (_arg, { dispatch, extra: api }) => {
//     try {
//       const { data } = await api.get<Offer[]>(APIRoute.Favorites);
//       dispatch(loadFavorites(data));
//     } catch (error) {
//       handleError(error);
//     }
//   },
// );

// export const changeFavoriteAction = createAsyncThunk<void, Offer, {
//   dispatch: AppDispatch,
//   state: State,
//   extra: AxiosInstance
// }>(
//   'user/changeFavorite',
//   async (offer, { dispatch, extra: api }) => {
//     try {
//       const status = Number(!offer.isFavorite);
//       const { data } = await api.post<Offer>(`${APIRoute.Favorites}/${offer.id}/${status}`);
//       dispatch(changeFavorite(data));
//       dispatch(changeOffers(data));
//     } catch (error) {
//       dispatch(redirectToRoute(AppRoute.Login));
//       handleError(error);
//     }
//   },
// );

// export const fetchNearbyAction = createAsyncThunk<void, number, {
//   dispatch: AppDispatch,
//   state: State,
//   extra: AxiosInstance
// }>(
//   'user/fetchNearby',
//   async (id, { dispatch, extra: api }) => {
//     try {
//       const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}${APIRoute.OffersNearby}`);
//       dispatch(loadOffersNearby(data));
//     } catch (error) {
//       handleError(error);
//     }
//   },
// );

// export const checkAuthAction = createAsyncThunk<void, undefined, {
//   dispatch: AppDispatch,
//   state: State,
//   extra: AxiosInstance
// }>(
//   'user/checkAuth',
//   async (_arg, { dispatch, extra: api }) => {
//     try {
//       const { data } = await api.get(APIRoute.Login);
//       dispatch(getEmail(data.email));
//       dispatch(requireAuthorization(AuthorizationStatus.Auth));
//     } catch (error) {
//       handleError(error);
//       //сразу dispatch, что не ваторизованы
//       dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
//     }
//   },
// );

// export const loginAction = createAsyncThunk<void, AuthData, {
//   dispatch: AppDispatch,
//   state: State,
//   extra: AxiosInstance
// }>(
//   'user/login',
//   async ({ login: email, password }, { dispatch, extra: api }) => {
//     try {
//       const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
//       saveToken(token);
//       dispatch(requireAuthorization(AuthorizationStatus.Auth));
//       dispatch(getEmail(email));
//       dispatch(redirectToRoute(AppRoute.Root));
//     } catch (error) {
//       handleError(error);
//     }
//   },
// );

// export const logoutAction = createAsyncThunk<void, undefined, {
//   dispatch: AppDispatch,
//   state: State,
//   extra: AxiosInstance
// }>(
//   'user/logout',
//   async (_arg, { dispatch, extra: api }) => {
//     try {
//       await api.delete(APIRoute.Logout);
//       dropToken();
//       dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
//       dispatch(getEmail(''));
//       dispatch(loadFavorites([]));
//       dispatch(logoutOffers());
//     } catch (error) {
//       handleError(error);
//     }
//   },
// );
