import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeLiveMobileComponent } from './home-live-mobile.component';

const routes: Routes = [{ path: '', component: HomeLiveMobileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeLiveMobileRoutingModule {}
