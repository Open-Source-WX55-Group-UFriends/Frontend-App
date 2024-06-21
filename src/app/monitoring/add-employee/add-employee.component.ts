import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{EmployeeService} from "../service/employee.service";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employee = {
    id: '',
    name: '',
    email: '',
    password: '',
    phone: '',
    position: '',

  };

  constructor(private employeeService: EmployeeService, private router: Router) { }

  saveEmployee() {
    this.employeeService.addEmployee(this.employee);
    this.employee = {
      id: '',
      name: '',
      email: '',
      password: '',
      phone: '',
      position: '',

    };
    this.router.navigate(['/employee']);
  }
  goBack() {
    this.router.navigate(['/employee']);
  }
}
