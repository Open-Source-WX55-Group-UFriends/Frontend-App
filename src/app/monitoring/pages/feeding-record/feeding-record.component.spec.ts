import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedingRecordComponent } from './feeding-record.component';

describe('FeedingRecordComponent', () => {
  let component: FeedingRecordComponent;
  let fixture: ComponentFixture<FeedingRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedingRecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedingRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
