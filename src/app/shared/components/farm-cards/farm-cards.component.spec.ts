import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmCardsComponent } from './farm-cards.component';

describe('FarmCardsComponent', () => {
  let component: FarmCardsComponent;
  let fixture: ComponentFixture<FarmCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
