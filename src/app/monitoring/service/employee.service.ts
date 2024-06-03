import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: any[] = [];
  private employeesSubject = new BehaviorSubject<any[]>([]);

  constructor() {}

  addEmployee(employee: any) {
    console.log(employee);

    const id= `${this.employees.length + 9};`
    this.employees.push({ ...employee, id });
    this.employeesSubject.next(this.employees);
  }

  getEmployees() {
    return this.employeesSubject.asObservable();
  }
}
