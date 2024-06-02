import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEmployeesPageComponent } from './register-employees-page.component';

describe('RegisterEmployeesPageComponent', () => {
  let component: RegisterEmployeesPageComponent;
  let fixture: ComponentFixture<RegisterEmployeesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterEmployeesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterEmployeesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
