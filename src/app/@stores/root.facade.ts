import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {AuthActions} from './auth-store'
import { AuthSelectors } from '@app/@stores/auth-store';

@Injectable({
  providedIn: 'root'
})

export class RootFacade {
  authState$ = this.store.select(AuthSelectors.selectUser)
  constructor(private store: Store<{}>) { }

  loginRequest(_userName: string, _password: string, _rememberMe: boolean) {
    return this.store.dispatch(AuthActions.loginRequestAction({email: _userName, password: _password, rememberMe: _rememberMe}));
  }

  logout() {
    return this.store.dispatch(AuthActions.logoutRequestAction());
  }
}
