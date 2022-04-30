import { IGlobalState } from './global-slice';

export const globalDataSelector = (state: { global: IGlobalState }) =>
  state.global;
