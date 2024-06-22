import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../../register/services/authentication.service";
import { EmployeeService } from "../service/employee.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, switchMap} from "rxjs";
import {environment} from "../../../environments/environment";

/*interface Employee {
  name: string;
  username: string;
  phone: string;
  password: string;
  position: string;
}*/

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent /*implements OnInit*/ {
  isEmployeeCreated = false;

  private baseURL = environment.serverBasePath;
  employee = {
    name: '',
    username: '',
    phone: '',
    password: '',
    position: ''
  };
  //isSignedIn: boolean = false;

  constructor(
    private http: HttpClient,
    private employeeService: EmployeeService,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  addEmployee(employeeRequest : any): Observable<any>
  {
    return this.authService.getToken().pipe(
      switchMap(token => {
        console.log('Token de autenticación:', token);

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          })
        };

        return this.http.post<any>(`${this.baseURL}/employees`, employeeRequest, httpOptions);
      }),
      catchError(error => {
        console.error('Error al crear el empleado:', error);
        throw error;
      })
    );
  }

  saveEmployee() {
    console.error('El empleado no existe, creando uno nuevo:');
    this.addEmployee(this.employee).subscribe(createdEmployee => {
      console.log('Empleado creado con éxito:', createdEmployee);
      this.router.navigate(['/']);
      this.isEmployeeCreated = false;
    }, error => {
      console.error('Ocurrió un error al crear el perfil:', error);
      this.router.navigate(['/']);
    });
  }
}
