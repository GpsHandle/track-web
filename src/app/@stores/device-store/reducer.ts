import { Action, createReducer, on } from '@ngrx/store';
import { __adapter__, initialState, State } from './state';
import {
  createOneDeviceFailureAction,
  createOneDeviceRequestAction,
  createOneDeviceSuccessAction,
  loadAllDeviceFailureAction,
  loadAllDeviceRequestAction,
  loadAllDeviceSuccessAction, selectDeviceAction
} from '@app/@stores/device-store/actions';
import { map } from 'lodash-es';

export const featureKey = 'device';

export const featureReducer = createReducer(
  initialState,
  on(createOneDeviceSuccessAction, (state, action) => {
    return __adapter__.setOne(action.item, state);
  }),
  on(loadAllDeviceSuccessAction, (state, action) => {
    const _positionIds = map(action.items, (it) => it.positionId);
    return __adapter__.setAll(action.items, { ...state, positionIds: _positionIds });
  }),
  on(loadAllDeviceFailureAction, (state, action) => {
    return __adapter__.removeAll({ ...state, positionIds: null });
  }),
  on(selectDeviceAction, (state, action) => {
    return ({...state, selDeviceId: action.id});
  })
);

export function reducer(state: State, action: Action) {
  return featureReducer(state, action);
}
