/* tslint:disable */
/* eslint-disable */
export interface ReportSummary {

  /**
   * in knots
   */
  averageSpeed?: number;
  deviceId?: number;
  deviceName?: string;

  /**
   * in meters
   */
  distance?: number;
  engineHours?: number;

  /**
   * in knots
   */
  maxSpeed?: number;

  /**
   * in liters
   */
  spentFuel?: number;
}
