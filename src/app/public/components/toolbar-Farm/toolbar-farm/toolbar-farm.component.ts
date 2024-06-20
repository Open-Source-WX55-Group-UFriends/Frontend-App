import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../../../register/model/profile.service';
import {AuthenticationService} from "../../../../register/services/authentication.service";
import {HttpClient} from "@angular/common/http";

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
  currentId: number = 0;


  constructor(private http: HttpClient, private profileService: ProfileService, private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.currentUsername.subscribe(username => {
        if (username) {
          console.log(username); // Aquí tienes el nombre de usuario autenticado
          this.currentUser = username;
        } else {
          this.currentUser = '';
        }
      });


    this.authenticationService.currentUserId.subscribe(userId => {
      if (userId) {
        console.log(userId); // Aquí tienes el ID del usuario autenticado
        this.currentId = userId;
      } else {
        this.currentId = 0;
      }
    });

/*
    this.profileService.getProfiles().subscribe(profiles => {
      this.currentProfile = profiles[profiles.length - 1];
      // Una vez que tienes el perfil, obtén el rol del usuario
      this.getRole(this.currentProfile.id).subscribe(role => {
        this.currentProfile.role = role;
      });
    });
    */

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
