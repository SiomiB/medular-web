import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulatoryTimelineComponent } from './regulatory-timeline.component';

describe('RegulatoryTimelineComponent', () => {
  let component: RegulatoryTimelineComponent;
  let fixture: ComponentFixture<RegulatoryTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegulatoryTimelineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegulatoryTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
