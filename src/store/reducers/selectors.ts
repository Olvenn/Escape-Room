import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Quest } from '../../types/types';

export const getQuests = (state: State): Quest[] => state[NameSpace.Quests].quests;
export const getIsDataLoaded = (state: State): boolean => state[NameSpace.Quests].isDataLoaded;
export const getIsDataLoadedSuccess = (state: State): boolean => state[NameSpace.Quests].isSuccess;
export const getError = (state: State): string => state[NameSpace.Main].error;
export const getIsSendingBooking = (state: State): boolean => state[NameSpace.Booking].isSending;
export const getIsSuccessBooking = (state: State): boolean => state[NameSpace.Booking].isSuccess;
