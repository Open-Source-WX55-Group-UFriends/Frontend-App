import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "../../../register/services/authentication.service";
import {Router} from "@angular/router";
import {catchError, Observable, switchMap} from "rxjs";
import {ShedService} from "../../service/shed.service";

@Component({
  selector: 'app-cultivation-record',
  templateUrl: './cultivation-record.component.html',
  styleUrl: './cultivation-record.component.css'
})
export class CultivationRecordComponent implements OnInit{
  isCropCreated = false;
  sheds: any[] = [];

  private baseURL = environment.serverBasePath;
  crop = {
    seedtime: '',
    shed: '',
    typeCrop: ''
  };

  constructor(private http: HttpClient,
              private authService: AuthenticationService,
              private router: Router,
              private shedService: ShedService) {  }

  ngOnInit() {
    this.loadSheds();
  }

  loadSheds(): void {
    this.shedService.getAllSheds().subscribe(
      (data) => {
        console.log('Sheds obtenidos:', data);
        this.sheds = data;
      },
      (error) => {
        console.error('Error fetching collaborators', error);
      }
    );
  }

  addCrop(cropRequest: any): Observable<any> {
    return this.authService.getToken().pipe(
      switchMap(token => {
        console.log('Token de autenticación:', token);

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          })
        };

        return this.http.post<any>(`${this.baseURL}/crop`, cropRequest, httpOptions);
      }),
      catchError(error => {
        console.error('Error al crear el cultivo:', error);
        throw error;
      })
    );
  }



  saveCrop() {
    console.error('El cultivo no existe, creando uno nuevo:');
    this.addCrop(this.crop).subscribe(createdCrop => {
      console.log('cultivo creado con éxito:', createdCrop);
      this.router.navigate(['/']);
      this.isCropCreated = false;
    }, error => {
      console.error('Ocurrió un error al crear el cultivo:', error);
      console.log('Datos del animal que se intentaron enviar:', this.crop);
      this.router.navigate(['/']);
    });
  }

}
