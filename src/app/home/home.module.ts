import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    HomeRoutingModule,
    // NgxMapboxGLModule.withConfig({
      // pk.eyJ1IjoidnViYWtuaW5oIiwiYSI6ImNrbWdtdnJweDMxbjYyd2xhM2ZjMGxvZ3gifQ.wsLjSOdPVVa1LnA_GRfbVw
      // pk.eyJ1IjoidnViYWtuaW5oIiwiYSI6ImNrbWdtZzV0aDBuMTQycHBram55dzRpaDkifQ.K3a592tY4scj0j_wziPHeA
      // tslint:disable-next-line:max-line-length
      // accessToken: 'pk.eyJ1IjoidnViYWtuaW5oIiwiYSI6ImNrbWdtZzV0aDBuMTQycHBram55dzRpaDkifQ.K3a592tY4scj0j_wziPHeA', // Optional, can also be set per map (accessToken input of mgl-map)
      // tslint:disable-next-line:max-line-length
      // geocoderAccessToken: 'TOKEN' // Optional, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
    // }),
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
