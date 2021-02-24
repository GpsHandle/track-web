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

import { Server } from '../models/server';


/**
 * Server information
 */
@Injectable({
  providedIn: 'root',
})
export class ServerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation serverGet
   */
  static readonly ServerGetPath = '/server';

  /**
   * Fetch Server information.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serverGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serverGet$Response(params?: {
  }): Observable<StrictHttpResponse<Server>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ServerGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Server>;
      })
    );
  }

  /**
   * Fetch Server information.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `serverGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serverGet(params?: {
  }): Observable<Server> {

    return this.serverGet$Response(params).pipe(
      map((r: StrictHttpResponse<Server>) => r.body as Server)
    );
  }

  /**
   * Path part for operation serverPut
   */
  static readonly ServerPutPath = '/server';

  /**
   * Update Server information.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serverPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serverPut$Response(params: {
    body: Server
  }): Observable<StrictHttpResponse<Server>> {

    const rb = new RequestBuilder(this.rootUrl, ServerService.ServerPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Server>;
      })
    );
  }

  /**
   * Update Server information.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `serverPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serverPut(params: {
    body: Server
  }): Observable<Server> {

    return this.serverPut$Response(params).pipe(
      map((r: StrictHttpResponse<Server>) => r.body as Server)
    );
  }

}
