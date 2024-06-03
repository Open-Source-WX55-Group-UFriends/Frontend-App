import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalInventoryComponent } from './animal-inventory.component';

describe('AnimalInventoryComponent', () => {
  let component: AnimalInventoryComponent;
  let fixture: ComponentFixture<AnimalInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalInventoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimalInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
