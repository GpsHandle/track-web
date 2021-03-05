import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementRoutingModule } from '@app/management/management-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ManagementComponent } from './management.component';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { AuthModule } from '@app/auth';
import { I18nModule } from '@app/i18n';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ManagementComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    AuthModule,
    I18nModule,
    RouterModule,
    SharedModule,
    ManagementRoutingModule,
  ],
})
export class ManagementModule {}
