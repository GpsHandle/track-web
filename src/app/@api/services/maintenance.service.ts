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

import { Maintenance } from '../models/maintenance';

/**
 * Maintenance management
 */
@Injectable({
  providedIn: 'root',
})
export class MaintenanceService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /**
   * Path part for operation maintenanceGet
   */
  static readonly MaintenanceGetPath = '/maintenance';

  /**
   * Fetch a list of Maintenance.
   *
   * Without params, it returns a list of Maintenance the user has access to
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `maintenanceGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  maintenanceGet$Response(params?: {
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
  }): Observable<StrictHttpResponse<Array<Maintenance>>> {
    const rb = new RequestBuilder(this.rootUrl, MaintenanceService.MaintenanceGetPath, 'get');
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
          return r as StrictHttpResponse<Array<Maintenance>>;
        })
      );
  }

  /**
   * Fetch a list of Maintenance.
   *
   * Without params, it returns a list of Maintenance the user has access to
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `maintenanceGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  maintenanceGet(params?: {
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
  }): Observable<Array<Maintenance>> {
    return this.maintenanceGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Maintenance>>) => r.body as Array<Maintenance>)
    );
  }

  /**
   * Path part for operation maintenancePost
   */
  static readonly MaintenancePostPath = '/maintenance';

  /**
   * Create a Maintenance.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `maintenancePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  maintenancePost$Response(params: { body: Maintenance }): Observable<StrictHttpResponse<Maintenance>> {
    const rb = new RequestBuilder(this.rootUrl, MaintenanceService.MaintenancePostPath, 'post');
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
          return r as StrictHttpResponse<Maintenance>;
        })
      );
  }

  /**
   * Create a Maintenance.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `maintenancePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  maintenancePost(params: { body: Maintenance }): Observable<Maintenance> {
    return this.maintenancePost$Response(params).pipe(
      map((r: StrictHttpResponse<Maintenance>) => r.body as Maintenance)
    );
  }

  /**
   * Path part for operation maintenanceIdPut
   */
  static readonly MaintenanceIdPutPath = '/maintenance/{id}';

  /**
   * Update a Maintenance.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `maintenanceIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  maintenanceIdPut$Response(params: { id: number; body: Maintenance }): Observable<StrictHttpResponse<Maintenance>> {
    const rb = new RequestBuilder(this.rootUrl, MaintenanceService.MaintenanceIdPutPath, 'put');
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
          return r as StrictHttpResponse<Maintenance>;
        })
      );
  }

  /**
   * Update a Maintenance.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `maintenanceIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  maintenanceIdPut(params: { id: number; body: Maintenance }): Observable<Maintenance> {
    return this.maintenanceIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<Maintenance>) => r.body as Maintenance)
    );
  }

  /**
   * Path part for operation maintenanceIdDelete
   */
  static readonly MaintenanceIdDeletePath = '/maintenance/{id}';

  /**
   * Delete a Maintenance.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `maintenanceIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  maintenanceIdDelete$Response(params: { id: number }): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, MaintenanceService.MaintenanceIdDeletePath, 'delete');
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
   * Delete a Maintenance.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `maintenanceIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  maintenanceIdDelete(params: { id: number }): Observable<void> {
    return this.maintenanceIdDelete$Response(params).pipe(map((r: StrictHttpResponse<void>) => r.body as void));
  }
}
