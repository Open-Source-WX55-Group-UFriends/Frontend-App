import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, Observable, of, switchMap} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";
import {AuthenticationService} from "../../../register/services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class FarmService {
  private apiUrl = `${environment.serverBasePath}/farm`;

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  getFarms(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get<any>(`${this.apiUrl}/all`, { headers }).pipe(
      map((farms: any[], index: number) => farms.map((farm, index) => ({
        id: `farm${index + 1}`, // Genera un ID único para cada granja
        name: farm.farmName,
        ubication: farm.location,
        type: farm.type,
        infrastructure: farm.infrastructure,
        services: farm.services,
        status: "ADSSD",
        certificates: farm.certificates,
        images: "ADSSD",
        price: farm.price,
        totalSurface: farm.Surface,
        product: farm.product,
        highlight1: farm.highlights
      })))
    );
  }
  getFarmById(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const farmNumber = id.replace('farm', '');

    return this.http.get<any>(`${this.apiUrl}/${farmNumber}`, { headers });
  }


  addFarm(farmData: {
    farmName: string;
    image: string;
    product: string;
    highlights: string;
    certificates: string;
    infrastructure: string;
    price: number;
    location: string;
    services: string;
    type: string;
    status: string;
    Surface: any;
  }): Observable<any> {
    farmData.status = "GOOD";
    farmData.image = "ADSSD";

    return this.authService.getToken().pipe(
      switchMap(token => {
        console.log('Token de autenticación:', token);

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          })
        };

        return this.http.post<any>(this.apiUrl, farmData, httpOptions).pipe(
          catchError(error => {
            console.error('Error adding farm:', error);
            return of(null);
          })
        );
      })
    );
  }

  updateFarm(farmData: any): Observable<any> {
    const farmNumber = farmData.id.toString().replace('farm', '');
    console.log('Updating farm with number:', farmNumber, 'and data:', farmData);

    return this.authService.getToken().pipe(
      switchMap(token => {
        console.log('Authentication token:', token);  // Log the token

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          })
        };

        return this.http.put<any>(`${this.apiUrl}/${farmNumber}`, farmData, httpOptions).pipe(
          catchError(error => {
            console.error('Error updating farm:', error);
            return of(null);
          })
        );
      })
    );
  }
}
