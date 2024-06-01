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

  constructor(private router: Router, private profileService: ProfileService) {
  }

  save() {
    this.profileService.addProfile(this.profile);

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
        this.router.navigate(['/role-profile']);
      }

      this.profile = {
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
  }
}

