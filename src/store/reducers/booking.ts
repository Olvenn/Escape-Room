import { createSlice } from '@reduxjs/toolkit';
import { BookingProcess } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: BookingProcess = {
  name: '',
  phone: '',
  peopleCount: 0,
  isLegal: false,
};

console.log(initialState);


export const booking = createSlice({
  name: NameSpace.Booking,
  initialState,
  reducers: {
    getName: (state, action) => {
      state.name = action.payload;
    },
    // getPhone: (state, action) => {
    //   state.phone = action.payload;
    // },
    // getPeople: (state, action) => {
    //   state.people = action.payload;
    // },
    // isChecked: (state, action) => {
    //   state.isChecked = action.payload;
    // },
  },
});

export const { getName } = booking.actions;
