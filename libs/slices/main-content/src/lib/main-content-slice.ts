import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IArticleCard {
  id: string;
  name: string;
  text: string;
}

export interface IMainContentState {
  articleCards: IArticleCard[];
}

export const initialState: IMainContentState = {
  articleCards: [],
};

const setArticleCards = (
  state: IMainContentState,
  { payload }: PayloadAction<IArticleCard[]>
) => {
  state.articleCards = payload;
};

const mainContentSlice = createSlice({
  name: 'mainContent',
  initialState,
  reducers: {
    setArticleCards,
  },
  extraReducers: {},
});

export const mainContentActions = mainContentSlice.actions;
export const mainContentReducer = mainContentSlice.reducer;
