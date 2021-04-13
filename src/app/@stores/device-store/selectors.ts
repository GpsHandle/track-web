import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureKey } from './reducer';
import { __adapter__, State } from './state';

export const __state__ = createFeatureSelector(featureKey);
export const getSelectPositionIds = (state: State) => state.positionIds;
export const getSelectDeviceId = (state: State) => state.selDeviceId;
// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = __adapter__.getSelectors();

export const selectAllDevices = createSelector(__state__, selectAll);
export const selectTotalDevices = createSelector(__state__, selectTotal);
export const selectDevices = createSelector(__state__, selectEntities);
export const selectDeviceIds = createSelector(__state__, selectIds);
export const selectPositionIds = createSelector(__state__, getSelectPositionIds);
export const selectSelDeviceId = createSelector(__state__, getSelectDeviceId);
export const selectSelDevice = createSelector(
  selectDevices,
  selectSelDeviceId,
  (deviceMap, deviceId) => deviceMap[deviceId]
);
