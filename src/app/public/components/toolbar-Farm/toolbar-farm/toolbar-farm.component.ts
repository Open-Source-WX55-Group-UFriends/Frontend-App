import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../../../register/model/profile.service';
import {AuthenticationService} from "../../../../register/services/authentication.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {of, switchMap} from "rxjs";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-toolbar-farm',
  templateUrl: './toolbar-farm.component.html',
  styleUrls: ['./toolbar-farm.component.css']
})
export class ToolbarFarmComponent implements OnInit {
  currentProfile: any;
  currentUser: any;

  menuActive = false;
  isSignedIn = false
  currentRole: string = "";


  constructor(private http: HttpClient, private profileService: ProfileService, private router: Router, private authenticationService: AuthenticationService) { }
  ngOnInit() {
    this.authenticationService.currentUserId.pipe(
      switchMap(userId => {
        if (userId) {
          return this.authenticationService.getToken();
        } else {
          console.error('No user ID was provided');
          return of(null);
        }
      }),
      switchMap(token => {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        });

        return this.http.get<any>(`${environment.serverBasePath}/users/${this.authenticationService.getIdSignIn()}`, { headers });
      })
    ).subscribe(user => {
      if (user && user.roles) {
        this.currentRole = user.roles[0];
        console.log('User role:', user.roles[0]); // Aquí se imprime el rol del usuario
      } else {
        console.error('User does not have any roles');
      }
    });

    this.authenticationService.isSignedIn.subscribe((isSignedIn) => {
      this.isSignedIn = isSignedIn;
    });
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  logout() {
    this.authenticationService.signOut();
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
      alert('You have logged out');
    });
  }
}
