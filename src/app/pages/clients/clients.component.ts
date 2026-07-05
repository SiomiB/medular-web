import { Component } from '@angular/core';
import { SeoService } from '../../core/seo/seo.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Clientes · MEDULAR — Casos extendidos por sector',
      description:
        'Casos de uso extendidos por sector. Manufactura, retail, logística, aerolíneas, hotelería y salud. Clientes anonimizados con métricas reales de operación.',
      url: 'https://medular.com.mx/clientes'
    });

    this.seo.setCanonical('https://medular.com.mx/clientes');
  }
}
