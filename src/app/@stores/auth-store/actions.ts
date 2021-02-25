import { createAction, props } from '@ngrx/store';
import { User } from '@app/@api/models/user';

export enum ActionTypes {
  LOGIN_REQUEST = '[Auth] Login Request',
  LOGIN_FAILURE = '[Auth] Login Failure',
  LOGIN_SUCCESS = '[Auth] Login Success'
}

export const loginRequestAction = createAction(ActionTypes.LOGIN_REQUEST, props<{email: string, password: string, rememberMe: boolean}>());
export const loginSuccessAction = createAction(ActionTypes.LOGIN_SUCCESS, props<{user: User}>());
export const loginFailureAction = createAction(ActionTypes.LOGIN_FAILURE, props<{error: string}>());
