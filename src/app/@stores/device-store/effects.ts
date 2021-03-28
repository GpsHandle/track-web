import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  createOneDeviceRequestAction,
  createOneDeviceSuccessAction,
  loadAllDeviceRequestAction,
  loadAllDeviceSuccessAction,
  loadDeviceRequestAction,
  loadDeviceSuccessAction,
} from '@app/@stores/device-store/actions';
import { map, switchMap } from 'rxjs/operators';
import { DevicesService } from '@app/@api/services/devices.service';
import * as PositionActions from '@app/@stores/position-store/actions';

@Injectable()
export class Effects {
  createOneDeviceRequest$ = createEffect(() =>
    this.action$.pipe(
      ofType(createOneDeviceRequestAction),
      switchMap((action) => {
        return this.deviceService.devicesPost({ body: action.item });
      }),
      map((data) => createOneDeviceSuccessAction({ item: data }))
    )
  );

  loadAllDeviceRequest$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadAllDeviceRequestAction),
      switchMap((action) => {
        return this.deviceService.devicesGet({ all: true });
      }),
      map((data) => loadAllDeviceSuccessAction({ items: data }))
    )
  );

  loadAllDeviceSuccess$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadAllDeviceSuccessAction),
      map(() => PositionActions.loadPositionRequestAction())
    )
  );

  loadDeviceRequest$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadDeviceRequestAction),
      switchMap((action) => {
        return this.deviceService.devicesGet({ id: action.id, uniqueId: action.uniqueId });
      }),
      map((data) => loadDeviceSuccessAction({ item: data[0] }))
    )
  );

  constructor(private action$: Actions, private deviceService: DevicesService) {}
}
