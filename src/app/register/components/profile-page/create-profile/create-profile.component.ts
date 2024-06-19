import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ProfileService} from "../../../model/profile.service";

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent {
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

  constructor(private router: Router, private profileService: ProfileService) {
  }

  isProfileCreated = false;

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
}

