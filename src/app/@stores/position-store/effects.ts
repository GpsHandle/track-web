import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PositionsService } from '@app/@api/services/positions.service';
import { loadPositionRequestAction, loadPositionSuccessAction } from '@app/@stores/position-store/actions';
import { RootFacade } from '@app/@stores/root.facade';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

@Injectable()
export class Effects {
  positionIds$ = this.facade.positionIds$;

  loadAllPosition$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadPositionRequestAction),
      withLatestFrom(this.positionIds$),
      switchMap(([action, positionIds]) => {
        return this.positionsService.positionsGet$Json({ ids: positionIds });
      }),
      map((data) => {
        return loadPositionSuccessAction({ items: data });
      })
    )
  );
  constructor(private action$: Actions, private facade: RootFacade, private positionsService: PositionsService) {
    // this.positionsService.positionsGet$Json({})
  }
}
