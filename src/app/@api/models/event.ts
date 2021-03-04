/* tslint:disable */
/* eslint-disable */
export interface Event {
  attributes?: {};
  deviceId?: number;
  geofenceId?: number;
  id?: number;
  maintenanceId?: number;
  positionId?: number;

  /**
   * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
   */
  serverTime?: string;
  type?: string;
}
