// actions/userActions.ts
import { SET_USER, User, UserActionTypes } from '../types';

export function setUser(user: User): UserActionTypes {
  return {
    type: SET_USER,
    payload: user
  };
}
