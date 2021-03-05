import { Action, createReducer, on } from '@ngrx/store';
import { deviceAdapter, initialState, State } from './state';
import {
  createOneDeviceFailureAction,
  createOneDeviceRequestAction,
  createOneDeviceSuccessAction,
  loadAllDeviceRequestAction,
  loadAllDeviceSuccessAction,
} from '@app/@stores/device-store/actions';

export const featureKey = 'device';

export const featureReducer = createReducer(
  initialState,
  on(createOneDeviceRequestAction, (state, action) => {
    state = { ...state, loading: true };
    return deviceAdapter.addOne(action.item, state);
  }),
  on(createOneDeviceSuccessAction, (state, action) => {
    state = { ...state, loading: false };
    return deviceAdapter.setOne(action.item, state);
  }),
  on(createOneDeviceFailureAction, (state, action) => {
    state = { ...state, error: action.error, loading: false };
    return state;
  }),

  on(loadAllDeviceRequestAction, (state, action) => ({ ...state, loading: true })),
  on(loadAllDeviceSuccessAction, (state, action) => {
    state = { ...state, loading: false };
    return deviceAdapter.setAll(action.items, state);
  })
);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}
