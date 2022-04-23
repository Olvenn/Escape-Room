import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Quest } from '../../types/types';

export const getQuests = (state: State): Quest[] => state[NameSpace.Quests].quests;

// export const getIsLoadingQuests = (state: State): boolean => state[NameSpace.Quests].isLoading;
export const getIsDataLoaded = (state: State): boolean => state[NameSpace.Quests].isDataLoaded;

export const getError = (state: State): string => state[NameSpace.Main].error;
