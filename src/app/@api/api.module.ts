/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { CommandsService } from './services/commands.service';
import { DevicesService } from './services/devices.service';
import { GroupsService } from './services/groups.service';
import { PermissionsService } from './services/permissions.service';
import { PositionsService } from './services/positions.service';
import { ServerService } from './services/server.service';
import { SessionService } from './services/session.service';
import { UsersService } from './services/users.service';
import { NotificationsService } from './services/notifications.service';
import { GeofencesService } from './services/geofences.service';
import { EventsService } from './services/events.service';
import { ReportsService } from './services/reports.service';
import { StatisticsService } from './services/statistics.service';
import { CalendarsService } from './services/calendars.service';
import { AttributesService } from './services/attributes.service';
import { DriversService } from './services/drivers.service';
import { MaintenanceService } from './services/maintenance.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    CommandsService,
    DevicesService,
    GroupsService,
    PermissionsService,
    PositionsService,
    ServerService,
    SessionService,
    UsersService,
    NotificationsService,
    GeofencesService,
    EventsService,
    ReportsService,
    StatisticsService,
    CalendarsService,
    AttributesService,
    DriversService,
    MaintenanceService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
