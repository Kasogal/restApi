/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isUserPermission } from './security';
import { PERMISSION } from './constants';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  redirect: pathname,
  permission,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated === true && isUserPermission(permission) ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect
            to={{
              pathname,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.defaultProps = { redirect: '/login' };

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  redirect: PropTypes.string,
  permission: PropTypes.oneOf(Object.keys(PERMISSION)).isRequired,
};

export default PrivateRoute;
