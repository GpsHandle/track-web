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

import { User } from '../models/user';

/**
 * User session management
 */
@Injectable({
  providedIn: 'root',
})
export class SessionService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /**
   * Path part for operation sessionGet
   */
  static readonly SessionGetPath = '/session';

  /**
   * Fetch Session information.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sessionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  sessionGet$Response(params?: { token?: string }): Observable<StrictHttpResponse<User>> {
    const rb = new RequestBuilder(this.rootUrl, SessionService.SessionGetPath, 'get');
    if (params) {
      rb.query('token', params.token, {});
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
          return r as StrictHttpResponse<User>;
        })
      );
  }

  /**
   * Fetch Session information.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `sessionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sessionGet(params?: { token?: string }): Observable<User> {
    return this.sessionGet$Response(params).pipe(map((r: StrictHttpResponse<User>) => r.body as User));
  }

  /**
   * Path part for operation sessionPost
   */
  static readonly SessionPostPath = '/session';

  /**
   * Create a new Session.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sessionPost()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  sessionPost$Response(params: { body: { email: string; password: string } }): Observable<StrictHttpResponse<User>> {
    const rb = new RequestBuilder(this.rootUrl, SessionService.SessionPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/x-www-form-urlencoded');
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
          return r as StrictHttpResponse<User>;
        })
      );
  }

  /**
   * Create a new Session.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `sessionPost$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  sessionPost(params: { body: { email: string; password: string } }): Observable<User> {
    return this.sessionPost$Response(params).pipe(map((r: StrictHttpResponse<User>) => r.body as User));
  }

  /**
   * Path part for operation sessionDelete
   */
  static readonly SessionDeletePath = '/session';

  /**
   * Close the Session.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sessionDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  sessionDelete$Response(params?: {}): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, SessionService.SessionDeletePath, 'delete');
    if (params) {
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
   * Close the Session.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `sessionDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sessionDelete(params?: {}): Observable<void> {
    return this.sessionDelete$Response(params).pipe(map((r: StrictHttpResponse<void>) => r.body as void));
  }
}
