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

import { Position } from '../models/position';

/**
 * Retrieving raw location information
 */
@Injectable({
  providedIn: 'root',
})
export class PositionsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /**
   * Path part for operation positionsGet
   */
  static readonly PositionsGetPath = '/positions';

  /**
   * Fetches a list of Positions.
   *
   * We strongly recommend using [Traccar WebSocket API](https://www.traccar.org/traccar-api/) instead of periodically polling positions endpoint. Without any params, it returns a list of last known positions for all the user's Devices. _from_ and _to_ fields are not required with _id_.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `positionsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  positionsGet$Json$Response(params?: {
    /**
     * _deviceId_ is optional, but requires the _from_ and _to_ parameters when used
     */
    deviceId?: number;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from?: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to?: string;

    /**
     * To fetch one or more positions. Multiple params can be passed like &#x60;id&#x3D;31&amp;id&#x3D;42&#x60;
     */
    id?: number;

    /**/
    ids?: number[];
  }): Observable<StrictHttpResponse<Array<Position>>> {
    const rb = new RequestBuilder(this.rootUrl, PositionsService.PositionsGetPath, 'get');
    if (params) {
      rb.query('deviceId', params.deviceId, {});
      rb.query('from', params.from, {});
      rb.query('to', params.to, {});
      rb.query('id', params.id, {});

      const ids = params.ids;
      if (ids.length > 0) {
        for (let x = 0; x < ids.length; x++) {
          rb.query('id', ids[x], {});
        }
      }
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
   * Fetches a list of Positions.
   *
   * We strongly recommend using [Traccar WebSocket API](https://www.traccar.org/traccar-api/) instead of periodically polling positions endpoint. Without any params, it returns a list of last known positions for all the user's Devices. _from_ and _to_ fields are not required with _id_.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `positionsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  positionsGet$Json(params?: {
    /**
     * _deviceId_ is optional, but requires the _from_ and _to_ parameters when used
     */
    deviceId?: number;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from?: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to?: string;

    /**
     * To fetch one or more positions. Multiple params can be passed like &#x60;id&#x3D;31&amp;id&#x3D;42&#x60;
     */
    id?: number;

    ids?: number[];
  }): Observable<Array<Position>> {
    return this.positionsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Position>>) => r.body as Array<Position>)
    );
  }

  /**
   * Fetches a list of Positions.
   *
   * We strongly recommend using [Traccar WebSocket API](https://www.traccar.org/traccar-api/) instead of periodically polling positions endpoint. Without any params, it returns a list of last known positions for all the user's Devices. _from_ and _to_ fields are not required with _id_.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `positionsGet$Csv()` instead.
   *
   * This method doesn't expect any request body.
   */
  positionsGet$Csv$Response(params?: {
    /**
     * _deviceId_ is optional, but requires the _from_ and _to_ parameters when used
     */
    deviceId?: number;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from?: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to?: string;

    /**
     * To fetch one or more positions. Multiple params can be passed like &#x60;id&#x3D;31&amp;id&#x3D;42&#x60;
     */
    id?: number;

    ids?: number[];
  }): Observable<StrictHttpResponse<Array<Position>>> {
    const rb = new RequestBuilder(this.rootUrl, PositionsService.PositionsGetPath, 'get');
    if (params) {
      rb.query('deviceId', params.deviceId, {});
      rb.query('from', params.from, {});
      rb.query('to', params.to, {});
      rb.query('id', params.id, {});

      const ids = params.ids;
      if (ids.length > 0) {
        for (let x = 0; x < ids.length; x++) {
          rb.query('id', ids[x], {});
        }
      }
    }

    return this.http
      .request(
        rb.build({
          responseType: 'text',
          accept: 'text/csv',
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
   * Fetches a list of Positions.
   *
   * We strongly recommend using [Traccar WebSocket API](https://www.traccar.org/traccar-api/) instead of periodically polling positions endpoint. Without any params, it returns a list of last known positions for all the user's Devices. _from_ and _to_ fields are not required with _id_.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `positionsGet$Csv$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  positionsGet$Csv(params?: {
    /**
     * _deviceId_ is optional, but requires the _from_ and _to_ parameters when used
     */
    deviceId?: number;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from?: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to?: string;

    /**
     * To fetch one or more positions. Multiple params can be passed like &#x60;id&#x3D;31&amp;id&#x3D;42&#x60;
     */
    id?: number;

    ids?: number[];
  }): Observable<Array<Position>> {
    return this.positionsGet$Csv$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Position>>) => r.body as Array<Position>)
    );
  }

  /**
   * Fetches a list of Positions.
   *
   * We strongly recommend using [Traccar WebSocket API](https://www.traccar.org/traccar-api/) instead of periodically polling positions endpoint. Without any params, it returns a list of last known positions for all the user's Devices. _from_ and _to_ fields are not required with _id_.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `positionsGet$Xml()` instead.
   *
   * This method doesn't expect any request body.
   */
  positionsGet$Xml$Response(params?: {
    /**
     * _deviceId_ is optional, but requires the _from_ and _to_ parameters when used
     */
    deviceId?: number;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from?: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to?: string;

    /**
     * To fetch one or more positions. Multiple params can be passed like &#x60;id&#x3D;31&amp;id&#x3D;42&#x60;
     */
    id?: number;

    /**/
    ids?: number[];
  }): Observable<StrictHttpResponse<Array<Position>>> {
    const rb = new RequestBuilder(this.rootUrl, PositionsService.PositionsGetPath, 'get');
    if (params) {
      rb.query('deviceId', params.deviceId, {});
      rb.query('from', params.from, {});
      rb.query('to', params.to, {});
      rb.query('id', params.id, {});
      const ids = params.ids;
      if (ids.length > 0) {
        for (let x = 0; x < ids.length; x++) {
          rb.query('id', ids[x], {});
        }
      }
    }

    return this.http
      .request(
        rb.build({
          responseType: 'blob',
          accept: 'application/gpx+xml',
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
   * Fetches a list of Positions.
   *
   * We strongly recommend using [Traccar WebSocket API](https://www.traccar.org/traccar-api/) instead of periodically polling positions endpoint. Without any params, it returns a list of last known positions for all the user's Devices. _from_ and _to_ fields are not required with _id_.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `positionsGet$Xml$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  positionsGet$Xml(params?: {
    /**
     * _deviceId_ is optional, but requires the _from_ and _to_ parameters when used
     */
    deviceId?: number;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from?: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to?: string;

    /**
     * To fetch one or more positions. Multiple params can be passed like &#x60;id&#x3D;31&amp;id&#x3D;42&#x60;
     */
    id?: number;

    /**/
    ids?: number[];
  }): Observable<Array<Position>> {
    return this.positionsGet$Xml$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Position>>) => r.body as Array<Position>)
    );
  }
}
