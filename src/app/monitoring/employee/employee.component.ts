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
    { id: '1', name: 'John Doe', email: 'john.doe@example.com', position: 'Farm Manager', phone: '123-456-7890' },
    { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com', position: 'Animal Nutritionist', phone: '234-567-8901' },
    { id: '3', name: 'Bob Johnson', email: 'bob.johnson@example.com', position: 'Veterinary Nurse', phone: '345-678-9012' },
    { id: '4', name: 'Alice Williams', email: 'alice.williams@example.com', position: 'Agricultural Engineer', phone: '456-789-0123' },
    { id: '5', name: 'Charlie Brown', email: 'charlie.brown@example.com', position: 'Field Worker', phone: '567-890-1234' },
    { id: '6', name: 'Emily Davis', email: 'emily.davis@example.com', position: 'Tractor Operator', phone: '678-901-2345' },
    { id: '7', name: 'Frank Miller', email: 'frank.miller@example.com', position: 'Harvest Supervisor', phone: '789-012-3456' },
    { id: '8', name: 'Grace Lee', email: 'grace.lee@example.com', position: 'Quality Assurance', phone: '890-123-4567' }
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
    this.previousEmployees = [...this.filteredEmployees]; // Agrega esta línea
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
    this.searchPerformed = false; // Agrega esta línea
  }
  goBack() {
    this.filteredEmployees = this.previousEmployees;
    this.searchPerformed = false;
  }
}
