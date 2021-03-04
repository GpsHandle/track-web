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

import { Attribute } from '../models/attribute';

/**
 * Computed attributes management
 */
@Injectable({
  providedIn: 'root',
})
export class AttributesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /**
   * Path part for operation attributesComputedGet
   */
  static readonly AttributesComputedGetPath = '/attributes/computed';

  /**
   * Fetch a list of Attributes.
   *
   * Without params, it returns a list of Attributes the user has access to
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `attributesComputedGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  attributesComputedGet$Response(params?: {
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
  }): Observable<StrictHttpResponse<Array<Attribute>>> {
    const rb = new RequestBuilder(this.rootUrl, AttributesService.AttributesComputedGetPath, 'get');
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
          return r as StrictHttpResponse<Array<Attribute>>;
        })
      );
  }

  /**
   * Fetch a list of Attributes.
   *
   * Without params, it returns a list of Attributes the user has access to
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `attributesComputedGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  attributesComputedGet(params?: {
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
  }): Observable<Array<Attribute>> {
    return this.attributesComputedGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Attribute>>) => r.body as Array<Attribute>)
    );
  }

  /**
   * Path part for operation attributesComputedPost
   */
  static readonly AttributesComputedPostPath = '/attributes/computed';

  /**
   * Create an Attribute.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `attributesComputedPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  attributesComputedPost$Response(params: { body: Attribute }): Observable<StrictHttpResponse<Attribute>> {
    const rb = new RequestBuilder(this.rootUrl, AttributesService.AttributesComputedPostPath, 'post');
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
          return r as StrictHttpResponse<Attribute>;
        })
      );
  }

  /**
   * Create an Attribute.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `attributesComputedPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  attributesComputedPost(params: { body: Attribute }): Observable<Attribute> {
    return this.attributesComputedPost$Response(params).pipe(
      map((r: StrictHttpResponse<Attribute>) => r.body as Attribute)
    );
  }

  /**
   * Path part for operation attributesComputedIdPut
   */
  static readonly AttributesComputedIdPutPath = '/attributes/computed/{id}';

  /**
   * Update an Attribute.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `attributesComputedIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  attributesComputedIdPut$Response(params: { id: number; body: Attribute }): Observable<StrictHttpResponse<Attribute>> {
    const rb = new RequestBuilder(this.rootUrl, AttributesService.AttributesComputedIdPutPath, 'put');
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
          return r as StrictHttpResponse<Attribute>;
        })
      );
  }

  /**
   * Update an Attribute.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `attributesComputedIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  attributesComputedIdPut(params: { id: number; body: Attribute }): Observable<Attribute> {
    return this.attributesComputedIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<Attribute>) => r.body as Attribute)
    );
  }

  /**
   * Path part for operation attributesComputedIdDelete
   */
  static readonly AttributesComputedIdDeletePath = '/attributes/computed/{id}';

  /**
   * Delete an Attribute.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `attributesComputedIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  attributesComputedIdDelete$Response(params: { id: number }): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AttributesService.AttributesComputedIdDeletePath, 'delete');
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
   * Delete an Attribute.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `attributesComputedIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  attributesComputedIdDelete(params: { id: number }): Observable<void> {
    return this.attributesComputedIdDelete$Response(params).pipe(map((r: StrictHttpResponse<void>) => r.body as void));
  }
}
