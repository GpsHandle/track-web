import { Action, createReducer, on } from '@ngrx/store';
import { __adapter__, initialState, State } from './state';
import {
  loadPositionFailureAction,
  loadPositionRequestAction,
  loadPositionSuccessAction, selectPositionAction
} from '@app/@stores/position-store/actions';

export const featureKey = 'position';

export const featureReducer = createReducer(
  initialState,
  on(loadPositionSuccessAction, (state, action) => {
    return __adapter__.setAll(action.items, state);
  }),
  on(loadPositionFailureAction, (state, action) => {
    return __adapter__.removeAll(state);
  }),
  on(selectPositionAction, (state, action) => ({...state, selPositionId: action.id}))
  // ...
);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}
