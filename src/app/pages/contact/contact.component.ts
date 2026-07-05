import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { SeoService } from '../../core/seo/seo.service';
import { environment } from '../../../environments/environment';

type MultiKey = 'bio' | 'pain';
type SubmitStatus = 'idle' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  private readonly seo = inject(SeoService);

  private readonly formspreeEndpoint = environment.contact.formspreeEndpoint;

  submitted = false;
  isSubmitting = false;
  submitStatus: SubmitStatus = 'idle';

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    role: ['', [Validators.required]],
    company: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    sector: [''],
    size: ['', [Validators.required]],
    sites: [''],
    bio: this.fb.control<string[]>([]),
    payroll: [''],
    pain: this.fb.control<string[]>([]),
    urgency: [''],
    notes: [''],
    consent: [true, [Validators.requiredTrue]]
  });

  ngOnInit(): void {
    this.seo.update({
      title: 'Contacto · MEDULAR — Agenda tu diagnóstico ejecutivo de 30 min',
      description:
        'Agenda un diagnóstico ejecutivo de 30 minutos. Sales con un mapa de cumplimiento Art. 132 XXXIV específico a tu operación.',
      url: 'https://medular.com.mx/contacto'
    });

    this.seo.setCanonical('https://medular.com.mx/contacto');
  }

  toggleMulti(controlName: MultiKey, value: string, checked: boolean): void {
    const current = this.contactForm.controls[controlName].value ?? [];

    const next = checked
      ? Array.from(new Set([...current, value]))
      : current.filter(item => item !== value);

    this.contactForm.controls[controlName].setValue(next);
    this.contactForm.controls[controlName].markAsDirty();
    this.submitStatus = 'idle';
  }

  isSelected(controlName: MultiKey, value: string): boolean {
    return (this.contactForm.controls[controlName].value ?? []).includes(value);
  }

  hasError(controlName: keyof typeof this.contactForm.controls): boolean {
    const control = this.contactForm.controls[controlName];
    return control.invalid && (control.touched || this.submitted);
  }

  onSubmit(): void {
    this.submitted = true;
    this.submitStatus = 'idle';

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const payload = this.buildPayload();

    this.http.post(this.formspreeEndpoint, payload, {
      headers: new HttpHeaders({
        Accept: 'application/json'
      })
    })
      .pipe(finalize(() => this.isSubmitting = false))
      .subscribe({
        next: () => {
          this.submitStatus = 'success';
          this.submitted = false;
          this.contactForm.reset({
            name: '',
            role: '',
            company: '',
            email: '',
            phone: '',
            sector: '',
            size: '',
            sites: '',
            bio: [],
            payroll: '',
            pain: [],
            urgency: '',
            notes: '',
            consent: true
          });
        },
        error: () => {
          this.submitStatus = 'error';
        }
      });
  }

  private buildPayload(): Record<string, unknown> {
    const value = this.contactForm.getRawValue();

    return {
      _subject: `Nuevo diagnóstico MEDULAR · ${value.company || 'Empresa sin nombre'}`,
      _replyto: value.email,

      resumen: `
    NUEVO DIAGNÓSTICO MEDULAR

    CONTACTO
    Nombre: ${value.name || '-'}
    Puesto: ${value.role || '-'}
    Empresa: ${value.company || '-'}
    Email: ${value.email || '-'}
    Teléfono: ${value.phone || '-'}

    OPERACIÓN
    Sector: ${value.sector || '-'}
    Empleados: ${value.size || '-'}
    Sitios: ${value.sites || '-'}

    STACK
    Checadores: ${(value.bio || []).join(', ') || '-'}
    Nómina: ${value.payroll || '-'}

    DOLORES
    ${(value.pain || []).map((p: string) => `- ${p}`).join('\n') || '-'}

    URGENCIA
    ${value.urgency || '-'}

    NOTAS
    ${value.notes || '-'}
      `.trim(),

      ...value
    };
  }
}
