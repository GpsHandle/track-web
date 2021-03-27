import { State } from './state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureKey } from './reducer';

const getError = (state: State) => state.error;
const getLoading = (state: State) => state.loading;
const getUser = (state: State) => state?.user;
const getUserModel = (state: State) => state?.userModel;

export const __state__ = createFeatureSelector(featureKey);

export const selectError = createSelector(__state__, getError);
export const selectLoading = createSelector(__state__, getLoading);
export const selectUser = createSelector(__state__, getUser);
export const selectUserModel = createSelector(__state__, getUserModel);

export const selectAuth = createSelector(selectError, selectLoading, selectUser, (error, loading, user) => ({
  error,
  loading,
  user,
}));
