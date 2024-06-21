import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute
import {ProfileService} from "../../../model/profile.service";
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, of, switchMap} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-role-profile',
  templateUrl: './role-profile.component.html',
  styleUrls: ['./role-profile.component.css'] // Corrige 'styleUrl' a 'styleUrls'
})


export class RoleProfileComponent implements OnInit {
  currentProfile: any;
  register: any;
  currentRole: string = "";
  roleValue: string | null =""

  constructor(private http: HttpClient, private profileService: ProfileService, private router: Router, private authenticationService: AuthenticationService) { }
  ngOnInit() {
    this.authenticationService.getToken().pipe(
      switchMap(token => {
        if (token) {
          const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          });
          console.log('Token:', token);
          console.log('ID:', this.authenticationService.getIdSignIn());

          return this.http.get<any>(`${environment.serverBasePath}/users/${this.authenticationService.getIdSignIn()}`, { headers });
        } else {
          console.error('No token was provided');
          return of(null);
        }
      }),
      catchError(error => {
        console.error('Error fetching profile:', error);
        return of(null);
      })
    ).subscribe(user => {
      if (user && user.roles && user.roles.length > 0) {
        this.currentRole = user.roles[0];
        this.roleValue=user.roles[0];
        console.log('Profile role:', this.currentRole); // Aquí se imprime el rol del perfil
      } else {
        console.error('Profile does not have any roles');
      }
    });

    this.authenticationService.getToken().pipe(
      switchMap(token => {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        });

        return this.http.get<any>(`${environment.serverBasePath}/profiles/me`, {headers});
      })
    ).subscribe(profile => {
      if (profile) {
        console.log('Profile data:', profile);
        this.currentProfile = profile; // Asignar el perfil a currentProfile
      } else {
        console.error('No profile data received');
      }
    });


  }
}
