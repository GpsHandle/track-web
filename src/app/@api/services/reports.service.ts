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

import { Event } from '../models/event';
import { Position } from '../models/position';
import { ReportStops } from '../models/report-stops';
import { ReportSummary } from '../models/report-summary';
import { ReportTrips } from '../models/report-trips';

/**
 * Reports generation
 */
@Injectable({
  providedIn: 'root',
})
export class ReportsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /**
   * Path part for operation reportsRouteGet
   */
  static readonly ReportsRouteGetPath = '/reports/route';

  /**
   * Fetch a list of Positions within the time period for the Devices or Groups.
   *
   * At least one _deviceId_ or one _groupId_ must be passed
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportsRouteGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsRouteGet$Json$Response(params: {
    deviceId?: Array<number>;
    groupId?: Array<number>;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to: string;
  }): Observable<StrictHttpResponse<Array<Position>>> {
    const rb = new RequestBuilder(this.rootUrl, ReportsService.ReportsRouteGetPath, 'get');
    if (params) {
      rb.query('deviceId', params.deviceId, { style: 'form', explode: true });
      rb.query('groupId', params.groupId, { style: 'form', explode: true });
      rb.query('from', params.from, {});
      rb.query('to', params.to, {});
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
          return r as StrictHttpResponse<Array<Position>>;
        })
      );
  }

  /**
   * Fetch a list of Positions within the time period for the Devices or Groups.
   *
   * At least one _deviceId_ or one _groupId_ must be passed
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reportsRouteGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsRouteGet$Json(params: {
    deviceId?: Array<number>;
    groupId?: Array<number>;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to: string;
  }): Observable<Array<Position>> {
    return this.reportsRouteGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Position>>) => r.body as Array<Position>)
    );
  }

  /**
   * Fetch a list of Positions within the time period for the Devices or Groups.
   *
   * At least one _deviceId_ or one _groupId_ must be passed
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportsRouteGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsRouteGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet$Response(params: {
    deviceId?: Array<number>;
    groupId?: Array<number>;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to: string;
  }): Observable<StrictHttpResponse<Array<Position>>> {
    const rb = new RequestBuilder(this.rootUrl, ReportsService.ReportsRouteGetPath, 'get');
    if (params) {
      rb.query('deviceId', params.deviceId, { style: 'form', explode: true });
      rb.query('groupId', params.groupId, { style: 'form', explode: true });
      rb.query('from', params.from, {});
      rb.query('to', params.to, {});
    }

    return this.http
      .request(
        rb.build({
          responseType: 'blob',
          accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<Array<Position>>;
        })
      );
  }

  /**
   * Fetch a list of Positions within the time period for the Devices or Groups.
   *
   * At least one _deviceId_ or one _groupId_ must be passed
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reportsRouteGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsRouteGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet(params: {
    deviceId?: Array<number>;
    groupId?: Array<number>;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to: string;
  }): Observable<Array<Position>> {
    return this.reportsRouteGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Position>>) => r.body as Array<Position>)
    );
  }

  /**
   * Path part for operation reportsEventsGet
   */
  static readonly ReportsEventsGetPath = '/reports/events';

  /**
   * Fetch a list of Events within the time period for the Devices or Groups.
   *
   * At least one _deviceId_ or one _groupId_ must be passed
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportsEventsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsEventsGet$Json$Response(params: {
    deviceId?: Array<number>;
    groupId?: Array<number>;

    /**
     * % can be used to return events of all types
     */
    type?: Array<string>;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to: string;
  }): Observable<StrictHttpResponse<Array<Event>>> {
    const rb = new RequestBuilder(this.rootUrl, ReportsService.ReportsEventsGetPath, 'get');
    if (params) {
      rb.query('deviceId', params.deviceId, { style: 'form', explode: true });
      rb.query('groupId', params.groupId, { style: 'form', explode: true });
      rb.query('type', params.type, { style: 'form', explode: false });
      rb.query('from', params.from, {});
      rb.query('to', params.to, {});
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
          return r as StrictHttpResponse<Array<Event>>;
        })
      );
  }

  /**
   * Fetch a list of Events within the time period for the Devices or Groups.
   *
   * At least one _deviceId_ or one _groupId_ must be passed
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reportsEventsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsEventsGet$Json(params: {
    deviceId?: Array<number>;
    groupId?: Array<number>;

    /**
     * % can be used to return events of all types
     */
    type?: Array<string>;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to: string;
  }): Observable<Array<Event>> {
    return this.reportsEventsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Event>>) => r.body as Array<Event>)
    );
  }

  /**
   * Fetch a list of Events within the time period for the Devices or Groups.
   *
   * At least one _deviceId_ or one _groupId_ must be passed
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportsEventsGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsEventsGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet$Response(params: {
    deviceId?: Array<number>;
    groupId?: Array<number>;

    /**
     * % can be used to return events of all types
     */
    type?: Array<string>;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to: string;
  }): Observable<StrictHttpResponse<Array<Event>>> {
    const rb = new RequestBuilder(this.rootUrl, ReportsService.ReportsEventsGetPath, 'get');
    if (params) {
      rb.query('deviceId', params.deviceId, { style: 'form', explode: true });
      rb.query('groupId', params.groupId, { style: 'form', explode: true });
      rb.query('type', params.type, { style: 'form', explode: false });
      rb.query('from', params.from, {});
      rb.query('to', params.to, {});
    }

    return this.http
      .request(
        rb.build({
          responseType: 'blob',
          accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<Array<Event>>;
        })
      );
  }

  /**
   * Fetch a list of Events within the time period for the Devices or Groups.
   *
   * At least one _deviceId_ or one _groupId_ must be passed
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reportsEventsGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsEventsGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet(params: {
    deviceId?: Array<number>;
    groupId?: Array<number>;

    /**
     * % can be used to return events of all types
     */
    type?: Array<string>;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to: string;
  }): Observable<Array<Event>> {
    return this.reportsEventsGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Event>>) => r.body as Array<Event>)
    );
  }

  /**
   * Path part for operation reportsSummaryGet
   */
  static readonly ReportsSummaryGetPath = '/reports/summary';

  /**
   * Fetch a list of ReportSummary within the time period for the Devices or Groups.
   *
   * At least one _deviceId_ or one _groupId_ must be passed
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportsSummaryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsSummaryGet$Json$Response(params: {
    deviceId?: Array<number>;
    groupId?: Array<number>;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to: string;
  }): Observable<StrictHttpResponse<Array<ReportSummary>>> {
    const rb = new RequestBuilder(this.rootUrl, ReportsService.ReportsSummaryGetPath, 'get');
    if (params) {
      rb.query('deviceId', params.deviceId, { style: 'form', explode: true });
      rb.query('groupId', params.groupId, { style: 'form', explode: true });
      rb.query('from', params.from, {});
      rb.query('to', params.to, {});
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
          return r as StrictHttpResponse<Array<ReportSummary>>;
        })
      );
  }

  /**
   * Fetch a list of ReportSummary within the time period for the Devices or Groups.
   *
   * At least one _deviceId_ or one _groupId_ must be passed
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reportsSummaryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsSummaryGet$Json(params: {
    deviceId?: Array<number>;
    groupId?: Array<number>;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to: string;
  }): Observable<Array<ReportSummary>> {
    return this.reportsSummaryGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ReportSummary>>) => r.body as Array<ReportSummary>)
    );
  }

  /**
   * Fetch a list of ReportSummary within the time period for the Devices or Groups.
   *
   * At least one _deviceId_ or one _groupId_ must be passed
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportsSummaryGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsSummaryGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet$Response(params: {
    deviceId?: Array<number>;
    groupId?: Array<number>;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to: string;
  }): Observable<StrictHttpResponse<Array<ReportSummary>>> {
    const rb = new RequestBuilder(this.rootUrl, ReportsService.ReportsSummaryGetPath, 'get');
    if (params) {
      rb.query('deviceId', params.deviceId, { style: 'form', explode: true });
      rb.query('groupId', params.groupId, { style: 'form', explode: true });
      rb.query('from', params.from, {});
      rb.query('to', params.to, {});
    }

    return this.http
      .request(
        rb.build({
          responseType: 'blob',
          accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<Array<ReportSummary>>;
        })
      );
  }

  /**
   * Fetch a list of ReportSummary within the time period for the Devices or Groups.
   *
   * At least one _deviceId_ or one _groupId_ must be passed
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reportsSummaryGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsSummaryGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet(params: {
    deviceId?: Array<number>;
    groupId?: Array<number>;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to: string;
  }): Observable<Array<ReportSummary>> {
    return this.reportsSummaryGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ReportSummary>>) => r.body as Array<ReportSummary>)
    );
  }

  /**
   * Path part for operation reportsTripsGet
   */
  static readonly ReportsTripsGetPath = '/reports/trips';

  /**
   * Fetch a list of ReportTrips within the time period for the Devices or Groups.
   *
   * At least one _deviceId_ or one _groupId_ must be passed
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportsTripsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsTripsGet$Json$Response(params: {
    deviceId?: Array<number>;
    groupId?: Array<number>;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to: string;
  }): Observable<StrictHttpResponse<Array<ReportTrips>>> {
    const rb = new RequestBuilder(this.rootUrl, ReportsService.ReportsTripsGetPath, 'get');
    if (params) {
      rb.query('deviceId', params.deviceId, { style: 'form', explode: true });
      rb.query('groupId', params.groupId, { style: 'form', explode: true });
      rb.query('from', params.from, {});
      rb.query('to', params.to, {});
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
          return r as StrictHttpResponse<Array<ReportTrips>>;
        })
      );
  }

  /**
   * Fetch a list of ReportTrips within the time period for the Devices or Groups.
   *
   * At least one _deviceId_ or one _groupId_ must be passed
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reportsTripsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsTripsGet$Json(params: {
    deviceId?: Array<number>;
    groupId?: Array<number>;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to: string;
  }): Observable<Array<ReportTrips>> {
    return this.reportsTripsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ReportTrips>>) => r.body as Array<ReportTrips>)
    );
  }

  /**
   * Fetch a list of ReportTrips within the time period for the Devices or Groups.
   *
   * At least one _deviceId_ or one _groupId_ must be passed
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportsTripsGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsTripsGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet$Response(params: {
    deviceId?: Array<number>;
    groupId?: Array<number>;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to: string;
  }): Observable<StrictHttpResponse<Array<ReportTrips>>> {
    const rb = new RequestBuilder(this.rootUrl, ReportsService.ReportsTripsGetPath, 'get');
    if (params) {
      rb.query('deviceId', params.deviceId, { style: 'form', explode: true });
      rb.query('groupId', params.groupId, { style: 'form', explode: true });
      rb.query('from', params.from, {});
      rb.query('to', params.to, {});
    }

    return this.http
      .request(
        rb.build({
          responseType: 'blob',
          accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<Array<ReportTrips>>;
        })
      );
  }

  /**
   * Fetch a list of ReportTrips within the time period for the Devices or Groups.
   *
   * At least one _deviceId_ or one _groupId_ must be passed
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reportsTripsGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsTripsGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet(params: {
    deviceId?: Array<number>;
    groupId?: Array<number>;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to: string;
  }): Observable<Array<ReportTrips>> {
    return this.reportsTripsGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ReportTrips>>) => r.body as Array<ReportTrips>)
    );
  }

  /**
   * Path part for operation reportsStopsGet
   */
  static readonly ReportsStopsGetPath = '/reports/stops';

  /**
   * Fetch a list of ReportStops within the time period for the Devices or Groups.
   *
   * At least one _deviceId_ or one _groupId_ must be passed
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportsStopsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsStopsGet$Json$Response(params: {
    deviceId?: Array<number>;
    groupId?: Array<number>;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to: string;
  }): Observable<StrictHttpResponse<Array<ReportStops>>> {
    const rb = new RequestBuilder(this.rootUrl, ReportsService.ReportsStopsGetPath, 'get');
    if (params) {
      rb.query('deviceId', params.deviceId, { style: 'form', explode: true });
      rb.query('groupId', params.groupId, { style: 'form', explode: true });
      rb.query('from', params.from, {});
      rb.query('to', params.to, {});
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
          return r as StrictHttpResponse<Array<ReportStops>>;
        })
      );
  }

  /**
   * Fetch a list of ReportStops within the time period for the Devices or Groups.
   *
   * At least one _deviceId_ or one _groupId_ must be passed
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reportsStopsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsStopsGet$Json(params: {
    deviceId?: Array<number>;
    groupId?: Array<number>;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to: string;
  }): Observable<Array<ReportStops>> {
    return this.reportsStopsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ReportStops>>) => r.body as Array<ReportStops>)
    );
  }

  /**
   * Fetch a list of ReportStops within the time period for the Devices or Groups.
   *
   * At least one _deviceId_ or one _groupId_ must be passed
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportsStopsGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsStopsGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet$Response(params: {
    deviceId?: Array<number>;
    groupId?: Array<number>;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to: string;
  }): Observable<StrictHttpResponse<Array<ReportStops>>> {
    const rb = new RequestBuilder(this.rootUrl, ReportsService.ReportsStopsGetPath, 'get');
    if (params) {
      rb.query('deviceId', params.deviceId, { style: 'form', explode: true });
      rb.query('groupId', params.groupId, { style: 'form', explode: true });
      rb.query('from', params.from, {});
      rb.query('to', params.to, {});
    }

    return this.http
      .request(
        rb.build({
          responseType: 'blob',
          accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<Array<ReportStops>>;
        })
      );
  }

  /**
   * Fetch a list of ReportStops within the time period for the Devices or Groups.
   *
   * At least one _deviceId_ or one _groupId_ must be passed
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `reportsStopsGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportsStopsGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet(params: {
    deviceId?: Array<number>;
    groupId?: Array<number>;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to: string;
  }): Observable<Array<ReportStops>> {
    return this.reportsStopsGet$VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ReportStops>>) => r.body as Array<ReportStops>)
    );
  }
}
