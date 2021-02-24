                                             /* tslint:disable */
/* eslint-disable */
export interface Device {
  attributes?: {  };
  category?: string;
  contact?: string;
  disabled?: boolean;
  geofenceIds?: Array<number>;
  groupId?: number;
  id?: number;

  /**
   * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
   */
  lastUpdate?: string;
  model?: string;
  name?: string;
  phone?: string;
  positionId?: number;
  status?: string;
  uniqueId?: string;
}
