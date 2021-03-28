import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Position } from '@app/@api/models';

export const __adapter__: EntityAdapter<Position> = createEntityAdapter<Position>({
  selectId: (model) => model.id,
  sortComparer: false,
});

export interface State extends EntityState<Position> {
  selPositionId: number | undefined;
}

export const initialState = __adapter__.getInitialState({
  selPositionId: null,
});
