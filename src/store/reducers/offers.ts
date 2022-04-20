import { createSlice } from '@reduxjs/toolkit';
import { OffersProcess } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: OffersProcess = {
  offers: [],
};

export const offers = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    loadOffers: (state, action) => {
      state.offers = action.payload;
    },
     },
});

console.log(offers);


export const { loadOffers } = offers.actions;
