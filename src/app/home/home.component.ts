import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { RootFacade } from '@app/@stores/root.facade';
import { UntilDestroy } from '@ngneat/until-destroy';
import { MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  deviceList$ = this.facade.deviceList$;
  pitch = 50;
  bearing = -97;

  constructor(private facade: RootFacade, private media: MediaObserver, private router: Router) {}

  ngOnInit() {
    this.media
      .asObservable().subscribe(() => {
      if (this.isMobile) {
        this.router.navigate(['/m-live']);
      }
    });

    this.facade.loadAllDevice();

    this.isLoading = true;
    // let angle = 0;
    // setInterval(() => {
    //   angle += 0.01;
    //   if (angle === 1) {
    //     angle = 0;
    //   }
    //   this.pitch = 45 + 15 * Math.cos(angle);
    //   this.bearing = -103 + 20 * Math.sin(angle);
    // }, 20);
  }

  loaded($event: mapboxgl.Map) {}

  mouseOver($event: mapboxgl.MapMouseEvent & mapboxgl.EventData) {}

  zoomCheck($event: mapboxgl.MapboxEvent<MouseEvent | TouchEvent | WheelEvent | undefined> & mapboxgl.EventData) {}

  alert(foo: string) {}
  get isMobile(): boolean {
    return this.media.isActive('xs') || this.media.isActive('sm');
  }

}
