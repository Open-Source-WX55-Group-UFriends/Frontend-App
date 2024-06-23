import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, switchMap} from "rxjs";
import {map} from "rxjs/operators";
import {AuthenticationService} from "../../register/services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class  EmergencyService {
  private apiUrl = `${environment.serverBasePath}/messages`;
  private employeesUrl = `${environment.serverBasePath}`; // URL para obtener empleados
  private userMessagesUrl = `${environment.serverBasePath}/messages/user`;
  private usersUrl = `${environment.serverBasePath}/messages/user`;

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

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
  sendEmergency(data: any): Observable<any> {
    return this.getAuthHeaders().pipe(
      switchMap(headers => {
        console.log('Enviando datos al servidor:', data);  // Log de los datos que se están enviando
        return this.http.post<any>(this.apiUrl, data, { headers }).pipe(
          map(response => {
            console.log('Respuesta del servidor:', data);
            return response;
          })
        );
      })
    );
  }

  getEmployees() : Observable<any[]> {
    return this.getAuthHeaders().pipe(
      switchMap(headers => {
        console.log('Enviando solicitud con encabezados:', headers);
        return this.http.get<any[]>(`${this.employeesUrl}/employees/all`, { headers }).pipe(
          map((employees: any[]) => {
            console.log('Datos obtenidos de empleados:', employees); // Imprime los datos que se obtienen
            return employees.map(employee => ({
              name: employee.name,
              id: employee.Id // Usamos `Id` aquí
            }));
          }),
          catchError(error => {
            console.error('Error fetching employees:', error);
            return of([]);
          })
        );
      })
    );
  }

  getUsers(): Observable<any[]> {
    return this.getAuthHeaders().pipe(
      switchMap(headers => {
        console.log('Enviando solicitud con encabezados:', headers);
        return this.http.get<any[]>(this.usersUrl, { headers }).pipe(
          map((users: any[]) => {
            console.log('Datos obtenidos de usuarios:', users);
            return users.map(user => ({
              name: user.name,
              id: user.Id,
              username: user.username // Incluimos el username aquí
            }));
          }),
          catchError(error => {
            console.error('Error fetching users:', error);
            return of([]);
          })
        );
      })
    );
  }

  getUserMessages(): Observable<any[]> {
    return this.getAuthHeaders().pipe(
      switchMap(headers =>
        this.http.get<any[]>(this.userMessagesUrl, { headers }).pipe(
          map(response => {
            console.log('Mensajes obtenidos:', response);
            return response;
          })
        )
      )
    );
  }







}
