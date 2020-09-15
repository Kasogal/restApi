/* eslint-disable react/react-in-jsx-scope */
import { TOGGLE_MENU } from './sidebar.actionsTypes';

const initialStates = {
  loadingMenu: true,
};

export default function reducer(state = initialStates, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return Object.assign({}, state, {
        loadingMenu:
          action.playload.loadingMenu !== undefined
            ? !state.loadingMenu
            : !initialStates.loadingMenu,
      });
    default:
      return state;
  }
}
