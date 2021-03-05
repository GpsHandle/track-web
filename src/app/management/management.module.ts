import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementRoutingModule } from '@app/management/management-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ManagementComponent } from './management.component';



@NgModule({
  declarations: [ManagementComponent],
  imports: [
    CommonModule,
    SharedModule,
    ManagementRoutingModule
  ]
})
export class ManagementModule { }
