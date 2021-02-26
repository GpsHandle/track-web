import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SessionService } from '@app/@api/services/session.service';
import {
  loginFailureAction,
  loginRequestAction,
  loginSuccessAction,
  logoutRequestAction, logoutSuccessAction
} from '@app/@stores/auth-store/actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { User } from '@app/@api/models/user';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class Effects {

  loginRequest$ = createEffect(() => this.actions$.pipe(
    ofType(loginRequestAction),
    switchMap((action)  => {
      return this.sessionService.sessionPost({body: {email: action.email, password: action.password}}).pipe(
        map((data: User) => {
          return loginSuccessAction({user: data})
        }),
        catchError((err: any) => of(loginFailureAction({error: err})))
      );
    })
  ));

  loginSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(loginSuccessAction),
    tap(action => {
      this.router.navigate(['/home']);
    })
  ), { dispatch: false });

  loginFailure$ = createEffect(() => this.actions$.pipe(
    ofType(loginFailureAction),
    tap((action) => {
      console.log('Login Failure')
    })
  ), {dispatch: false});

  logoutRequest$ = createEffect(() => this.actions$.pipe(
    ofType(logoutRequestAction),
    map(() => {
      return logoutSuccessAction()
    })
  ));

  logoutSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(logoutSuccessAction),
    tap(() => {
      this.router.navigate(['/login']);
    })
  ), {dispatch: false});

  constructor(private actions$: Actions,
              private router: Router,
              private sessionService: SessionService) {
  }
}
