import { store } from '../store/index.js';
import { Quest } from '../types/types';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type QuestsProcess = {
  quests: Quest[],
  quest: Quest | undefined,
};

export type BookingProcess = {
  name: string,
  peopleCount: number,
  phone: string,
  isLegal: boolean,
}

export type BookingData = {
  name: string;
  peopleCount: number,
  phone: string,
  isLegal: boolean,
};
