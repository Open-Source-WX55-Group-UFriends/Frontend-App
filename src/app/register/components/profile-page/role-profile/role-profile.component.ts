import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute
import {ProfileService} from "../../../model/profile.service";
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {of, switchMap} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-role-profile',
  templateUrl: './role-profile.component.html',
  styleUrls: ['./role-profile.component.css'] // Corrige 'styleUrl' a 'styleUrls'
})
export class RoleProfileComponent implements OnInit {
  currentProfile: any;
  register : any;



  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private authenticationService: AuthenticationService) { }
  ngOnInit() {
    this.authenticationService.getToken().pipe(
      switchMap(token => {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        });

        return this.http.get<any>(`${environment.serverBasePath}/profiles/me`, { headers });
      })
    ).subscribe(profile => {
      if (profile) {
        console.log('Profile data:', profile); // Aquí se imprime toda la data del perfil
      } else {
        console.error('No profile data received');
      }
    });




    const role = this.route.snapshot.paramMap.get('currentRole'); // Obtiene el rol de los parámetros de la ruta
    if (role) {
      // Aquí se llama a la función getRoleValue con el rol del perfil
      const roleValue = this.getRoleValue(role);
      console.log('Role value:', roleValue); // Aquí se imprime el valor del rol
    } else {
      console.error('No role was provided');
    }

    console.log('app-toolbar-farm initialized')



  }

// Esta función toma un rol y devuelve un número correspondiente
  getRoleValue(role: string): number {
    switch (role) {
      case 'ROLE_OWNER':
        return 0;
      case 'ROLE_FARMER':
        return 1;
      case 'ROLE_FARMWORKER':
        return 2;
      default:
        console.error('Invalid role');
        return -1;
    }
  }

  convertCamelCaseToSpace(role: string): string {
    return role.replace(/([a-z])([A-Z])/g, '$1 $2');
  }
}
