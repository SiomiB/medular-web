import { Component, OnInit } from '@angular/core';

import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { FaqComponent } from '../../shared/faq/faq.component';
import { ClientMarqueeComponent } from '../../shared/client-marquee/client-marquee.component';
import { PlatformCockpitComponent } from '../../shared/platform-cockpit/platform-cockpit.component';
import { PlatformScaleComponent } from '../../shared/platform-scale/platform-scale.component';
import { CertificationsComponent } from '../../shared/certifications/certifications.component';
import { AiAgentComponent } from '../../shared/ai-agent/ai-agent.component';
import { RegulatoryProblemComponent } from '../../shared/regulatory-problem/regulatory-problem.component';
import { MechanicsComponent } from '../../shared/mechanics/mechanics.component';
import { TargetIndustriesComponent } from '../../shared/target-industries/target-industries.component';
import { NonTestimonialsComponent } from '../../shared/non-testimonials/non-testimonials.component';
import { RegulatoryTimelineComponent } from '../../shared/regulatory-timeline/regulatory-timeline.component';
import { FinalCtaComponent } from '../../shared/final-cta/final-cta.component';
import { WhatWeWontDoComponent } from '../../shared/what-we-wont-do/what-we-wont-do.component';
import { SeoService } from '../../core/seo/seo.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PageHeroComponent,
    ClientMarqueeComponent,
    PlatformCockpitComponent,
    CertificationsComponent,
    AiAgentComponent,
    RegulatoryProblemComponent,
    PlatformScaleComponent,
    MechanicsComponent,
    TargetIndustriesComponent,
    NonTestimonialsComponent,
    RegulatoryTimelineComponent,
    FinalCtaComponent,
    WhatWeWontDoComponent,
    FaqComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent implements OnInit {

  constructor(private seo: SeoService) {}

  ngOnInit(): void {

    this.seo.update({
      title: 'MEDULAR | Cumplimiento laboral y conciliación de asistencia para LFT 2027',
      description: 'Concilia biométricos, checadores y nómina para generar evidencia certificada de cumplimiento laboral ante STPS.',
      url: 'https://medular.com.mx',
      image: 'https://medular.com.mx/images/og-medular.jpg'
    });

    this.seo.setCanonical('https://medular.com.mx');
  }
}
