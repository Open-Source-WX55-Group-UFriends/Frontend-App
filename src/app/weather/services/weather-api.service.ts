import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private apiUrl = 'https://my-json-server.typicode.com/Aplicaciones-Web-WX55-Group-S-del-Softw/weather/weathers'; // Reemplaza esto con la URL de tu API

  constructor(private http: HttpClient) { }

  getWeathers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
