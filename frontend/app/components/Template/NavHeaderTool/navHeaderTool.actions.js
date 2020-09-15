import { CHANGE_BREADCRUMBS } from './navHeaderTool.actionTypes';

export function changeBreadCrumbs(payload) {
  return {
    type: CHANGE_BREADCRUMBS,
    payload,
  };
}
