import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthActions, AuthSelectors } from '@app/@stores/auth-store';
import { DeviceActions, DeviceSelectors } from './device-store';
import { LoginModel } from '@app/auth/login.model';



@Injectable({
  providedIn: 'root',
})
export class RootFacade {
  userModel$ = this.store.select(AuthSelectors.selectUserModel);
  authState$ = this.store.select(AuthSelectors.selectUser);
  constructor(private store: Store<{}>) {}

  loginRequest(model: LoginModel) {
    return this.store.dispatch(
      AuthActions.loginRequestAction({userModel: model})
    );
  }

  logout() {
    return this.store.dispatch(AuthActions.logoutRequestAction());
  }

  loadAllDevice() {
    return this.store.dispatch(DeviceActions.loadAllDeviceRequestAction());
  }
}
