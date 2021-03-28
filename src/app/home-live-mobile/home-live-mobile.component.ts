import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-live-mobile',
  templateUrl: './home-live-mobile.component.html',
  styleUrls: ['./home-live-mobile.component.scss']
})
export class HomeLiveMobileComponent implements OnInit {

  constructor(private media: MediaObserver, private router: Router) { }

  ngOnInit(): void {
    this.media
      .asObservable().subscribe(() => {
      if (!this.isMobile) {
        this.router.navigate(['/home']);
      }
    });

  }
  get isMobile(): boolean {
    return this.media.isActive('xs') || this.media.isActive('sm');
  }

}
