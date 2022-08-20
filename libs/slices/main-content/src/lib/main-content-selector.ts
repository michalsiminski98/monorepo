import { IMainContentState } from './main-content-slice';

export const mainContentDataSelector = (state: {
  mainContent: IMainContentState;
}) => state.mainContent;

// export const articleCardsSelector = (state: {
//   mainContent: IMainContentState;
// }) => mainContentDataSelector.mainContent;
