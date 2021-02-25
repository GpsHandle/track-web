import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SessionService } from '@app/@api/services/session.service';
import { loginFailureAction, loginRequestAction, loginSuccessAction } from '@app/@stores/auth-store/actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { User } from '@app/@api/models/user';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { CredentialsService } from '@app/auth';

@Injectable()
export class Effects {

  loginRequest$ = createEffect(() => this.actions$.pipe(
    ofType(loginRequestAction),
    switchMap((action)  => {
      return this.sessionService.sessionPost({body: {email: action.email, password: action.password}});
    }),
    map((data: User) => {
      return loginSuccessAction({user: data})
    }),
    catchError((err: any) => of(loginFailureAction({error: String(err)})))
  ));

  loginSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(loginSuccessAction),
    tap(action => {
      this.credentialsService.setCredentials(action.user, true);
      this.router.navigate(['/home']);
    })
  ), { dispatch: false });

  constructor(private actions$: Actions,
              private router: Router,
              private credentialsService: CredentialsService,
              private sessionService: SessionService) {
  }
}
