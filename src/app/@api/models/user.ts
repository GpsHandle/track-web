/* tslint:disable */
/* eslint-disable */
export interface User {
  administrator?: boolean;
  attributes?: {};
  coordinateFormat?: string;
  deviceLimit?: number;
  deviceReadonly?: boolean;
  disabled?: boolean;
  email?: string;

  /**
   * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
   */
  expirationTime?: string;
  id?: number;
  latitude?: number;
  limitCommands?: boolean;
  longitude?: number;
  map?: string;
  name?: string;
  password?: string;
  phone?: string;
  poiLayer?: string;
  readonly?: boolean;
  token?: string;
  twelveHourFormat?: boolean;
  userLimit?: number;
  zoom?: number;
}
