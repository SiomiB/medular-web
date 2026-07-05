import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformCockpitComponent } from './platform-cockpit.component';

describe('PlatformCockpitComponent', () => {
  let component: PlatformCockpitComponent;
  let fixture: ComponentFixture<PlatformCockpitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformCockpitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlatformCockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
