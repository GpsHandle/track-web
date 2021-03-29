/* tslint:disable */
/* eslint-disable */
import { Position } from '@app/@api/models';
import { Moment } from 'moment';

export interface Device {
  attributes?: {};
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
  status?: string;
  uniqueId?: string;
  positionId?: number;
  position?: Position;
}
