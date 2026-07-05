import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulatoryProblemComponent } from './regulatory-problem.component';

describe('RegulatoryProblemComponent', () => {
  let component: RegulatoryProblemComponent;
  let fixture: ComponentFixture<RegulatoryProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegulatoryProblemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegulatoryProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
