import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from 'utils/history';
import 'sanitize.css/sanitize.css';
import axios from 'axios';

import App from 'containers/App';
import LanguageProvider from 'components/LanguageProvider';
import AuthActions from './containers/Security/auth.actions';
import GlobalStyle from './global-styles';
import Loader from './components/Loader/loaderComponet';
import 'assets/vendor/nucleo/css/nucleo.css';
import 'assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/css/general.css';

import '!file-loader?name=[name].[ext]!./assets/images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess'; // eslint-disable-line import/extensions

import configureStore from './configureStore';

import { translationMessages } from './i18n';

import Routes from './routes';

AuthActions.localLogin();

axios.interceptors.response.use(
  response => response,
  error =>
    new Promise((resolve, reject) => {
      if (
        error.status === 401 &&
        error.data.error_description ===
          'The access token provided has expired.'
      ) {
        AuthActions.refreshToken({
          initialRequest: error.config,
          resolve,
          reject,
        });
      } else if (error.status === 401 && error.statusText === 'Unauthorized') {
        AuthActions.logout();
      } else {
        reject(error);
      }
    }),
);

const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = messages => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <GlobalStyle />
          <Loader />
          <App />
          <Routes />
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() =>
      Promise.all([
        import('intl/locale-data/jsonp/br.js'),
        import('intl/locale-data/jsonp/en.js'),
      ]),
    ) // eslint-disable-line prettier/prettier
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
