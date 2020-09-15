import history from './history';
import AuthService from '../containers/Security/auth.service';
import { TYPE_USER, PERMISSION } from './constants';

// eslint-disable-next-line no-var
var validate = require('validate.js');

export function isUserPermission(permission) {
  const { permissions, user } = AuthService.getState();
  if (
    !validate.isDefined(permissions) ||
    validate.isEmpty(permissions) ||
    !validate.isArray(permissions) ||
    !validate.isDefined(permission) ||
    validate.isEmpty(permission) ||
    !validate.isDefined(user) ||
    validate.isEmpty(user) ||
    !validate.isDefined(user.typeUser) ||
    validate.isEmpty(user.typeUser)
  ) {
    history.push('/initial');
    return false;
  }

  if (user.typeUser === TYPE_USER.Master || permission === PERMISSION.GENERAL) {
    return true;
  }

  return validate.contains(permissions, permission);
}
