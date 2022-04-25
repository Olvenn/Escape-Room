import { createSlice } from '@reduxjs/toolkit';
import { QuestsProcess } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: QuestsProcess = {
  quest: undefined,
  quests: [],
  isDataLoaded: false,
  isSuccess: false,
};

export const quests = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {
    loadQuests: (state, action) => {
      state.quests = action.payload;
      state.isDataLoaded = true;
    },
    setSuccessfullyData: (state, action) => {
      state.isSuccess = action.payload;
    },
  },
});

export const { loadQuests, setSuccessfullyData } = quests.actions;
