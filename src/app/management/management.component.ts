import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { filter } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@core/index';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  constructor(private media: MediaObserver, private router: Router) { }

  ngOnInit(): void {
    // Automatically close side menu on screens > sm breakpoint
    this.media
      .asObservable()
      .pipe(
        filter((changes: MediaChange[]) =>
          changes.some((change) => change.mqAlias !== 'xs' && change.mqAlias !== 'sm')
        ),
        untilDestroyed(this)
      )
      .subscribe(() => {
        if (this.isMobile) {
          this.router.navigate(['/'])
        }
      });
  }


  get isMobile(): boolean {
    return this.media.isActive('xs') || this.media.isActive('sm');
  }

}
