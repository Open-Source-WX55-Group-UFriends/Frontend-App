import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthenticationService } from "../../register/services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = `${environment.serverBasePath}/employees`;

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) { }

  private getAuthHeaders(): Observable<HttpHeaders> {
    return this.authService.getToken().pipe(
      map(token => {
        console.log('Token de autenticación:', token);
        return new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        });
      })
    );
  }

  getAllEmployees(): Observable<any> {
    return this.getAuthHeaders().pipe(
      switchMap(headers =>
        this.http.get<any>(`${this.apiUrl}/all`, { headers }).pipe(
          map((employees: any[]) => employees.map(employee => ({
            Id: employee.Id,
            name: employee.name,
            username: employee.username,
            phone: employee.phone,
            position: employee.position
          })))
        )
      ),
      catchError(error => {
        console.error('Error fetching employees:', error);
        return of([]);
      })
    );
  }

  searchEmployees(term: string): Observable<any> {
    return this.getAuthHeaders().pipe(
      switchMap(headers =>
        this.http.get<any>(`${this.apiUrl}/search?term=${term}`, { headers }).pipe(
          map((employees: any[]) => employees.map(employee => ({
            Id: employee.Id,
            name: employee.name,
            username: employee.username, // Cambiado de email a username
            phone: employee.phone,
            position: employee.position
          })))
        )
      ),
      catchError(error => {
        console.error('Error searching employees:', error);
        return of([]);
      })
    );
  }

  createEmployee(employeeData: {
    name: string;
    username: string; // Cambiado de email a username
    phone: string;
    password: string;
    position: string;
  }): Observable<any> {
    return this.getAuthHeaders().pipe(
      switchMap(headers =>
        this.http.post<any>(this.apiUrl, employeeData, { headers }).pipe(
          catchError(error => {
            console.error('Error creating employee:', error);
            return of(null);
          })
        )
      )
    );
  }
}
