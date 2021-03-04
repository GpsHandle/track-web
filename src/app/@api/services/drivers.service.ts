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

import { Driver } from '../models/driver';

/**
 * Drivers management
 */
@Injectable({
  providedIn: 'root',
})
export class DriversService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /**
   * Path part for operation driversGet
   */
  static readonly DriversGetPath = '/drivers';

  /**
   * Fetch a list of Drivers.
   *
   * Without params, it returns a list of Drivers the user has access to
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `driversGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  driversGet$Response(params?: {
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
  }): Observable<StrictHttpResponse<Array<Driver>>> {
    const rb = new RequestBuilder(this.rootUrl, DriversService.DriversGetPath, 'get');
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
          return r as StrictHttpResponse<Array<Driver>>;
        })
      );
  }

  /**
   * Fetch a list of Drivers.
   *
   * Without params, it returns a list of Drivers the user has access to
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `driversGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  driversGet(params?: {
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
  }): Observable<Array<Driver>> {
    return this.driversGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Driver>>) => r.body as Array<Driver>)
    );
  }

  /**
   * Path part for operation driversPost
   */
  static readonly DriversPostPath = '/drivers';

  /**
   * Create a Driver.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `driversPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  driversPost$Response(params: { body: Driver }): Observable<StrictHttpResponse<Driver>> {
    const rb = new RequestBuilder(this.rootUrl, DriversService.DriversPostPath, 'post');
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
          return r as StrictHttpResponse<Driver>;
        })
      );
  }

  /**
   * Create a Driver.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `driversPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  driversPost(params: { body: Driver }): Observable<Driver> {
    return this.driversPost$Response(params).pipe(map((r: StrictHttpResponse<Driver>) => r.body as Driver));
  }

  /**
   * Path part for operation driversIdPut
   */
  static readonly DriversIdPutPath = '/drivers/{id}';

  /**
   * Update a Driver.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `driversIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  driversIdPut$Response(params: { id: number; body: Driver }): Observable<StrictHttpResponse<Driver>> {
    const rb = new RequestBuilder(this.rootUrl, DriversService.DriversIdPutPath, 'put');
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
          return r as StrictHttpResponse<Driver>;
        })
      );
  }

  /**
   * Update a Driver.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `driversIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  driversIdPut(params: { id: number; body: Driver }): Observable<Driver> {
    return this.driversIdPut$Response(params).pipe(map((r: StrictHttpResponse<Driver>) => r.body as Driver));
  }

  /**
   * Path part for operation driversIdDelete
   */
  static readonly DriversIdDeletePath = '/drivers/{id}';

  /**
   * Delete a Driver.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `driversIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  driversIdDelete$Response(params: { id: number }): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, DriversService.DriversIdDeletePath, 'delete');
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
   * Delete a Driver.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `driversIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  driversIdDelete(params: { id: number }): Observable<void> {
    return this.driversIdDelete$Response(params).pipe(map((r: StrictHttpResponse<void>) => r.body as void));
  }
}
