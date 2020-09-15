import { Subject } from 'rxjs';

export const loaderStatus = new Subject();

export function isEmpty(value) {
  return !value || !value.trim();
}

export function isEmail(value) {
  // eslint-disable-next-line no-useless-escape
  const EMAIL_REGEXP = /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/;
  return EMAIL_REGEXP.test(value);
}
