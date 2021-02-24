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

import { Statistics } from '../models/statistics';


/**
 * Retrieving server statistics
 */
@Injectable({
  providedIn: 'root',
})
export class StatisticsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation statisticsGet
   */
  static readonly StatisticsGetPath = '/statistics';

  /**
   * Fetch server Statistics.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `statisticsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  statisticsGet$Response(params: {

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to: string;
  }): Observable<StrictHttpResponse<Array<Statistics>>> {

    const rb = new RequestBuilder(this.rootUrl, StatisticsService.StatisticsGetPath, 'get');
    if (params) {
      rb.query('from', params.from, {});
      rb.query('to', params.to, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Statistics>>;
      })
    );
  }

  /**
   * Fetch server Statistics.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `statisticsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  statisticsGet(params: {

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    from: string;

    /**
     * in IS0 8601 format. eg. &#x60;1963-11-22T18:30:00Z&#x60;
     */
    to: string;
  }): Observable<Array<Statistics>> {

    return this.statisticsGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Statistics>>) => r.body as Array<Statistics>)
    );
  }

}
