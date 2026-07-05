import { Component } from '@angular/core';

interface CertificationItem {
  name: string;
  description: string;
  date: string;
  status: 'vigente' | 'roadmap';
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {
  readonly certifications: CertificationItem[] = [
    {
      name: 'AWS Premier Partner',
      description: 'Infraestructura sobre AWS · Multi-AZ · us-east-1 + mx-central-1',
      date: 'vigente desde 2024',
      status: 'vigente'
    },
    {
      name: 'LFPDPPP',
      description: 'Cumplimiento Ley Federal de Protección de Datos · INAI',
      date: 'aviso de privacidad activo',
      status: 'vigente'
    },
    {
      name: 'NOM-151-SCFI',
      description: 'Constancia electrónica de conservación · timestamping certificado',
      date: 'vigente · auditoría anual',
      status: 'vigente'
    },
    {
      name: 'SOC 2 Type I',
      description: 'Controles de seguridad, disponibilidad y confidencialidad',
      date: 'Q4 2026 · en proceso',
      status: 'roadmap'
    },
    {
      name: 'SOC 2 Type II',
      description: 'Validación de controles en período observado',
      date: '2027 · planificado',
      status: 'roadmap'
    },
    {
      name: 'ISO 27001',
      description: 'Sistema de gestión de seguridad de la información',
      date: '2027 · planificado',
      status: 'roadmap'
    }
  ];
}
