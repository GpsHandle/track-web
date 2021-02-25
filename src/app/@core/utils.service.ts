import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  isPlatformBrowser(): boolean {
    return this.isBrowser;
  }

  btoa(v: string): string {
    return this.isBrowser ? btoa(v) : v;
  }
}
