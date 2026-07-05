import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'producto',
    loadComponent: () =>
      import('./pages/product/product.component').then(m => m.ProductComponent)
  },
  {
    path: 'integraciones',
    loadComponent: () =>
      import('./pages/integrations/integrations.component').then(m => m.IntegrationsComponent)
  },
  {
    path: 'cumplimiento',
    loadComponent: () =>
      import('./pages/compliance/compliance.component').then(m => m.ComplianceComponent)
  },
  {
    path: 'clientes',
    loadComponent: () =>
      import('./pages/clients/clients.component').then(m => m.ClientsComponent)
  },
  {
    path: 'nosotros',
    loadComponent: () =>
      import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];