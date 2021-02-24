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
 * User management
 */
@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation usersGet
   */
  static readonly UsersGetPath = '/users';

  /**
   * Fetch a list of Users.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGet$Response(params?: {

    /**
     * Can only be used by admin or manager users
     */
    userId?: string;
  }): Observable<StrictHttpResponse<Array<User>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UsersGetPath, 'get');
    if (params) {
      rb.query('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<User>>;
      })
    );
  }

  /**
   * Fetch a list of Users.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `usersGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGet(params?: {

    /**
     * Can only be used by admin or manager users
     */
    userId?: string;
  }): Observable<Array<User>> {

    return this.usersGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<User>>) => r.body as Array<User>)
    );
  }

  /**
   * Path part for operation usersPost
   */
  static readonly UsersPostPath = '/users';

  /**
   * Create a User.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersPost$Response(params: {
    body: User
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UsersPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * Create a User.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `usersPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersPost(params: {
    body: User
  }): Observable<User> {

    return this.usersPost$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation usersIdPut
   */
  static readonly UsersIdPutPath = '/users/{id}';

  /**
   * Update a User.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersIdPut$Response(params: {
    id: number;
    body: User
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UsersIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * Update a User.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `usersIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersIdPut(params: {
    id: number;
    body: User
  }): Observable<User> {

    return this.usersIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation usersIdDelete
   */
  static readonly UsersIdDeletePath = '/users/{id}';

  /**
   * Delete a User.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UsersIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Delete a User.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `usersIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersIdDelete(params: {
    id: number;
  }): Observable<void> {

    return this.usersIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
