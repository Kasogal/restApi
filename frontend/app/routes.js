/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './containers/Security/Login/login';
import Initial from './containers/Home/initial';
import AuthService from './containers/Security/auth.service';
import PrivateRoute from './utils/privateRoute';
import { PERMISSION } from './utils/constants';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Login} />
        <PrivateRoute
          path="/initial"
          component={Initial}
          isAuthenticated={AuthService.getState().isAuthenticated}
          permission={PERMISSION.GENERAL}
        />
        <PrivateRoute
          path="/user"
          component={Initial}
          isAuthenticated={AuthService.getState().isAuthenticated}
          permission={PERMISSION.ROLE_USER_REGISTRATION}
          redirect="/initial"
        />
        <PrivateRoute
          path="/profile"
          component={Initial}
          isAuthenticated={AuthService.getState().isAuthenticated}
          permission={PERMISSION.ROLE_PROFILE_REGISTRATION}
          redirect="/initial"
        />
        <PrivateRoute
          path="/permission"
          component={Initial}
          isAuthenticated={AuthService.getState().isAuthenticated}
          permission={PERMISSION.ROLE_PROFILE_REGISTRATION}
          redirect="/initial"
        />
      </Switch>
    );
  }
}

export default withRouter(Routes);
