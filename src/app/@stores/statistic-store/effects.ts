import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadServerStatisticsRequestAction,
  loadServerStatisticsSuccessAction
} from '@app/@stores/statistic-store/actions';
import { map, switchMap } from 'rxjs/operators';
import { StatisticsService } from '@app/@api/services/statistics.service';
import moment from 'moment';

@Injectable()
export class Effects {

  loadServerStatistics$ = createEffect(() => this.action$.pipe(
    ofType(loadServerStatisticsRequestAction),
    switchMap((action) => {
      const _to = moment().endOf('day').toISOString();
      const _from =  moment().startOf('day').toISOString();
      return this.statisticsService.statisticsGet({from: _from, to: _to});
    }),
    map(data => loadServerStatisticsSuccessAction({item: data[0]}))
  ));

  constructor(private statisticsService: StatisticsService, private action$: Actions) {}
}
