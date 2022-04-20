import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Offer } from '../../types/types';

export const getOffers = (state: State): Offer[] => state[NameSpace.Offers].offers;

// export const getIsLoadingOffers = (state: State): boolean => state[NameSpace.Offers].isLoading;

export const getError = (state: State): string => state[NameSpace.Main].error;
