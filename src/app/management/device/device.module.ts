import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DeviceComponent } from './device.component';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@app/material.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [DeviceComponent],
  imports: [CommonModule, DeviceRoutingModule, MaterialModule, TranslateModule],
})
export class DeviceModule {}
