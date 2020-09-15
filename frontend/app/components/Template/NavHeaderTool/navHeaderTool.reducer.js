/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { CHANGE_BREADCRUMBS } from './navHeaderTool.actionTypes';
import messages from './navHeaderTool.messages';

const initialStates = {
  icon: 'fa-home',
  mod: <FormattedMessage {...messages.moduleInitial} />,
  menu: <FormattedMessage {...messages.menuInitial} />,
  loadingMenu: false,
};

export default function reducer(state = initialStates, action) {
  switch (action.type) {
    case CHANGE_BREADCRUMBS:
      return Object.assign({}, state, {
        icon: action.playload.icon ? action.playload.icon : initialStates.icon,
        mod: action.playload.mod ? action.playload.mod : initialStates.mod,
        menu: action.playload.menu ? action.playload.menu : initialStates.menu,
        loadingMenu:
          action.playload.loadingMenu !== undefined
            ? action.playload.loadingMenu
            : initialStates.loadingMenu,
      });
    default:
      return state;
  }
}
