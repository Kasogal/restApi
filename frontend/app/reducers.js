import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import globalReducer from 'containers/App/reducer';
import languageProviderReducer from 'components/LanguageProvider/reducer';
import navHeaderToolRecuder from 'components/Template/NavHeaderTool/navHeaderTool.reducer'

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    language: languageProviderReducer,
    navHeaderTool: navHeaderToolRecuder,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
