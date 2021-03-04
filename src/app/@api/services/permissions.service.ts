/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Permission } from '../models/permission';

/**
 * User permissions and other object linking
 */
@Injectable({
  providedIn: 'root',
})
export class PermissionsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /**
   * Path part for operation permissionsPost
   */
  static readonly PermissionsPostPath = '/permissions';

  /**
   * Link an Object to another Object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `permissionsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  permissionsPost$Response(params: { body: Permission }): Observable<StrictHttpResponse<Permission>> {
    const rb = new RequestBuilder(this.rootUrl, PermissionsService.PermissionsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http
      .request(
        rb.build({
          responseType: 'json',
          accept: 'application/json',
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<Permission>;
        })
      );
  }

  /**
   * Link an Object to another Object.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `permissionsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  permissionsPost(params: { body: Permission }): Observable<Permission> {
    return this.permissionsPost$Response(params).pipe(map((r: StrictHttpResponse<Permission>) => r.body as Permission));
  }

  /**
   * Path part for operation permissionsDelete
   */
  static readonly PermissionsDeletePath = '/permissions';

  /**
   * Unlink an Object from another Object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `permissionsDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  permissionsDelete$Response(params: { body: Permission }): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PermissionsService.PermissionsDeletePath, 'delete');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http
      .request(
        rb.build({
          responseType: 'text',
          accept: '*/*',
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
        })
      );
  }

  /**
   * Unlink an Object from another Object.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `permissionsDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  permissionsDelete(params: { body: Permission }): Observable<void> {
    return this.permissionsDelete$Response(params).pipe(map((r: StrictHttpResponse<void>) => r.body as void));
  }
}
