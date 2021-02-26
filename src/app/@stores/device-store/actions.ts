import { createAction, props } from '@ngrx/store';
import { Device } from '../../@api/models/device';

export enum ActionTypes {
  LOAD_ALL_DEVICE_REQUEST = '[Device] Load All Device Request',
  LOAD_ALL_DEVICE_SUCCESS = '[Device] Load All Device Success',
  LOAD_ALL_DEVICE_FAILURE = '[Device] Load All Device Failure',
}

export const loadAllDeviceRequestAction = createAction(ActionTypes.LOAD_ALL_DEVICE_REQUEST);
export const loadAllDeviceSuccessAction = createAction(ActionTypes.LOAD_ALL_DEVICE_SUCCESS, props<{items: Device[]}>());
export const loadAllDeviceFailureAction = createAction(ActionTypes.LOAD_ALL_DEVICE_FAILURE, props<{error: string}>());
