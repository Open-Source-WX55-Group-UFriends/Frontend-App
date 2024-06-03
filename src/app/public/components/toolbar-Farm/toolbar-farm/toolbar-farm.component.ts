import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../../../register/model/profile.service';

@Component({
  selector: 'app-toolbar-farm',
  templateUrl: './toolbar-farm.component.html',
  styleUrls: ['./toolbar-farm.component.css']
})
export class ToolbarFarmComponent implements OnInit {
  currentProfile: any;
  menuActive = false;

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
    this.profileService.getProfiles().subscribe(profiles => {
      this.currentProfile = profiles[profiles.length - 1];
    });
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}
