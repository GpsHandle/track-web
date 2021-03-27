import { Action, createReducer, on } from '@ngrx/store';
import { __adapter__, initialState, State } from './state';
import {
  createOneDeviceFailureAction,
  createOneDeviceRequestAction,
  createOneDeviceSuccessAction, loadAllDeviceFailureAction,
  loadAllDeviceRequestAction,
  loadAllDeviceSuccessAction
} from '@app/@stores/device-store/actions';

export const featureKey = 'device';

export const featureReducer = createReducer(
  initialState,
  on(createOneDeviceSuccessAction, (state, action) => {
    return __adapter__.setOne(action.item, state);
  }),
  on(loadAllDeviceSuccessAction, (state, action) => {
    return __adapter__.setAll(action.items, state);
  }),
  on(loadAllDeviceFailureAction, (state, action) => {
    return __adapter__.removeAll(state);
  })
);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}
