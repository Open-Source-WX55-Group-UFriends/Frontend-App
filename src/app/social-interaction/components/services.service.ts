import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, switchMap} from "rxjs";
import {AuthenticationService} from "../../register/services/authentication.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private apiUrl = `${environment.serverBasePath}/socials`;

  constructor(private http: HttpClient, private authService: AuthenticationService) {}

  private getAuthHeaders(): Observable<HttpHeaders> {
    return this.authService.getToken().pipe(
      map(token => {
        return new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        });
      })
    );
  }

  postRating(data: any): Observable<any> {
    return this.getAuthHeaders().pipe(
      switchMap(headers => {
        return this.http.post<any>(`${this.apiUrl}`, data, { headers });
      })
    );
  }

  getRatings(farmNumber: number): Observable<any> {  // Cambiado a number
    return this.getAuthHeaders().pipe(
      switchMap(headers => {
        return this.http.get<any>(`${this.apiUrl}/all/farm/${farmNumber}`, { headers });
      })
    );
  }


}
