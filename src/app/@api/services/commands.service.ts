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

import { Command } from '../models/command';
import { CommandType } from '../models/command-type';

/**
 * Sending commands to devices and stored command management
 */
@Injectable({
  providedIn: 'root',
})
export class CommandsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /**
   * Path part for operation commandsGet
   */
  static readonly CommandsGetPath = '/commands';

  /**
   * Fetch a list of Saved Commands.
   *
   * Without params, it returns a list of Saved Commands the user has access to
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `commandsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  commandsGet$Response(params?: {
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
  }): Observable<StrictHttpResponse<Array<Command>>> {
    const rb = new RequestBuilder(this.rootUrl, CommandsService.CommandsGetPath, 'get');
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
          return r as StrictHttpResponse<Array<Command>>;
        })
      );
  }

  /**
   * Fetch a list of Saved Commands.
   *
   * Without params, it returns a list of Saved Commands the user has access to
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `commandsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  commandsGet(params?: {
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
  }): Observable<Array<Command>> {
    return this.commandsGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Command>>) => r.body as Array<Command>)
    );
  }

  /**
   * Path part for operation commandsPost
   */
  static readonly CommandsPostPath = '/commands';

  /**
   * Create a Saved Command.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `commandsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  commandsPost$Response(params: { body: Command }): Observable<StrictHttpResponse<Command>> {
    const rb = new RequestBuilder(this.rootUrl, CommandsService.CommandsPostPath, 'post');
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
          return r as StrictHttpResponse<Command>;
        })
      );
  }

  /**
   * Create a Saved Command.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `commandsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  commandsPost(params: { body: Command }): Observable<Command> {
    return this.commandsPost$Response(params).pipe(map((r: StrictHttpResponse<Command>) => r.body as Command));
  }

  /**
   * Path part for operation commandsIdPut
   */
  static readonly CommandsIdPutPath = '/commands/{id}';

  /**
   * Update a Saved Command.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `commandsIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  commandsIdPut$Response(params: { id: number; body: Command }): Observable<StrictHttpResponse<Command>> {
    const rb = new RequestBuilder(this.rootUrl, CommandsService.CommandsIdPutPath, 'put');
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
          return r as StrictHttpResponse<Command>;
        })
      );
  }

  /**
   * Update a Saved Command.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `commandsIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  commandsIdPut(params: { id: number; body: Command }): Observable<Command> {
    return this.commandsIdPut$Response(params).pipe(map((r: StrictHttpResponse<Command>) => r.body as Command));
  }

  /**
   * Path part for operation commandsIdDelete
   */
  static readonly CommandsIdDeletePath = '/commands/{id}';

  /**
   * Delete a Saved Command.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `commandsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  commandsIdDelete$Response(params: { id: number }): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CommandsService.CommandsIdDeletePath, 'delete');
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
   * Delete a Saved Command.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `commandsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  commandsIdDelete(params: { id: number }): Observable<void> {
    return this.commandsIdDelete$Response(params).pipe(map((r: StrictHttpResponse<void>) => r.body as void));
  }

  /**
   * Path part for operation commandsSendGet
   */
  static readonly CommandsSendGetPath = '/commands/send';

  /**
   * Fetch a list of Saved Commands supported by Device at the moment.
   *
   * Return a list of saved commands linked to Device and its groups, filtered by current Device protocol support
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `commandsSendGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  commandsSendGet$Response(params?: {
    /**
     * Standard users can use this only with _deviceId_s, they have access to
     */
    deviceId?: number;
  }): Observable<StrictHttpResponse<Array<Command>>> {
    const rb = new RequestBuilder(this.rootUrl, CommandsService.CommandsSendGetPath, 'get');
    if (params) {
      rb.query('deviceId', params.deviceId, {});
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
          return r as StrictHttpResponse<Array<Command>>;
        })
      );
  }

  /**
   * Fetch a list of Saved Commands supported by Device at the moment.
   *
   * Return a list of saved commands linked to Device and its groups, filtered by current Device protocol support
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `commandsSendGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  commandsSendGet(params?: {
    /**
     * Standard users can use this only with _deviceId_s, they have access to
     */
    deviceId?: number;
  }): Observable<Array<Command>> {
    return this.commandsSendGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Command>>) => r.body as Array<Command>)
    );
  }

  /**
   * Path part for operation commandsSendPost
   */
  static readonly CommandsSendPostPath = '/commands/send';

  /**
   * Dispatch commands to device.
   *
   * Dispatch a new command or Saved Command if _body.id_ set
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `commandsSendPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  commandsSendPost$Response(params: { body: Command }): Observable<StrictHttpResponse<Command>> {
    const rb = new RequestBuilder(this.rootUrl, CommandsService.CommandsSendPostPath, 'post');
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
          return r as StrictHttpResponse<Command>;
        })
      );
  }

  /**
   * Dispatch commands to device.
   *
   * Dispatch a new command or Saved Command if _body.id_ set
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `commandsSendPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  commandsSendPost(params: { body: Command }): Observable<Command> {
    return this.commandsSendPost$Response(params).pipe(map((r: StrictHttpResponse<Command>) => r.body as Command));
  }

  /**
   * Path part for operation commandsTypesGet
   */
  static readonly CommandsTypesGetPath = '/commands/types';

  /**
   * Fetch a list of available Commands for the Device or all possible Commands if Device ommited.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `commandsTypesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  commandsTypesGet$Response(params?: {
    /**
     * Internal device identifier. Only works if device has already reported some locations
     */
    deviceId?: number;

    /**
     * Protocol name. Can be used instead of device id
     */
    protocol?: string;

    /**
     * When &#x60;true&#x60; return SMS commands. If not specified or &#x60;false&#x60; return data commands
     */
    textChannel?: boolean;
  }): Observable<StrictHttpResponse<Array<CommandType>>> {
    const rb = new RequestBuilder(this.rootUrl, CommandsService.CommandsTypesGetPath, 'get');
    if (params) {
      rb.query('deviceId', params.deviceId, {});
      rb.query('protocol', params.protocol, {});
      rb.query('textChannel', params.textChannel, {});
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
          return r as StrictHttpResponse<Array<CommandType>>;
        })
      );
  }

  /**
   * Fetch a list of available Commands for the Device or all possible Commands if Device ommited.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `commandsTypesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  commandsTypesGet(params?: {
    /**
     * Internal device identifier. Only works if device has already reported some locations
     */
    deviceId?: number;

    /**
     * Protocol name. Can be used instead of device id
     */
    protocol?: string;

    /**
     * When &#x60;true&#x60; return SMS commands. If not specified or &#x60;false&#x60; return data commands
     */
    textChannel?: boolean;
  }): Observable<Array<CommandType>> {
    return this.commandsTypesGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CommandType>>) => r.body as Array<CommandType>)
    );
  }
}
