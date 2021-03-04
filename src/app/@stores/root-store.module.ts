import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthStoreModule } from './auth-store/auth-store.module';
import { PositionStoreModule } from './position-store/position-store.module';
import { DeviceStoreModule } from './device-store/device-store.module';
import { GroupStoreModule } from './group-store/group-store.module';
import { AttributeStoreModule } from './attribute-store/attribute-store.module';
import { CalendarStoreModule } from './calendar-store/calendar-store.module';
import { CommandStoreModule } from './command-store/command-store.module';
import { DriverStoreModule } from './driver-store/driver-store.module';
import { EventStoreModule } from './event-store/event-store.module';
import { GeofenceStoreModule } from './geofence-store/geofence-store.module';
import { MaintenanceStoreModule } from './maintenance-store/maintenance-store.module';
import { NotificationStoreModule } from './notification-store/notification-store.module';
import { PermissionStoreModule } from './permission-store/permission-store.module';
import { ReportStoreModule } from './report-store/report-store.module';
import { ServerStoreModule } from './server-store/server-store.module';
import { SessionStoreModule } from './session-store/session-store.module';
import { StatisticStoreModule } from './statistic-store/statistic-store.module';
import { UserStoreModule } from './user-store/user-store.module';
import { StoreModule } from '@ngrx/store';
import { metaReducers } from '@app/@stores/reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    AuthStoreModule,
    PositionStoreModule,
    DeviceStoreModule,
    GroupStoreModule,
    AttributeStoreModule,
    CalendarStoreModule,
    CommandStoreModule,
    DriverStoreModule,
    EventStoreModule,
    GeofenceStoreModule,
    MaintenanceStoreModule,
    NotificationStoreModule,
    PermissionStoreModule,
    ReportStoreModule,
    ServerStoreModule,
    SessionStoreModule,
    StatisticStoreModule,
    UserStoreModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
  ],
})
export class RootStoreModule {}
