import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeLiveMobileRoutingModule } from './home-live-mobile-routing.module';
import { HomeLiveMobileComponent } from './home-live-mobile.component';


@NgModule({
  declarations: [HomeLiveMobileComponent],
  imports: [
    CommonModule,
    HomeLiveMobileRoutingModule
  ]
})
export class HomeLiveMobileModule { }
