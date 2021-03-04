import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from '@app/@stores/permission-store/effects';
import { featureKey, reducer } from '@app/@stores/permission-store/reducer';

@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature(featureKey, reducer), EffectsModule.forFeature([Effects])],
})
export class PermissionStoreModule {}
