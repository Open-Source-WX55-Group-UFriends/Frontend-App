import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../../register/services/authentication.service";
import { EmployeeService } from "../service/employee.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any[] = [];
  filteredEmployees: any[] = [];
  searchTerm: string = '';
  isLoading: boolean = true;
  searchPerformed: boolean = false;

  constructor(
    private employeeService: EmployeeService,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.isLoading = true;
    this.employeeService.getAllEmployees().subscribe(
      (data) => {
        this.employees = data;
        this.filteredEmployees = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching employees', error);
        this.isLoading = false;
        if (error.status === 401) {
          this.authService.signOut();
        }
      }
    );
  }

  searchEmployee() {
    if (this.searchTerm.trim() === '') {
      this.filteredEmployees = this.employees;
      this.searchPerformed = false;
    } else {
      this.isLoading = true;
      this.employeeService.searchEmployees(this.searchTerm).subscribe(
        (data) => {
          this.filteredEmployees = data;
          this.isLoading = false;
          this.searchPerformed = true;
        },
        (error) => {
          console.error('Error searching employees', error);
          this.isLoading = false;
          if (error.status === 401) {
            this.authService.signOut();
          }
        }
      );
    }
  }

  clearSearch() {
    this.searchTerm = '';
    this.filteredEmployees = this.employees;
    this.searchPerformed = false;
  }

  goBack() {
    this.clearSearch();
    this.loadEmployees();
  }
}
