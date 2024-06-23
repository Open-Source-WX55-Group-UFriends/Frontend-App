import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../../../register/model/profile.service';
import {AuthenticationService} from "../../../../register/services/authentication.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, of, switchMap} from "rxjs";
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
  isSignedIn = false;
  currentRole: string = "";
  @Input() profile!: any;

  constructor(
    private http: HttpClient,
    private profileService: ProfileService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('userRole');

    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });

      this.http.get<any>(`${environment.serverBasePath}/users/${this.authenticationService.getIdSignIn()}`, { headers }).pipe(
        catchError(error => {
          console.error('Error fetching profile:', error);
          return of(null);
        })
      ).subscribe(user => {
        if (user && user.roles && user.roles.length > 0) {
          this.currentRole = user.roles[0];
          console.log('Profile role:', this.currentRole);
        } else {
          console.error('Profile does not have any roles');
        }
      });
    }

    if (role) {
      this.currentRole = role; // Asigna el rol del localStorage al currentRole
    }

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
