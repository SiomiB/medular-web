import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FaqItem {
  question: string;
  answer: string;
  link?: {
    label: string;
    route: string;
    fragment?: string;
  };
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  readonly faqs: FaqItem[] = [
    {
      question: '¿En qué se diferencian de Worky, Buk o Factorial?',
      answer:
        'Worky/Buk/Factorial son HRIS suite completos orientados a mid-market (50-500 empleados). MEDULAR es una capa horizontal de conciliación entre el biométrico existente y la nómina enterprise. No competimos, atacamos un dolor distinto: la complejidad de un stack heterogéneo en empresas 500+ con SAP/Workday/Oracle.'
    },
    {
      question: '¿Cuánto cuesta? ¿Por empleado?',
      answer:
        'Pricing es modular: (A) setup técnico ($25-60k USD según complejidad), (B) licencia anual escalada, (C) evidence vault opcional por años de retención. Para 2,000 empleados con 3-4 integraciones complejas.',
    },
    {
      question: '¿Cuánto tarda el onboarding?',
      answer:
        'Piloto pagado de 60-90 días. Semana 1-2: descubrimiento técnico y mapeo de stack. Semana 3-6: integraciones tier 1 + identidad. Semana 7-10: conciliación + reportes. Semana 11-12: certificación NOM-151 + handoff a producción. Si tu stack es 100% tier 1, puede ser 45 días.'
    },
    {
      question: '¿Funciona con teletrabajo (NOM-037)?',
      answer:
        'Sí. Para personal remoto usamos marcaje vía app móvil con geofencing y selfie con liveness detection. La política de desconexión digital se configura por tenant. Listado de teletrabajadores bajo NOM-037 se genera automático.'
    },
    {
      question: '¿Qué pasa si la STPS cambia el formato del registro?',
      answer:
        'El sistema es schema-agnostic por diseño. El formato STPS oficial se versiona como un esquema más en nuestro catálogo. Cuando cambien lineamientos, actualizamos el esquema sin redeploy ni interrumpir operación. Los registros pasados se reproyectan al nuevo formato.'
    },
    {
      question: '¿Necesito reemplazar mis biométricos actuales?',
      answer:
        'No. Esa es la premisa central. Si tienes ZKTeco en una planta, Suprema en otra, Hikvision en oficinas y Excel en CEDIs, todo coexiste. Vivimos encima del stack actual.',
      link: {
        label: 'Ver directorio completo',
        route: '/integraciones'
      }
    },
    {
      question: '¿Qué incluye MEDULAR AI?',
      answer:
        'Es un agente conversacional incluido en el plan licenciado. Acceso ilimitado para usuarios de tu tenant. Cada consulta queda registrada y conservada. Casos de uso: análisis ad-hoc, generación de reportes, alertas proactivas, asistencia legal contextualizada con artículos LFT. No es un wrapper de ChatGPT — está grounded en tu data y solo responde con fuentes específicas.'
    },
    {
      question: '¿Dónde se aloja la data? ¿Cumple LFPDPPP?',
      answer:
        'Infraestructura AWS, regiones us-east-1 + mx-central-1. Datos personales no salen de territorio mexicano si el tenant lo solicita (configuración opcional). Cumplimiento LFPDPPP completo con aviso de privacidad, DPO designado, y procedimiento de derechos ARCO operativo.'
    }
  ];

}
