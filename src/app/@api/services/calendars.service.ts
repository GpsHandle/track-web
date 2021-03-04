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

import { Calendar } from '../models/calendar';

/**
 * Calendar management
 */
@Injectable({
  providedIn: 'root',
})
export class CalendarsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /**
   * Path part for operation calendarsGet
   */
  static readonly CalendarsGetPath = '/calendars';

  /**
   * Fetch a list of Calendars.
   *
   * Without params, it returns a list of Calendars the user has access to
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `calendarsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  calendarsGet$Response(params?: {
    /**
     * Can only be used by admins or managers to fetch all entities
     */
    all?: boolean;

    /**
     * Standard users can use this only with their own _userId_
     */
    userId?: number;
  }): Observable<StrictHttpResponse<Array<Calendar>>> {
    const rb = new RequestBuilder(this.rootUrl, CalendarsService.CalendarsGetPath, 'get');
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
          return r as StrictHttpResponse<Array<Calendar>>;
        })
      );
  }

  /**
   * Fetch a list of Calendars.
   *
   * Without params, it returns a list of Calendars the user has access to
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `calendarsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  calendarsGet(params?: {
    /**
     * Can only be used by admins or managers to fetch all entities
     */
    all?: boolean;

    /**
     * Standard users can use this only with their own _userId_
     */
    userId?: number;
  }): Observable<Array<Calendar>> {
    return this.calendarsGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Calendar>>) => r.body as Array<Calendar>)
    );
  }

  /**
   * Path part for operation calendarsPost
   */
  static readonly CalendarsPostPath = '/calendars';

  /**
   * Create a Calendar.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `calendarsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  calendarsPost$Response(params: { body: Calendar }): Observable<StrictHttpResponse<Calendar>> {
    const rb = new RequestBuilder(this.rootUrl, CalendarsService.CalendarsPostPath, 'post');
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
          return r as StrictHttpResponse<Calendar>;
        })
      );
  }

  /**
   * Create a Calendar.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `calendarsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  calendarsPost(params: { body: Calendar }): Observable<Calendar> {
    return this.calendarsPost$Response(params).pipe(map((r: StrictHttpResponse<Calendar>) => r.body as Calendar));
  }

  /**
   * Path part for operation calendarsIdPut
   */
  static readonly CalendarsIdPutPath = '/calendars/{id}';

  /**
   * Update a Calendar.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `calendarsIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  calendarsIdPut$Response(params: { id: number; body: Calendar }): Observable<StrictHttpResponse<Calendar>> {
    const rb = new RequestBuilder(this.rootUrl, CalendarsService.CalendarsIdPutPath, 'put');
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
          return r as StrictHttpResponse<Calendar>;
        })
      );
  }

  /**
   * Update a Calendar.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `calendarsIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  calendarsIdPut(params: { id: number; body: Calendar }): Observable<Calendar> {
    return this.calendarsIdPut$Response(params).pipe(map((r: StrictHttpResponse<Calendar>) => r.body as Calendar));
  }

  /**
   * Path part for operation calendarsIdDelete
   */
  static readonly CalendarsIdDeletePath = '/calendars/{id}';

  /**
   * Delete a Calendar.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `calendarsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  calendarsIdDelete$Response(params: { id: number }): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CalendarsService.CalendarsIdDeletePath, 'delete');
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
   * Delete a Calendar.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `calendarsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  calendarsIdDelete(params: { id: number }): Observable<void> {
    return this.calendarsIdDelete$Response(params).pipe(map((r: StrictHttpResponse<void>) => r.body as void));
  }
}
