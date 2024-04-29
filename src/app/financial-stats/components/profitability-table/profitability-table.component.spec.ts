import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitabilityTableComponent } from './profitability-table.component';

describe('ProfitabilityTableComponent', () => {
  let component: ProfitabilityTableComponent;
  let fixture: ComponentFixture<ProfitabilityTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfitabilityTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfitabilityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
