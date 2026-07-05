import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeWontDoComponent } from './what-we-wont-do.component';

describe('WhatWeWontDoComponent', () => {
  let component: WhatWeWontDoComponent;
  let fixture: ComponentFixture<WhatWeWontDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatWeWontDoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatWeWontDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
