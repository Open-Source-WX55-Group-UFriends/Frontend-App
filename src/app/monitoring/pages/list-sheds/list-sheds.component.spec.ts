import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShedsComponent } from './list-sheds.component';

describe('ListShedsComponent', () => {
  let component: ListShedsComponent;
  let fixture: ComponentFixture<ListShedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListShedsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListShedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
