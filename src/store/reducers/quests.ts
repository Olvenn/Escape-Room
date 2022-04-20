import { createSlice } from '@reduxjs/toolkit';
import { QuestsProcess } from '../../types/state';
import { NameSpace } from '../../const';
import { Quest } from '../../types/types';

const initialState: QuestsProcess = {
  quest: undefined,
  quests: [],
};

export const quests = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {
    loadQuests: (state, action) => {
      state.quests = action.payload;
    },
    loadQuest: (state, action) => {
      state.quest = action.payload;
    },
  },
});

console.log("initialState", initialState.quests);

export const { loadQuests, loadQuest } = quests.actions;
