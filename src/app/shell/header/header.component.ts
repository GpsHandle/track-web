import { Title } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import { RootFacade } from '@app/@stores/root.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() sidenav!: MatSidenav;

  user$ = this.facade.authState$;

  constructor(private router: Router, private titleService: Title, private facade: RootFacade) {}

  ngOnInit() {}

  logout() {
    this.facade.logout();
  }

  get title(): string {
    return this.titleService.getTitle();
  }
}
