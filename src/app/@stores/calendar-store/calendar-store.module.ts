import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { featureKey, reducer } from '@app/@stores/calendar-store/reducer';
import { Effects } from '@app/@stores/calendar-store/effects';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([Effects])

  ]
})
export class CalendarStoreModule { }
