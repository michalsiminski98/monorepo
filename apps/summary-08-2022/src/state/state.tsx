import { IMainContentState, mainContentReducer } from '@./slices/main-content';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

export interface IState {
  mainContent: IMainContentState;
}

const rootReducer = combineReducers<IState>({
  mainContent: mainContentReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
