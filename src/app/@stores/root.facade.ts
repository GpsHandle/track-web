import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {AuthActions} from './auth-store'

@Injectable({
  providedIn: 'root'
})

export class RootFacade {
  constructor(private store: Store<{}>) { }

  loginRequest(_userName: string, _password: string, _rememberMe: boolean) {
    console.log('email', _userName);
    return this.store.dispatch(AuthActions.loginRequestAction({email: _userName, password: _password, rememberMe: _rememberMe}));
  }
}
