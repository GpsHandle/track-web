import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { featureKey, reducer } from '@app/@stores/command-store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from '@app/@stores/command-store/effects';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([Effects])  ]
})
export class CommandStoreModule { }
