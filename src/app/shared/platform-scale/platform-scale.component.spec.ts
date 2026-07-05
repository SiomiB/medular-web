import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformScaleComponent } from './platform-scale.component';

describe('PlatformScaleComponent', () => {
  let component: PlatformScaleComponent;
  let fixture: ComponentFixture<PlatformScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformScaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlatformScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
