import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { ManagementComponent } from '@app/management/management.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { ReportComponent } from '@app/report/report.component';


const routes: Routes = [
  Shell.childRoutes([
    { path: 'report', component: ReportComponent,
      children: [
        { path: 'route', loadChildren: () => import('./route/route.module').then(m => m.RouteModule) },
        { path: 'stops', loadChildren: () => import('./stops/stops.module').then(m => m.StopsModule) },
        { path: 'summary', loadChildren: () => import('./summary/summary.module').then(m => m.SummaryModule) },
        { path: 'trips', loadChildren: () => import('./trips/trips.module').then(m => m.TripsModule) },
      ]
    }
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ReportRoutingModule { }
