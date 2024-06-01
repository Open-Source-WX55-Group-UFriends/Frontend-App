import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultivationRecordComponent } from './cultivation-record.component';

describe('CultivationRecordComponent', () => {
  let component: CultivationRecordComponent;
  let fixture: ComponentFixture<CultivationRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CultivationRecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CultivationRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
