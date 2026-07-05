import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private title = inject(Title);
  private meta = inject(Meta);

  update(config: {
    title: string;
    description: string;
    image?: string;
    url?: string;
  }) {

    this.title.setTitle(config.title);

    this.meta.updateTag({
      name: 'description',
      content: config.description
    });

    this.meta.updateTag({
      property: 'og:title',
      content: config.title
    });

    this.meta.updateTag({
      property: 'og:description',
      content: config.description
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });

    if (config.url) {
      this.meta.updateTag({
        property: 'og:url',
        content: config.url
      });
    }

    if (config.image) {
      this.meta.updateTag({
        property: 'og:image',
        content: config.image
      });
    }

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: config.title
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: config.description
    });

    if (config.image) {
      this.meta.updateTag({
        name: 'twitter:image',
        content: config.image
      });
    }
  }

  setCanonical(url: string): void {

    let link: HTMLLinkElement | null =
      document.querySelector("link[rel='canonical']");

    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }
}
