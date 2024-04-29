import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmCards } from './farm-cards.component';

describe('FarmCardsComponent', () => {
  let component: FarmCards;
  let fixture: ComponentFixture<FarmCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
