import { Action, createReducer, on } from '@ngrx/store';
import { initialState, State } from '@app/@stores/auth-store/state';
import {
  loginFailureAction,
  loginRequestAction,
  loginSuccessAction, logoutFailureAction,
  logoutRequestAction, logoutSuccessAction
} from '@app/@stores/auth-store/actions';

export const authFeatureKey = 'auth';

export const authReducer = createReducer(
  initialState,
  on(loginRequestAction, (state, action) => ({...state, error: null, loading: true, user: null})),
  on(loginSuccessAction, (state, action) => ({...state, error: null, loading: false, user: action.user})),
  on(loginFailureAction, (state, action) => ({...state, error: action.error, loading: false, user: null})),

  on(logoutRequestAction, (state, action) => ({...state, loading: true})),
  on(logoutSuccessAction, (state, action) => ({...state, loading: false, error: null, user: null})),
  on(logoutFailureAction, (state, action) => ({...state, loading: false, error: action.error}))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
