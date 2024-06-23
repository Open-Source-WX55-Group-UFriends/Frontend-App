import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ProfileService} from "../../../model/profile.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, switchMap} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})

export class CreateProfileComponent {
  isProfileCreated = false;

  private baseURL = environment.serverBasePath;
  profile = {
    firstName: '',
    lastName: '',
    email: '',
    direction: '',
    documentNumber: '',
    documentType: ''
  };

  constructor(private http: HttpClient, private authService: AuthenticationService, private router: Router) { }

  addProfile(profileRequest: any): Observable<any> {
    return this.authService.getToken().pipe(
      switchMap(token => {
        console.log('Token de autenticación:', token);

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          })
        };

        return this.http.post<any>(`${this.baseURL}/profiles`, profileRequest, httpOptions);
      }),
      catchError(error => {
        console.error('Error al crear el perfil:', error);
        throw error;
      })
    );
  }

  save() {
    console.error('El perfil no existe, creando uno nuevo:');
    this.addProfile(this.profile).subscribe(createdProfile => {
      console.log('Perfil creado con éxito:', createdProfile);
      this.router.navigate(['/']);
      this.isProfileCreated = false;
    }, error => {
      console.error('Ocurrió un error al crear el perfil:', error);
      this.router.navigate(['/']);
    });
  }








  /*
  profile = {
    id: '',
    firstName: 'Mathias',
    lastName: 'Aguilar',
    direction: 'Los Olivos, Villa sol',
    phone: '98758748',
    gender: '',
    dobDay: '16',
    dobMonth: '1',
    dobYear: '2005',
    documentNumber: '78985898',
    documentType: 'DNI',
    role: '',
  };

  isProfileCreated = false;

  constructor(private router: Router, private profileService: ProfileService, private http: HttpClient) { }

  showProfileCreated() {
    this.isProfileCreated = true;
  }

  save() {
    this.profileService.addProfile(this.profile).subscribe(createdProfile => {
      this.profile = createdProfile;

      const iframe = document.getElementById('myIframe') as HTMLIFrameElement;
      const h1 = document.querySelector('.form-container h1') as HTMLHeadingElement;

      iframe.style.display = 'block';
      h1.style.display = 'block';

      setTimeout(() => {
        iframe.style.display = 'none';
        h1.style.display = 'none';

        if (this.profile.role === 'farmer') {
          this.router.navigate(['/create/subscriptions/card']);
        } else {
          this.router.navigate(['/role-profile', this.profile.id]);
        }

        this.profile = {
          id: '',
          firstName: '',
          lastName: '',
          direction: '',
          phone: '',
          gender: '',
          dobDay: '',
          dobMonth: '',
          dobYear: '',
          documentNumber: '',
          documentType: '',
          role: '',
        };
      }, 1500);
    });
  }

   */
}

