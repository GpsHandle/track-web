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

import { Group } from '../models/group';

/**
 * Group management
 */
@Injectable({
  providedIn: 'root',
})
export class GroupsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /**
   * Path part for operation groupsGet
   */
  static readonly GroupsGetPath = '/groups';

  /**
   * Fetch a list of Groups.
   *
   * Without any params, returns a list of the Groups the user belongs to
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `groupsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  groupsGet$Response(params?: {
    /**
     * Can only be used by admins or managers to fetch all entities
     */
    all?: boolean;

    /**
     * Standard users can use this only with their own _userId_
     */
    userId?: number;
  }): Observable<StrictHttpResponse<Array<Group>>> {
    const rb = new RequestBuilder(this.rootUrl, GroupsService.GroupsGetPath, 'get');
    if (params) {
      rb.query('all', params.all, {});
      rb.query('userId', params.userId, {});
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
          return r as StrictHttpResponse<Array<Group>>;
        })
      );
  }

  /**
   * Fetch a list of Groups.
   *
   * Without any params, returns a list of the Groups the user belongs to
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `groupsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  groupsGet(params?: {
    /**
     * Can only be used by admins or managers to fetch all entities
     */
    all?: boolean;

    /**
     * Standard users can use this only with their own _userId_
     */
    userId?: number;
  }): Observable<Array<Group>> {
    return this.groupsGet$Response(params).pipe(map((r: StrictHttpResponse<Array<Group>>) => r.body as Array<Group>));
  }

  /**
   * Path part for operation groupsPost
   */
  static readonly GroupsPostPath = '/groups';

  /**
   * Create a Group.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `groupsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  groupsPost$Response(params: { body: Group }): Observable<StrictHttpResponse<Group>> {
    const rb = new RequestBuilder(this.rootUrl, GroupsService.GroupsPostPath, 'post');
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
          return r as StrictHttpResponse<Group>;
        })
      );
  }

  /**
   * Create a Group.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `groupsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  groupsPost(params: { body: Group }): Observable<Group> {
    return this.groupsPost$Response(params).pipe(map((r: StrictHttpResponse<Group>) => r.body as Group));
  }

  /**
   * Path part for operation groupsIdPut
   */
  static readonly GroupsIdPutPath = '/groups/{id}';

  /**
   * Update a Group.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `groupsIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  groupsIdPut$Response(params: { id: number; body: Group }): Observable<StrictHttpResponse<Group>> {
    const rb = new RequestBuilder(this.rootUrl, GroupsService.GroupsIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
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
          return r as StrictHttpResponse<Group>;
        })
      );
  }

  /**
   * Update a Group.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `groupsIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  groupsIdPut(params: { id: number; body: Group }): Observable<Group> {
    return this.groupsIdPut$Response(params).pipe(map((r: StrictHttpResponse<Group>) => r.body as Group));
  }

  /**
   * Path part for operation groupsIdDelete
   */
  static readonly GroupsIdDeletePath = '/groups/{id}';

  /**
   * Delete a Group.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `groupsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  groupsIdDelete$Response(params: { id: number }): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, GroupsService.GroupsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
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
   * Delete a Group.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `groupsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  groupsIdDelete(params: { id: number }): Observable<void> {
    return this.groupsIdDelete$Response(params).pipe(map((r: StrictHttpResponse<void>) => r.body as void));
  }
}
