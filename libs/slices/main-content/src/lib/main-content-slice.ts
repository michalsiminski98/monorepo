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
  { payload }: PayloadAction
) => {
  state.articleCards = [
    {
      id: 'fj0823j9oid239823dj',
      name: 'boiler plate',
      text: 'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet',
    },
  ];
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
