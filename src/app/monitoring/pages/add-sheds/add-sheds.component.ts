import { Component } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "../../../register/services/authentication.service";
import {Router} from "@angular/router";
import {catchError, Observable, switchMap} from "rxjs";

@Component({
  selector: 'app-add-sheds',
  templateUrl: './add-sheds.component.html',
  styleUrl: './add-sheds.component.css'
})
export class AddShedsComponent {
  isShedCreated = false;

  private baseURL = environment.serverBasePath;
  shed = {
    shedName: '',
    typeShed: '',
    specie: ''
  };

  constructor(private http: HttpClient,
              private authService: AuthenticationService,
              private router: Router) {  }

  addShed(shedRequest: any): Observable<any> {
    return this.authService.getToken().pipe(
      switchMap(token => {
        console.log('Token de autenticación:', token);

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          })
        };

        return this.http.post<any>(`${this.baseURL}/shed`, shedRequest, httpOptions);
      }),
      catchError(error => {
        console.error('Error al crear el galpon:', error);
        throw error;
      })
    );
  }

  saveShed() {
    console.error('El galpon no existe, creando uno nuevo:');
    this.addShed(this.shed).subscribe(createdShed => {
      console.log('galpon creado con éxito:', createdShed);
      this.router.navigate(['/monitoring/list-sheds']);
      this.isShedCreated = false;
    }, error => {
      console.error('Ocurrió un error al crear el galpon:', error);
      this.router.navigate(['/monitoring/list-sheds']);
    });
  }

}
