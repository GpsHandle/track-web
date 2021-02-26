import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureKey } from './reducer';
import { State } from './state';

export const __state__ = createFeatureSelector(featureKey);

const getError = (state: State) => state.error;
const getLoading = (state: State) => state.loading;

export const selectError = createSelector(__state__, getError);
export const selectLoading = createSelector(__state__, getLoading);
