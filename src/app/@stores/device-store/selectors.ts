import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureKey } from './reducer';
import { __adapter__, State } from './state';

export const __state__ = createFeatureSelector(featureKey);

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = __adapter__.getSelectors();

export const selectAllDevices = createSelector(__state__, selectAll);
export const selectTotalDevices = createSelector(__state__, selectTotal);
export const selectDevices = createSelector(__state__, selectEntities);
export const selectDeviceIds = createSelector(__state__, selectIds);
