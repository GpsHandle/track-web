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

import { Geofence } from '../models/geofence';

/**
 * Geofence management
 */
@Injectable({
  providedIn: 'root',
})
export class GeofencesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /**
   * Path part for operation geofencesGet
   */
  static readonly GeofencesGetPath = '/geofences';

  /**
   * Fetch a list of Geofences.
   *
   * Without params, it returns a list of Geofences the user has access to
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `geofencesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  geofencesGet$Response(params?: {
    /**
     * Can only be used by admins or managers to fetch all entities
     */
    all?: boolean;

    /**
     * Standard users can use this only with their own _userId_
     */
    userId?: number;

    /**
     * Standard users can use this only with _deviceId_s, they have access to
     */
    deviceId?: number;

    /**
     * Standard users can use this only with _groupId_s, they have access to
     */
    groupId?: number;
    refresh?: boolean;
  }): Observable<StrictHttpResponse<Array<Geofence>>> {
    const rb = new RequestBuilder(this.rootUrl, GeofencesService.GeofencesGetPath, 'get');
    if (params) {
      rb.query('all', params.all, {});
      rb.query('userId', params.userId, {});
      rb.query('deviceId', params.deviceId, {});
      rb.query('groupId', params.groupId, {});
      rb.query('refresh', params.refresh, {});
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
          return r as StrictHttpResponse<Array<Geofence>>;
        })
      );
  }

  /**
   * Fetch a list of Geofences.
   *
   * Without params, it returns a list of Geofences the user has access to
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `geofencesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  geofencesGet(params?: {
    /**
     * Can only be used by admins or managers to fetch all entities
     */
    all?: boolean;

    /**
     * Standard users can use this only with their own _userId_
     */
    userId?: number;

    /**
     * Standard users can use this only with _deviceId_s, they have access to
     */
    deviceId?: number;

    /**
     * Standard users can use this only with _groupId_s, they have access to
     */
    groupId?: number;
    refresh?: boolean;
  }): Observable<Array<Geofence>> {
    return this.geofencesGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Geofence>>) => r.body as Array<Geofence>)
    );
  }

  /**
   * Path part for operation geofencesPost
   */
  static readonly GeofencesPostPath = '/geofences';

  /**
   * Create a Geofence.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `geofencesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  geofencesPost$Response(params: { body: Geofence }): Observable<StrictHttpResponse<Geofence>> {
    const rb = new RequestBuilder(this.rootUrl, GeofencesService.GeofencesPostPath, 'post');
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
          return r as StrictHttpResponse<Geofence>;
        })
      );
  }

  /**
   * Create a Geofence.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `geofencesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  geofencesPost(params: { body: Geofence }): Observable<Geofence> {
    return this.geofencesPost$Response(params).pipe(map((r: StrictHttpResponse<Geofence>) => r.body as Geofence));
  }

  /**
   * Path part for operation geofencesIdPut
   */
  static readonly GeofencesIdPutPath = '/geofences/{id}';

  /**
   * Update a Geofence.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `geofencesIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  geofencesIdPut$Response(params: { id: number; body: Geofence }): Observable<StrictHttpResponse<Geofence>> {
    const rb = new RequestBuilder(this.rootUrl, GeofencesService.GeofencesIdPutPath, 'put');
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
          return r as StrictHttpResponse<Geofence>;
        })
      );
  }

  /**
   * Update a Geofence.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `geofencesIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  geofencesIdPut(params: { id: number; body: Geofence }): Observable<Geofence> {
    return this.geofencesIdPut$Response(params).pipe(map((r: StrictHttpResponse<Geofence>) => r.body as Geofence));
  }

  /**
   * Path part for operation geofencesIdDelete
   */
  static readonly GeofencesIdDeletePath = '/geofences/{id}';

  /**
   * Delete a Geofence.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `geofencesIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  geofencesIdDelete$Response(params: { id: number }): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, GeofencesService.GeofencesIdDeletePath, 'delete');
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
   * Delete a Geofence.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `geofencesIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  geofencesIdDelete(params: { id: number }): Observable<void> {
    return this.geofencesIdDelete$Response(params).pipe(map((r: StrictHttpResponse<void>) => r.body as void));
  }
}
