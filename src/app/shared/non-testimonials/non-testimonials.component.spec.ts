import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonTestimonialsComponent } from './non-testimonials.component';

describe('NonTestimonialsComponent', () => {
  let component: NonTestimonialsComponent;
  let fixture: ComponentFixture<NonTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonTestimonialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
