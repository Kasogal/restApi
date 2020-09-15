import { TOGGLE_MENU } from './sidebar.actionsTypes';

export function toogleMenu(payload) {
  return {
    type: TOGGLE_MENU,
    payload,
  };
}
