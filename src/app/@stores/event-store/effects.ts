import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { EventsService } from '@app/@api/services/events.service';

@Injectable()
export class Effects {
  constructor(private action$: Actions, private eventService: EventsService) {
    this.eventService.eventsIdGet({ id: 1 });
  }
}
