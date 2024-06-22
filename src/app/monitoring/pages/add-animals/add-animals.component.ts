import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "../../../register/services/authentication.service";
import {Router} from "@angular/router";
import {catchError, Observable, switchMap} from "rxjs";
import {ShedService} from "../../service/shed.service";

@Component({
  selector: 'app-add-animals',
  templateUrl: './add-animals.component.html',
  styleUrl: './add-animals.component.css'
})
export class AddAnimalsComponent implements OnInit{
  isAnimalCreated = false;
  sheds: any[] = [];

  private baseURL = environment.serverBasePath;
  animal = {
    age: '',
    shed: '',
    healthCondition: '',
    location: ''
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

  addAnimal(animalRequest: any): Observable<any> {
    return this.authService.getToken().pipe(
      switchMap(token => {
        console.log('Token de autenticación:', token);

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          })
        };

        return this.http.post<any>(`${this.baseURL}/animal`, animalRequest, httpOptions);
      }),
      catchError(error => {
        console.error('Error al crear el animal:', error);
        throw error;
      })
    );
  }

  saveAnimal() {
    console.error('El animal no existe, creando uno nuevo:');
    this.addAnimal(this.animal).subscribe(createdAnimal => {
      console.log('Animal creado con éxito:', createdAnimal);
      this.router.navigate(['/']);
      this.isAnimalCreated = false;
    }, error => {
      console.error('Ocurrió un error al crear el animal:', error);
      this.router.navigate(['/']);

    });
  }

}
