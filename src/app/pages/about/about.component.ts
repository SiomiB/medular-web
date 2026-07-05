import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Nosotros · MEDULAR — Construimos infraestructura de cumplimiento laboral',
      description:
        'MEDULAR es la plataforma de Workforce Data Fabric construida por ingenieros senior con experiencia operativa en arquitecturas enterprise mexicanas. Conoce nuestros principios y cómo trabajamos.',
      url: 'https://medular.com.mx/nosotros'
    });

    this.seo.setCanonical('https://medular.com.mx/nosotros');
  }
}
