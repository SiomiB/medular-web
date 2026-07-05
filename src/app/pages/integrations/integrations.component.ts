import { Component } from '@angular/core';
import { SeoService } from '../../core/seo/seo.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-integrations',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './integrations.component.html',
  styleUrl: './integrations.component.scss'
})
export class IntegrationsComponent {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Integraciones · MEDULAR — 16+ checadores y 18+ nóminas conectadas',
      description: 'Directorio completo de checadores biométricos y software de nómina compatibles con MEDULAR. ZKTeco, Suprema, Hikvision, SAP, CONTPAQi, Aspel NOI, Workday y más.',
      url: 'https://medular.com.mx/integraciones'
    });

    this.seo.setCanonical('https://medular.com.mx/integraciones');
  }
}
