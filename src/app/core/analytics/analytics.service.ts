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

    const ga4Id = environment.analytics.ga4Id;

    if (!ga4Id) {
      return;
    }

    this.loadGa4(ga4Id);

    this.initialized = true;
  }

  track(
    eventName: string,
    params: Record<string, unknown> = {}
  ): void {
    if (!environment.production || !window.gtag) {
      return;
    }

    window.gtag('event', eventName, params);
  }

  private loadGa4(ga4Id: string): void {
  const script = document.createElement('script');

  script.async = true;
  script.src =
    `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;

  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];

  window.gtag = function (...args: unknown[]): void {
    window.dataLayer.push(args);
  };

  window.gtag('js', new Date());

  window.gtag('config', ga4Id);
}

  private trackInitialPageView(ga4Id: string): void {
    this.sendPageView(ga4Id, this.router.url);
  }

  private trackRouterPageViews(ga4Id: string): void {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe((event) => {
        this.sendPageView(
          ga4Id,
          event.urlAfterRedirects
        );
      });
  }

  private sendPageView(
    ga4Id: string,
    path: string
  ): void {
    window.gtag('event', 'page_view', {
      send_to: ga4Id,
      page_path: path,
      page_location: window.location.href,
      page_title: document.title
    });
  }
}