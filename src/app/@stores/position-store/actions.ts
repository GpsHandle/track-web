import { createAction, props } from '@ngrx/store';
import { Position } from '@app/@api/models/position';
export enum ActionTypes {
  LOAD_POSITION_REQUEST = '[Position] Load Position Request',
  LOAD_POSITION_SUCCESS = '[Position] Load Position Success',
  LOAD_POSITION_FAILURE = '[Position] Load Position Failure',

  SELECT_POSITION = '[Position] Select Position'
}

export const loadPositionRequestAction = createAction(ActionTypes.LOAD_POSITION_REQUEST);
export const loadPositionSuccessAction = createAction(
  ActionTypes.LOAD_POSITION_SUCCESS,
  props<{ items: Position[] }>()
);
export const loadPositionFailureAction = createAction(ActionTypes.LOAD_POSITION_FAILURE, props<{ error: string }>());

export const selectPositionAction = createAction(ActionTypes.SELECT_POSITION, props<{id: number}>());
