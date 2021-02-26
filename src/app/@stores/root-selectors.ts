import { createSelector } from '@ngrx/store';
import { AttributeSelectors } from './attribute-store';
import { CalendarSelectors } from './calendar-store';
import { CommandSelectors } from './command-store';
import { DeviceSelectors } from './device-store';
import { DriverSelectors } from './driver-store';
import { EventSelectors } from './event-store';
import { GeofenceSelectors } from './geofence-store';
import { GroupSelectors } from './group-store';
import { MaintenanceSelectors } from './maintenance-store';
import { NotificationSelectors } from './notification-store';
import { PermissionSelectors } from './permission-store';
import { PositionSelectors } from './position-store';
import { ReportSelectors } from './report-store';
import { ServerSelectors } from './server-store';
import { SessionSelectors } from './session-store';
import { StatisticSelectors } from './statistic-store';
import { UserSelectors } from './user-store';

export const selectError = createSelector (
  AttributeSelectors.selectError,
  CalendarSelectors.selectError,
  CommandSelectors.selectError,
  DeviceSelectors.selectError,
  DriverSelectors.selectError,
  EventSelectors.selectError,
  GeofenceSelectors.selectError,
  GroupSelectors.selectError,
  // MaintenanceSelectors.selectError,
  // NotificationSelectors.selectError,
  // PermissionSelectors.selectError,
  // PositionSelectors.selectError,
  // ReportSelectors.selectError,
  // ServerSelectors.selectError,
  // SessionSelectors.selectError,
  // StatisticSelectors.selectError,
  // UserSelectors.selectError,

  (attributeError: string,
   calendarError: string,
   commandError: string,
   deviceError: string,
   driverError: string,
   eventError: string,
   geofenceError: string,
   /*groupError: string,
   maintenanceError: string,
   notificationError: string,
   permissionError: string,
   positionError: string,
   reportError: string,
   serverError: string,
   sessionError: string,
   statisticError: string,
   userError: string*/) => {
    return attributeError
  }
);

export const selectLoading = createSelector(
  AttributeSelectors.selectLoading,
  (attributeLoading: boolean) => {
    return attributeLoading
  }
);
