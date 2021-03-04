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

import { Notification } from '../models/notification';
import { NotificationType } from '../models/notification-type';

/**
 * User notifications management
 */
@Injectable({
  providedIn: 'root',
})
export class NotificationsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /**
   * Path part for operation notificationsGet
   */
  static readonly NotificationsGetPath = '/notifications';

  /**
   * Fetch a list of Notifications.
   *
   * Without params, it returns a list of Notifications the user has access to
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsGet$Response(params?: {
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
  }): Observable<StrictHttpResponse<Array<Notification>>> {
    const rb = new RequestBuilder(this.rootUrl, NotificationsService.NotificationsGetPath, 'get');
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
          return r as StrictHttpResponse<Array<Notification>>;
        })
      );
  }

  /**
   * Fetch a list of Notifications.
   *
   * Without params, it returns a list of Notifications the user has access to
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `notificationsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsGet(params?: {
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
  }): Observable<Array<Notification>> {
    return this.notificationsGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Notification>>) => r.body as Array<Notification>)
    );
  }

  /**
   * Path part for operation notificationsPost
   */
  static readonly NotificationsPostPath = '/notifications';

  /**
   * Create a Notification.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  notificationsPost$Response(params: { body: Notification }): Observable<StrictHttpResponse<Notification>> {
    const rb = new RequestBuilder(this.rootUrl, NotificationsService.NotificationsPostPath, 'post');
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
          return r as StrictHttpResponse<Notification>;
        })
      );
  }

  /**
   * Create a Notification.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `notificationsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  notificationsPost(params: { body: Notification }): Observable<Notification> {
    return this.notificationsPost$Response(params).pipe(
      map((r: StrictHttpResponse<Notification>) => r.body as Notification)
    );
  }

  /**
   * Path part for operation notificationsIdPut
   */
  static readonly NotificationsIdPutPath = '/notifications/{id}';

  /**
   * Update a Notification.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  notificationsIdPut$Response(params: {
    id: number;
    body: Notification;
  }): Observable<StrictHttpResponse<Notification>> {
    const rb = new RequestBuilder(this.rootUrl, NotificationsService.NotificationsIdPutPath, 'put');
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
          return r as StrictHttpResponse<Notification>;
        })
      );
  }

  /**
   * Update a Notification.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `notificationsIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  notificationsIdPut(params: { id: number; body: Notification }): Observable<Notification> {
    return this.notificationsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<Notification>) => r.body as Notification)
    );
  }

  /**
   * Path part for operation notificationsIdDelete
   */
  static readonly NotificationsIdDeletePath = '/notifications/{id}';

  /**
   * Delete a Notification.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsIdDelete$Response(params: { id: number }): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, NotificationsService.NotificationsIdDeletePath, 'delete');
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
   * Delete a Notification.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `notificationsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsIdDelete(params: { id: number }): Observable<void> {
    return this.notificationsIdDelete$Response(params).pipe(map((r: StrictHttpResponse<void>) => r.body as void));
  }

  /**
   * Path part for operation notificationsTypesGet
   */
  static readonly NotificationsTypesGetPath = '/notifications/types';

  /**
   * Fetch a list of available Notification types.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsTypesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsTypesGet$Response(params?: {}): Observable<StrictHttpResponse<Array<NotificationType>>> {
    const rb = new RequestBuilder(this.rootUrl, NotificationsService.NotificationsTypesGetPath, 'get');
    if (params) {
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
          return r as StrictHttpResponse<Array<NotificationType>>;
        })
      );
  }

  /**
   * Fetch a list of available Notification types.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `notificationsTypesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsTypesGet(params?: {}): Observable<Array<NotificationType>> {
    return this.notificationsTypesGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<NotificationType>>) => r.body as Array<NotificationType>)
    );
  }

  /**
   * Path part for operation notificationsTestPost
   */
  static readonly NotificationsTestPostPath = '/notifications/test';

  /**
   * Send test notification to current user via Email and SMS.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsTestPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsTestPost$Response(params?: {}): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, NotificationsService.NotificationsTestPostPath, 'post');
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
   * Send test notification to current user via Email and SMS.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `notificationsTestPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsTestPost(params?: {}): Observable<void> {
    return this.notificationsTestPost$Response(params).pipe(map((r: StrictHttpResponse<void>) => r.body as void));
  }
}
