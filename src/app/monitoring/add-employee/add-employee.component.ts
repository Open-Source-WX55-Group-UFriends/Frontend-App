import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../../register/services/authentication.service";
import { EmployeeService } from "../service/employee.service";

interface Employee {
  name: string;
  username: string; // Cambiado de email a username
  phone: string;
  password: string;
  position: string;
}

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee = {
    name: '',
    username: '', // Cambiado de email a username
    phone: '',
    password: '',
    position: ''
  };
  isSignedIn: boolean = false;

  constructor(
    private employeeService: EmployeeService,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.isSignedIn.subscribe(
      signedIn => {
        this.isSignedIn = signedIn;
        if (!signedIn) {
          this.router.navigate(['/sign-in']);
        }
      }
    );
  }

  saveEmployee() {
    if (!this.isSignedIn) {
      console.error('User is not signed in');
      this.router.navigate(['/sign-in']);
      return;
    }

    this.employeeService.createEmployee(this.employee).subscribe(
      (response: any) => {
        console.log('Employee created successfully', response);
        this.router.navigate(['/employee']);
      },
      (error: any) => {
        console.error('Error creating employee', error);
        if (error.status === 401) {
          this.authService.signOut();
        }
      }
    );
  }
}
