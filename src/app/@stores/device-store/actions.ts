import { createAction, props } from '@ngrx/store';
import { Device } from '@app/@api/models/device';

export enum ActionTypes {
  CREATE_ONE_DEVICE_REQUEST = '[Device] Create One Device Request',
  CREATE_ONE_DEVICE_SUCCESS = '[Device] Create One Device Success',
  CREATE_ONE_DEVICE_FAILURE = '[Device] Create One Device Failure',

  LOAD_ALL_DEVICE_REQUEST = '[Device] Load All Device Request',
  LOAD_ALL_DEVICE_SUCCESS = '[Device] Load All Device Success',
  LOAD_ALL_DEVICE_FAILURE = '[Device] Load All Device Failure',

  LOAD_DEVICE_BY_ID_REQUEST = '[Device] Load Device By Id Request',
  LOAD_DEVICE_BY_ID_SUCCESS = '[Device] Load Device By Id Success',
  LOAD_DEVICE_BY_ID_FAILURE = '[Device] Load Device By Id Failure',

  UPDATE_ONE_DEVICE_REQUEST = '[Device] Update One Device Request',
  UPDATE_ONE_DEVICE_SUCCESS = '[Device] Update One Device Success',
  UPDATE_ONE_DEVICE_FAILURE = '[Device] Update One Device Failure',

  DELETE_ONE_DEVICE_REQUEST = '[Device] Delete One Device Request',
  DELETE_ONE_DEVICE_SUCCESS = '[Device] Delete One Device Success',
  DELETE_ONE_DEVICE_FAILURE = '[Device] Delete One Device Failure',

  SELECT_DEVICE = '[Device] Select Device'
}

export const createOneDeviceRequestAction = createAction(
  ActionTypes.CREATE_ONE_DEVICE_REQUEST,
  props<{ item: Device }>()
);
export const createOneDeviceSuccessAction = createAction(
  ActionTypes.CREATE_ONE_DEVICE_SUCCESS,
  props<{ item: Device }>()
);
export const createOneDeviceFailureAction = createAction(
  ActionTypes.CREATE_ONE_DEVICE_FAILURE,
  props<{ error: string }>()
);

export const loadAllDeviceRequestAction = createAction(ActionTypes.LOAD_ALL_DEVICE_REQUEST);
export const loadAllDeviceSuccessAction = createAction(
  ActionTypes.LOAD_ALL_DEVICE_SUCCESS,
  props<{ items: Device[] }>()
);
export const loadAllDeviceFailureAction = createAction(ActionTypes.LOAD_ALL_DEVICE_FAILURE, props<{ error: string }>());

export const loadDeviceRequestAction = createAction(
  ActionTypes.LOAD_DEVICE_BY_ID_REQUEST,
  props<{ id?: number; uniqueId?: string }>()
);
export const loadDeviceSuccessAction = createAction(ActionTypes.LOAD_DEVICE_BY_ID_SUCCESS, props<{ item: Device }>());
export const loadDeviceFailureAction = createAction(ActionTypes.LOAD_DEVICE_BY_ID_FAILURE, props<{ error: string }>());

export const updateOneDeviceRequestAction = createAction(
  ActionTypes.UPDATE_ONE_DEVICE_REQUEST,
  props<{ item: Device }>()
);
export const updateOneDeviceSuccessAction = createAction(
  ActionTypes.UPDATE_ONE_DEVICE_SUCCESS,
  props<{ item: Device }>()
);
export const updateOneDeviceFailureAction = createAction(
  ActionTypes.UPDATE_ONE_DEVICE_FAILURE,
  props<{ error: string }>()
);

export const deleteOneDeviceRequestAction = createAction(
  ActionTypes.DELETE_ONE_DEVICE_REQUEST,
  props<{ id: string | number }>()
);
export const deleteOneDeviceSuccessAction = createAction(ActionTypes.DELETE_ONE_DEVICE_SUCCESS);
export const deleteOneDeviceFailureAction = createAction(
  ActionTypes.DELETE_ONE_DEVICE_FAILURE,
  props<{ error: string }>()
);

export const selectDeviceAction = createAction(ActionTypes.SELECT_DEVICE, props<{id: number}>());
