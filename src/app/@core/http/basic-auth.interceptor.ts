import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootFacade } from '@app/@stores/root.facade';
import { mergeMap } from 'rxjs/operators';
import { UtilsService } from '@core/utils.service';

@Injectable({
  providedIn: 'root',
})
export class BasicAuthInterceptor implements HttpInterceptor {
  userModel$ = this.facade.userModel$;
  constructor(private facade: RootFacade, private utilsService: UtilsService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 1. check not need auth URL
    // 2.do
    return this.userModel$.pipe(
      mergeMap((userModel) => {
        if (!userModel.username || !userModel.password) {
          return next.handle(req);
        }

        const auth_data = this.utilsService.btoa(userModel.username + ':' + userModel.password);
        req = req.clone({
          setHeaders: {
            // Authorization: 'Basic YWRtaW46YWRtaW4='
            Authorization: `Basic ${auth_data}`,
          },
        });
        return next.handle(req);
      })
    );
  }
}
