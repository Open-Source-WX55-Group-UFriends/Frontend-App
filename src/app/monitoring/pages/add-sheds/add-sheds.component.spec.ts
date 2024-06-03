import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShedsComponent } from './add-sheds.component';

describe('AddShedsComponent', () => {
  let component: AddShedsComponent;
  let fixture: ComponentFixture<AddShedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddShedsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddShedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
