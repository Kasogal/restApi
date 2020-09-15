/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
/* eslint-disable prefer-template */
import axios from 'axios';
import alt from '../../utils/alt';
import AuthActions from './auth.actions';
import InterceptorUtil from '../../utils/interceptorUtil';
import AuthConfig from './auth.config';
import history from '../../utils/history';
import { loaderStatus } from '../../utils/utilities';

class AuthService {
  constructor() {
    this.bindActions(AuthActions);
    this.access_token = null;
    this.refresh_token = null;
    this.user = null;
    this.error = null;
    this.message = null;
    this.isAuthenticated = false;
    this.token_type = null;
    this.id_token = null;
    this.permissions = [];
  }

  onLogin(credentials) {
    this.onLogout(false);
    loaderStatus.next(true);
    const formBody =
      'username=' +
      encodeURIComponent(credentials.username) +
      '&password=' +
      encodeURIComponent(credentials.password) +
      '&grant_type=password' +
      '&client_id=' +
      AuthConfig.clientId;
    axios(AuthConfig.apiUrl + '/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        authorization:
          'Basic c3ByaW5nLXNlY3VyaXR5LW9hdXRoMi1yZWFkLXdyaXRlLWNsaWVudDpzcHJpbmctc2VjdXJpdHktb2F1dGgyLXJlYWQtd3JpdGUtY2xpZW50LXBhc3N3b3JkMTIzNA==',
      },
      data: formBody,
    })
      .then(response => {
        this.saveTokens(response.data);
        return axios.get(`${AuthConfig.apiUrl}/api/user/me`);
      })
      .then(response => {
        this.loginSuccess(response.data.principal);
      })
      .catch(response => {
        this.loginError(response);
        loaderStatus.next(false);
      });
  }

  loginSuccess(user) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('permissions', JSON.stringify(user.authorities));
    this.setState({ user, permissions: user.authorities });
    loaderStatus.next(false);
    history.push('/initial');
  }

  loginError(response) {
    this.setState({
      accessToken: null,
      refreshToken: null,
      error: response.message,
      message: response.message,
      user: null,
    });
  }

  onLocalLogin() {
    if (localStorage.getItem('isAuthenticated') === 'true') {
      this.saveTokens({
        access_token: localStorage.getItem('access_token'),
        refresh_token: localStorage.getItem('refresh_token'),
      });
      this.loginSuccess(JSON.parse(localStorage.getItem('user')));
    }
    loaderStatus.next(false);
  }

  onRefreshToken(params) {
    loaderStatus.next(true);
    const refresh_token = localStorage.getItem('refresh_token');
    if (refresh_token) {
      axios.interceptors.request.eject(InterceptorUtil.getInterceptor());
      axios
        .get(
          this.getAuthEndpoint('refresh_token') +
            '&refresh_token=' +
            refresh_token,
        )
        .then(response => {
          this.saveTokens(response.data);
          axios(params.initialRequest)
            .then(subResponse => {
              params.resolve(subResponse);
            })
            .catch(catchResponse => {
              params.reject(catchResponse);
            });
        })
        .catch(() => {
          this.onLogout();
        });
    }
    loaderStatus.next(false);
  }

  onLogout(redirect = true) {
    loaderStatus.next(true);
    localStorage.clear();
    this.setState({
      access_token: null,
      refresh_token: null,
      error: null,
      isAuthenticated: false,
      user: null,
      permissions: [],
    });
    axios.interceptors.request.eject(InterceptorUtil.getInterceptor());
    loaderStatus.next(false);
    if (redirect) {
      history.push('/login');
    }
  }

  saveTokens(params) {
    // eslint-disable-next-line camelcase
    const { access_token, refresh_token, token_type } = params;
    this.isAuthenticated = true;
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
    localStorage.setItem('token_type', token_type);
    localStorage.setItem('isAuthenticated', this.isAuthenticated);
    this.setState({
      access_token,
      refresh_token,
      error: null,
      isAuthenticated: true,
      token_type,
    });

    const interceptor = axios.interceptors.request.use(config => {
      if (access_token) {
        config.headers.authorization = token_type + ' ' + access_token;
      }
      config.headers['Content-Type'] = 'application/json';
      return config;
    });

    InterceptorUtil.setInterceptor(interceptor);
  }
}

export default alt.createStore(AuthService, 'AuthService');
