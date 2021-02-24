/* tslint:disable */
/* eslint-disable */
export interface ReportStops {
  address?: string;
  deviceId?: number;
  deviceName?: string;
  duration?: number;

  /**
   * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
   */
  endTime?: string;
  engineHours?: number;
  lat?: number;
  lon?: number;

  /**
   * in liters
   */
  spentFuel?: number;

  /**
   * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
   */
  startTime?: string;
}
