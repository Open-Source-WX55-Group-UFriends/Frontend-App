import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedMonitoringComponent } from './detailed-monitoring.component';

describe('DetailedMonitoringComponent', () => {
  let component: DetailedMonitoringComponent;
  let fixture: ComponentFixture<DetailedMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailedMonitoringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailedMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
