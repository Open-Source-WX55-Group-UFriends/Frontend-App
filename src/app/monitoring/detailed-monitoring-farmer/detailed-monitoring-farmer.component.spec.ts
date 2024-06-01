import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedMonitoringFarmerComponent } from './detailed-monitoring-farmer.component';

describe('DetailedMonitoringFarmerComponent', () => {
  let component: DetailedMonitoringFarmerComponent;
  let fixture: ComponentFixture<DetailedMonitoringFarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailedMonitoringFarmerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedMonitoringFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
