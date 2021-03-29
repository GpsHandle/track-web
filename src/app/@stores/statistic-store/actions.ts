import { createAction, props } from '@ngrx/store';
import { Statistics } from '@app/@api/models/statistics';

export enum ActionTypes {
  LOAD_SERVER_STATISTICS_REQUEST = '[Statistics] Load Server Statistics Request',
  LOAD_SERVER_STATISTICS_SUCCESS = '[Statistics] Load Server Statistics Success',
  LOAD_SERVER_STATISTICS_FAILURE = '[Statistics] Load Server Statistics Failure',
}

export const loadServerStatisticsRequestAction = createAction(ActionTypes.LOAD_SERVER_STATISTICS_REQUEST);
export const loadServerStatisticsSuccessAction = createAction(ActionTypes.LOAD_SERVER_STATISTICS_SUCCESS, props<{item: Statistics}>());
export const loadServerStatisticsFailureAction = createAction(ActionTypes.LOAD_SERVER_STATISTICS_FAILURE, props<{error: string}>());
