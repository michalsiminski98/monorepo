import { globalReducer, IGlobalState } from '@./slices/global';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

export interface IState {
  global: IGlobalState;
}

const rootReducer = combineReducers<IState>({
  global: globalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
