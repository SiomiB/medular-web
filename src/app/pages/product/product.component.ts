import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo/seo.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export class ProductComponent implements OnInit {

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Producto · MEDULAR — Tour completo de la plataforma',
      description: 'Tour visual del producto MEDULAR. Dashboard, Conciliación, Evidence Vault, MEDULAR AI y reportes STPS. Arquitectura medallion + Apache Iceberg + AWS.',
      url: 'https://medular.com.mx/producto'
    });

    this.seo.setCanonical('https://medular.com.mx/producto');
  }
}
