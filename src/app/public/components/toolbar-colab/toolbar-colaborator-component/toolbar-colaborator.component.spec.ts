import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarColaboratorComponent } from './toolbar-colaborator.component';

describe('ToolbarColaboratorComponent', () => {
  let component: ToolbarColaboratorComponent;
  let fixture: ComponentFixture<ToolbarColaboratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolbarColaboratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolbarColaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
