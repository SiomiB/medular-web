import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMarqueeComponent } from './client-marquee.component';

describe('ClientMarqueeComponent', () => {
  let component: ClientMarqueeComponent;
  let fixture: ComponentFixture<ClientMarqueeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientMarqueeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
