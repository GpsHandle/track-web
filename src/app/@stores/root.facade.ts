import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthActions, AuthSelectors } from '@app/@stores/auth-store';
import { DeviceActions, DeviceSelectors } from './device-store';
import { LoginModel } from '@app/auth/login.model';
import { StatisticActions, StatisticSelectors } from '@app/@stores/statistic-store';
import * as PositionSelectors from '@app/@stores/position-store/selectors';
import { PositionActions } from '@app/@stores/position-store';

@Injectable({
  providedIn: 'root',
})
export class RootFacade {
  serverStatistics$ = this.store.select(StatisticSelectors.selectStatistics);
  userModel$ = this.store.select(AuthSelectors.selectUserModel);
  authState$ = this.store.select(AuthSelectors.selectUser);

  selDevice$ = this.store.select(DeviceSelectors.selectSelDevice);
  selPosition$ = this.store.select(PositionSelectors.selectSelPosition);

  deviceList$ = this.store.select(DeviceSelectors.selectAllDevices);
  positionIds$ = this.store.select(DeviceSelectors.selectPositionIds);
  positionList$ = this.store.select(PositionSelectors.selectPositions);

  constructor(private store: Store<{}>) {}

  loginRequest(model: LoginModel) {
    return this.store.dispatch(AuthActions.loginRequestAction({ userModel: model }));
  }

  logout() {
    return this.store.dispatch(AuthActions.logoutRequestAction());
  }

  loadServerStatistics() {
    return this.store.dispatch(StatisticActions.loadServerStatisticsRequestAction());
  }

  loadAllDevice() {
    return this.store.dispatch(DeviceActions.loadAllDeviceRequestAction());
  }

  selectDevice(selId: number, posId: number) {
    this.store.dispatch(PositionActions.selectPositionAction({id: posId}));
    this.store.dispatch(DeviceActions.selectDeviceAction({id: selId}));
  }
}
