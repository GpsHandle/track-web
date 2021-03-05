import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { HomeComponent } from '@app/home/home.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { ManagementComponent } from '@app/management/management.component';



const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/management', pathMatch: 'full' },
    { path: 'management', component: ManagementComponent, data: { title: marker('Management') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})

export class ManagementRoutingModule { }
