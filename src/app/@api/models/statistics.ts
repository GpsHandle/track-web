/* tslint:disable */
/* eslint-disable */
export interface Statistics {
  activeDevices?: number;
  activeUsers?: number;

  /**
   * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
   */
  captureTime?: string;
  messagesReceived?: number;
  messagesStored?: number;
  requests?: number;
  mailSent?: number;
  smsSent?: number;
}
