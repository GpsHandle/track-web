import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
  LOGIN_REQUEST = '[Auth] Login Request',
  LOGIN_FAILURE = '[Auth] Login Failure',
  LOGIN_SUCCESS = '[Auth] Login Success'
}

export const loginRequestAction = createAction(ActionTypes.LOGIN_REQUEST, props<{username: string, password: string, rememberMe: boolean}>());
