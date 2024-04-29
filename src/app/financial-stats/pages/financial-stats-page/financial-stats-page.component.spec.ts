import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialStatsPageComponent } from './financial-stats-page.component';

describe('FinancialStatsPageComponent', () => {
  let component: FinancialStatsPageComponent;
  let fixture: ComponentFixture<FinancialStatsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinancialStatsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinancialStatsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
