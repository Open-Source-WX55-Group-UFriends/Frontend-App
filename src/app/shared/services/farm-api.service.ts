import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmApiService {
  private apiUrl = 'https://my-json-server.typicode.com/Aplicaciones-Web-WX55-Group-S-del-Softw/api-farms/farms'; // Reemplaza esto con la URL de tu API

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`https://my-json-server.typicode.com/Aplicaciones-Web-WX55-Group-S-del-Softw/api-farms/farms`); // Reemplaza 'endpoint' con el endpoint correcto de tu API
  }

  getById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/farm-${id}`); // Reemplaza 'endpoint' con el endpoint correcto de tu API
  }
}
