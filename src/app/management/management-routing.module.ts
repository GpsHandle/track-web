import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { HomeComponent } from '@app/home/home.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { ManagementComponent } from '@app/management/management.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'management',
      component: ManagementComponent,
      data: {
        title: marker('Management'),
      },
      children: [
        { path: 'user', loadChildren: () => import('./user/user.module').then((m) => m.UserModule) },
        { path: 'device', loadChildren: () => import('./device/device.module').then((m) => m.DeviceModule) },
        { path: 'driver', loadChildren: () => import('./driver/driver.module').then((m) => m.DriverModule) },
        { path: 'group', loadChildren: () => import('./group/group.module').then((m) => m.GroupModule) },
        { path: 'geofence', loadChildren: () => import('./geofence/geofence.module').then((m) => m.GeofenceModule) },
      ],
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ManagementRoutingModule {}
