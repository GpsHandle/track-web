import { Action, createReducer } from '@ngrx/store';
import { initialState, State } from './state';

export const featureKey = 'session';

export const featureReducer = createReducer(
  initialState,
  // ...
);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}
