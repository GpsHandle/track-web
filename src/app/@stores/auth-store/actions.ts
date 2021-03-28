import { createAction, props } from '@ngrx/store';
import { User } from '@app/@api/models/user';
import { LoginModel } from '@app/auth/login.model';

export enum ActionTypes {
  LOGIN_REQUEST = '[Auth] Login Request',
  LOGIN_FAILURE = '[Auth] Login Failure',
  LOGIN_SUCCESS = '[Auth] Login Success',

  LOGOUT_REQUEST = '[Auth] Logout Request',
  LOGOUT_SUCCESS = '[Auth] Logout Success',
  LOGOUT_FAILURE = '[Auth] Logout Failure',
}

export const loginRequestAction = createAction(ActionTypes.LOGIN_REQUEST, props<{ userModel: LoginModel }>());
export const loginSuccessAction = createAction(ActionTypes.LOGIN_SUCCESS, props<{ user: User }>());
export const loginFailureAction = createAction(ActionTypes.LOGIN_FAILURE, props<{ error: string }>());

export const logoutRequestAction = createAction(ActionTypes.LOGOUT_REQUEST);
export const logoutSuccessAction = createAction(ActionTypes.LOGOUT_SUCCESS);
export const logoutFailureAction = createAction(ActionTypes.LOGOUT_FAILURE, props<{ error: string }>());
