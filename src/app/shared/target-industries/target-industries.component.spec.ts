import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetIndustriesComponent } from './target-industries.component';

describe('TargetIndustriesComponent', () => {
  let component: TargetIndustriesComponent;
  let fixture: ComponentFixture<TargetIndustriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetIndustriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TargetIndustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
