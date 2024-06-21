import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any[] = [
    { id: '1', name: 'John Doe', email: 'john.doe@example.com', password: 'Farm Manager', phone: '123-456-7890', position:  'Farm Manager'},
    { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com', password: 'Animal Nutritionist', phone: '234-567-8901', position: 'Animal Nutritionist' },
    { id: '3', name: 'Bob Johnson', email: 'bob.johnson@example.com', password: 'Veterinary Nurse', phone: '345-678-9012' ,position: 'Animal Nutritionist'},
    { id: '4', name: 'Alice Williams', email: 'alice.williams@example.com', password: 'Agricultural Engineer', phone: '456-789-0123',position: 'Animal Nutritionist' },
    { id: '5', name: 'Charlie Brown', email: 'charlie.brown@example.com', password: 'Field Worker', phone: '567-890-1234',position: 'Animal Nutritionist' },
    { id: '6', name: 'Emily Davis', email: 'emily.davis@example.com', password: 'Tractor Operator', phone: '678-901-2345',position: 'Animal Nutritionist' },
    { id: '7', name: 'Frank Miller', email: 'frank.miller@example.com', password: 'Harvest Supervisor', phone: '789-012-3456',position: 'Animal Nutritionist' },
    { id: '8', name: 'Grace Lee', email: 'grace.lee@example.com', password: 'Quality Assurance', phone: '890-123-4567',position: 'Animal Nutritionist' }
  ];

  filteredEmployees: any[] = [...this.employees];
  searchTerm: string = '';
  isLoading = false;
  previousEmployees: any[] = [];
  searchPerformed = false;


  constructor(private employeeService: EmployeeService, private location: Location) { }
  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = [...this.employees, ...data];
      this.filteredEmployees = this.employees;
    });
  }

  searchEmployee() {
    this.previousEmployees = [...this.filteredEmployees];
    this.isLoading = true;
    this.searchPerformed = true;
    setTimeout(() => {
      if (this.searchTerm) {
        this.filteredEmployees = this.employees.filter(employee =>
          employee.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      } else {
        this.filteredEmployees = this.employees;
      }
      this.isLoading = false;
    }, 3000);
  }
  clearSearch() {
    this.searchTerm = '';
    this.searchPerformed = false;
  }
  goBack() {
    this.filteredEmployees = this.previousEmployees;
    this.searchPerformed = false;
  }
}
