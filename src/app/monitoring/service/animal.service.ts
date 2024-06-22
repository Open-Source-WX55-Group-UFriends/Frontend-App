import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "../../register/services/authentication.service";
import {Observable, of} from "rxjs";
import {catchError, map, switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AnimalServiceService {
  private apiUrl = `${environment.serverBasePath}/animal`;

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

  getAllAnimals(): Observable<any> {
    return this.getAuthHeaders().pipe(
      switchMap(headers =>
        this.http.get<any>(`${this.apiUrl}/filter/all`, { headers }).pipe(
          map((animals: any[]) => animals.map(animals => ({
            id: animals.id,
            shed: animals.shed,
            age: animals.age,
            location: animals.location,
            healthCondition: animals.healthCondition
          })))
        )
      ),
      catchError(error => {
        console.error('Error fetching animals:', error);
        return of([]);
      })
    );
  }
}
