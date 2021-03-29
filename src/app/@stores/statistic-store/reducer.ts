import { Action, createReducer, on } from '@ngrx/store';
import { initialState, State } from './state';
import {
  loadServerStatisticsFailureAction,
  loadServerStatisticsRequestAction,
  loadServerStatisticsSuccessAction
} from '@app/@stores/statistic-store/actions';

export const featureKey = 'statistic';

export const featureReducer = createReducer(
  initialState,
  on(loadServerStatisticsRequestAction, (state, action) => ({...state, loading: true, error: null, statistics: null})),
  on(loadServerStatisticsSuccessAction, (state, action) => ({...state, loading: false, error: null, statistics: action.item})),
  on(loadServerStatisticsFailureAction, (state, action) => ({...state, loading: false, error: action.error, statistics: null})),
  // ...
);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}
