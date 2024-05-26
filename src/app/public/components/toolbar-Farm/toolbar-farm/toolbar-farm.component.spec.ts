import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarFarmComponent } from './toolbar-farm.component';

describe('ToolbarFarmComponent', () => {
  let component: ToolbarFarmComponent;
  let fixture: ComponentFixture<ToolbarFarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolbarFarmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolbarFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
