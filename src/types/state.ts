import { store } from '../store/index.js';
import { Offer } from '../types/types';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type OffersProcess = {
  offers: Offer[],
};

