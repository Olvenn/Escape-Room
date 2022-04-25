import { createSlice } from '@reduxjs/toolkit';
import { BookingProcess } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: BookingProcess = {
  name: '',
  phone: '',
  peopleCount: 0,
  isLegal: false,
  isSending: true,
  isSuccess: false,
};

export const booking = createSlice({
  name: NameSpace.Booking,
  initialState,
  reducers: {
    setIsSending: (state, action) => {
      state.isSending = action.payload;
    },
    setSuccessfully: (state, action) => {
      state.isSuccess = action.payload;
    },
  },
});

export const { setIsSending, setSuccessfully } = booking.actions;
