import { Component } from '@angular/core';
import { SeoService } from '../../core/seo/seo.service';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-compliance',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './compliance.component.html',
  styleUrl: './compliance.component.scss'
})
export class ComplianceComponent {
  private readonly uma = 117.31;

  employees = 2000;
  percent = 40;
  multiplier = 1500;

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Reforma LFT 2027 · MEDULAR — Art. 132 XXXIV, calculadora UMA y guía completa',
      description:
        'Análisis completo de la Reforma LFT 2027 en México. Art. 132 fracción XXXIV, calculadora de exposición Art. 994 IV Bis, guía descargable y recursos oficiales.',
      url: 'https://medular.com.mx/cumplimiento'
    });

    this.seo.setCanonical('https://medular.com.mx/cumplimiento');
  }

  setMultiplier(multiplier: number): void {
    this.multiplier = multiplier;
  }

  get affectedEmployees(): string {
    const affected = Math.round(this.safeEmployees * (this.safePercent / 100));
    return this.formatNumber(affected);
  }

  get perEmployeeFine(): string {
    return this.formatCurrency(this.multiplier * this.uma);
  }

  get umasUsed(): string {
    return this.formatNumber(this.multiplier);
  }

  get totalExposure(): string {
    const affected = Math.round(this.safeEmployees * (this.safePercent / 100));
    return this.formatCurrency(affected * this.multiplier * this.uma);
  }

  get figureSub(): string {
    if (this.multiplier === 250) {
      return 'MXN · si STPS aplica multa mínima por trabajador';
    }

    if (this.multiplier === 5000) {
      return 'MXN · si STPS aplica multa máxima por trabajador';
    }

    return 'MXN · si STPS aplica multa media por trabajador';
  }

  submitGuideForm(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    window.alert(
      '¡Listo! Te enviamos la Guía LFT 2027 a tu correo.\n\nRevisa tu bandeja en los próximos minutos.\n\n— equipo MEDULAR'
    );

    form.resetForm();
  }

  private get safeEmployees(): number {
    return Math.max(1, Number(this.employees) || 1);
  }

  private get safePercent(): number {
    return Math.min(100, Math.max(5, Number(this.percent) || 5));
  }

  private formatCurrency(value: number): string {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      maximumFractionDigits: 0
    }).format(value);
  }

  private formatNumber(value: number): string {
    return new Intl.NumberFormat('es-MX').format(value);
  }
}
