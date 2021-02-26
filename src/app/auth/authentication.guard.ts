import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Logger } from '@core';
import { RootFacade } from '@app/@stores/root.facade';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const log = new Logger('AuthenticationGuard');

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router, private rootFacade: RootFacade) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.rootFacade.authState$.pipe(
      map(user => {
        return !!user.id;
      }),
      catchError((err) => {
        log.debug('Not authenticated, redirecting and adding redirect url...');
        this.router.navigate(['/login'], { queryParams: { redirect: state.url }, replaceUrl: true });
        return of(false);
      })
    );
  }
}
