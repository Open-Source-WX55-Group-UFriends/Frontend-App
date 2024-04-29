import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionShedComponent } from './description-shed.component';

describe('DescriptionShedComponent', () => {
  let component: DescriptionShedComponent;
  let fixture: ComponentFixture<DescriptionShedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescriptionShedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescriptionShedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
