import { AuthState } from './auth-store';
import { AttributeState } from './attribute-store';
import { CommandState } from './command-store';
import { CalendarState } from './calendar-store';
import { DeviceState } from './device-store';
import { DriverState } from './driver-store';
import { EventState } from './event-store';
import { GeofenceState } from './geofence-store';
import { GroupState } from './group-store';
import { MaintenanceState } from './maintenance-store';
import { NotificationState } from './notification-store';
import { PermissionState } from './permission-store';
import { PositionState } from './position-store';
import { ReportState } from './report-store';
import { ServerState } from './server-store';
import { SessionState } from './session-store';
import { StatisticState } from './statistic-store';
import { UserState } from './user-store';

export interface RootState {
  authenticate: AuthState.State;
  attribute: AttributeState.State;
  calendar: CalendarState.State;
  command: CommandState.State;
  device: DeviceState.State;
  driver: DriverState.State;
  event: EventState.State;
  geofence: GeofenceState.State;
  group: GroupState.State;
  maintenance: MaintenanceState.State;
  notification: NotificationState.State;
  permission: PermissionState.State;
  position: PositionState.State;
  report: ReportState.State;
  server: ServerState.State;
  session: SessionState.State;
  statistic: StatisticState.State;
  user: UserState.State;
}
