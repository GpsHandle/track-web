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

import { Device } from '../models/device';
import { DeviceAccumulators } from '../models/device-accumulators';
import moment from 'moment';

/**
 * Device management
 */
@Injectable({
  providedIn: 'root',
})
export class DevicesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /**
   * Path part for operation devicesGet
   */
  static readonly DevicesGetPath = '/devices';

  /**
   * Fetch a list of Devices.
   *
   * Without any params, returns a list of the user's devices
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `devicesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  devicesGet$Response(params?: {
    /**
     * Can only be used by admins or managers to fetch all entities
     */
    all?: boolean;

    /**
     * Standard users can use this only with their own _userId_
     */
    userId?: number;

    /**
     * To fetch one or more devices. Multiple params can be passed like &#x60;id&#x3D;31&amp;id&#x3D;42&#x60;
     */
    id?: number;

    /**
     * To fetch one or more devices. Multiple params can be passed like &#x60;uniqueId&#x3D;333331&amp;uniqieId&#x3D;44442&#x60;
     */
    uniqueId?: string;
  }): Observable<StrictHttpResponse<Array<Device>>> {
    const rb = new RequestBuilder(this.rootUrl, DevicesService.DevicesGetPath, 'get');
    if (params) {
      rb.query('all', params.all, {});
      rb.query('userId', params.userId, {});
      rb.query('id', params.id, {});
      rb.query('uniqueId', params.uniqueId, {});
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
        // map((r: HttpResponse<any>) => this.convertDateArrayFromServer(r as StrictHttpResponse<Array<Device>>))
        map((r: HttpResponse<any>) => r as StrictHttpResponse<Array<Device>>)
      );
  }

  /**
   * Fetch a list of Devices.
   *
   * Without any params, returns a list of the user's devices
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `devicesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  devicesGet(params?: {
    /**
     * Can only be used by admins or managers to fetch all entities
     */
    all?: boolean;

    /**
     * Standard users can use this only with their own _userId_
     */
    userId?: number;

    /**
     * To fetch one or more devices. Multiple params can be passed like &#x60;id&#x3D;31&amp;id&#x3D;42&#x60;
     */
    id?: number;

    /**
     * To fetch one or more devices. Multiple params can be passed like &#x60;uniqueId&#x3D;333331&amp;uniqieId&#x3D;44442&#x60;
     */
    uniqueId?: string;
  }): Observable<Array<Device>> {
    return this.devicesGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Device>>) => r.body as Array<Device>)
    );
  }

  /**
   * Path part for operation devicesPost
   */
  static readonly DevicesPostPath = '/devices';

  /**
   * Create a Device.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `devicesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  devicesPost$Response(params: { body: Device }): Observable<StrictHttpResponse<Device>> {
    const rb = new RequestBuilder(this.rootUrl, DevicesService.DevicesPostPath, 'post');
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
          return r as StrictHttpResponse<Device>;
        })
      );
  }

  /**
   * Create a Device.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `devicesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  devicesPost(params: { body: Device }): Observable<Device> {
    return this.devicesPost$Response(params).pipe(map((r: StrictHttpResponse<Device>) => r.body as Device));
  }

  /**
   * Path part for operation devicesIdPut
   */
  static readonly DevicesIdPutPath = '/devices/{id}';

  /**
   * Update a Device.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `devicesIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  devicesIdPut$Response(params: { id: number; body: Device }): Observable<StrictHttpResponse<Device>> {
    const rb = new RequestBuilder(this.rootUrl, DevicesService.DevicesIdPutPath, 'put');
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
          return r as StrictHttpResponse<Device>;
        })
      );
  }

  /**
   * Update a Device.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `devicesIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  devicesIdPut(params: { id: number; body: Device }): Observable<Device> {
    return this.devicesIdPut$Response(params).pipe(map((r: StrictHttpResponse<Device>) => r.body as Device));
  }

  /**
   * Path part for operation devicesIdDelete
   */
  static readonly DevicesIdDeletePath = '/devices/{id}';

  /**
   * Delete a Device.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `devicesIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  devicesIdDelete$Response(params: { id: number }): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, DevicesService.DevicesIdDeletePath, 'delete');
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
   * Delete a Device.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `devicesIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  devicesIdDelete(params: { id: number }): Observable<void> {
    return this.devicesIdDelete$Response(params).pipe(map((r: StrictHttpResponse<void>) => r.body as void));
  }

  /**
   * Path part for operation devicesIdAccumulatorsPut
   */
  static readonly DevicesIdAccumulatorsPutPath = '/devices/{id}/accumulators';

  /**
   * Update total distance and hours of the Device.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `devicesIdAccumulatorsPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  devicesIdAccumulatorsPut$Response(params: {
    id: number;
    body: DeviceAccumulators;
  }): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, DevicesService.DevicesIdAccumulatorsPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
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
   * Update total distance and hours of the Device.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `devicesIdAccumulatorsPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  devicesIdAccumulatorsPut(params: { id: number; body: DeviceAccumulators }): Observable<void> {
    return this.devicesIdAccumulatorsPut$Response(params).pipe(map((r: StrictHttpResponse<void>) => r.body as void));
  }

  // private convertDateArrayFromServer(response: StrictHttpResponse<Array<Device>>) {
  //   if (response.body) {
  //     response.body.forEach((dev: Device) => {
  //       dev.lastUpdate = dev.lastUpdate ? moment(dev.lastUpdate) : undefined;
  //     })
  //   }
  //   return response;
  // }
}
