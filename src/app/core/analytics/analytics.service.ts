import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { environment } from '../../../environments/environment';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private initialized = false;

  constructor(private router: Router) {}

  initialize(): void {
    if (!environment.production || this.initialized) {
      return;
    }

    this.loadGa4();
    this.trackPageViews();

    this.initialized = true;
  }

  track(eventName: string, params: Record<string, unknown> = {}): void {
    if (!environment.production || !window.gtag) {
      return;
    }

    window.gtag('event', eventName, params);
  }

  private loadGa4(): void {
    const ga4Id = environment.analytics.ga4Id;

    if (!ga4Id) {
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];

    window.gtag = function (...args: unknown[]): void {
      window.dataLayer.push(args);
    };

    window.gtag('js', new Date());
    window.gtag('config', ga4Id, {
      send_page_view: false
    });
  }

  private trackPageViews(): void {
    const ga4Id = environment.analytics.ga4Id;

    if (!ga4Id) {
      return;
    }

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        window.gtag('config', ga4Id, {
          page_path: event.urlAfterRedirects,
          page_location: window.location.href,
          page_title: document.title
        });
      });
  }
}