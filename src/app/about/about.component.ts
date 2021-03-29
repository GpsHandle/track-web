import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { RootFacade } from '@app/@stores/root.facade';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  version: string | null = environment.version;
  statistics$ = this.facade.serverStatistics$;

  constructor(private facade: RootFacade) {}

  ngOnInit() {
    this.facade.loadServerStatistics();
  }
}
