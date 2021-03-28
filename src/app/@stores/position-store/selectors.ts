import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureKey } from './reducer';
import { __adapter__ } from '@app/@stores/position-store/state';

export const __state__ = createFeatureSelector(featureKey);

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = __adapter__.getSelectors();

export const selectAllPosition = createSelector(__state__, selectAll);
export const selectTotalPositions = createSelector(__state__, selectTotal);
export const selectPositions = createSelector(__state__, selectEntities);
export const selectPositionIds = createSelector(__state__, selectIds);
