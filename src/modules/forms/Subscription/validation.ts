import { MIN_USER_NAME_LENGTH, NOT_STRICT_EMAIL_REGEXP } from './constants';
import type { TError } from './types';

export const isEmpty = (value: string): boolean => value.length === 0;

export const validateName = (value: string): TError | null => {
  if (value.length < MIN_USER_NAME_LENGTH) {
    return {
      type: 'name',
      message: "Name can't be less than 3 letters",
    };
  }

  return null;
};

export const validateEmail = (value: string): TError | null => {
  if (isEmpty(value)) {
    return {
      type: 'email',
      message: 'Please, fill in an email',
    };
  } else if (!NOT_STRICT_EMAIL_REGEXP.test(value)) {
    return {
      type: 'email',
      message: 'Invalid email address',
    };
  }
  return null;
};

export const validateConfirmEmail = (value: string, email: string): TError | null => {
  if (isEmpty(value)) {
    return {
      type: 'confirmEmail',
      message: 'Please, repeat your email',
    };
  }
  if (value !== email) {
    return {
      type: 'confirmEmail',
      message: 'Emails do not match',
    };
  }

  return null;
};
