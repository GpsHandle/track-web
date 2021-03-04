/* tslint:disable */
/* eslint-disable */
export interface Position {
  accuracy?: number;
  address?: string;
  altitude?: number;
  attributes?: {};
  course?: number;
  deviceId?: number;

  /**
   * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
   */
  deviceTime?: string;

  /**
   * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
   */
  fixTime?: string;
  id?: number;
  latitude?: number;
  longitude?: number;
  network?: {};
  outdated?: boolean;
  protocol?: string;

  /**
   * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
   */
  serverTime?: string;

  /**
   * in knots
   */
  speed?: number;
  valid?: boolean;
}
