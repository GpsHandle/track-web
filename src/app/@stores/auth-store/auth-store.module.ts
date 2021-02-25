import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authFeatureKey, reducer } from '@app/@stores/auth-store/reducer';
import { Effects } from '@app/@stores/auth-store/effects';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(authFeatureKey, reducer),
    EffectsModule.forFeature([Effects])

  ]
})
export class AuthStoreModule { }
