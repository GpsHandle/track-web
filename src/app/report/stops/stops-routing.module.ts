import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StopsComponent } from './stops.component';

const routes: Routes = [{ path: '', component: StopsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StopsRoutingModule { }
