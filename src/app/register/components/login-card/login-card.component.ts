
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {ProfileService} from "../../model/profile.service";

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent {
  isActive = false;
  isForgotPasswordActive = false;
  constructor(private router: Router, private profileService: ProfileService) {}

  toggleActive(): void {
    this.isActive = !this.isActive;

  }

  toggleForgotPassword(): void {
    this.isActive = false;
    this.isForgotPasswordActive = !this.isForgotPasswordActive;
  }


  backToSignIn(): void {
    this.isForgotPasswordActive = false;
    this.isActive = false;
  }

  register={
    email:'',
    password:''
  };

  save() {

    this.profileService.addRegister(this.register);
    this.router.navigate(['/create-profile']);
    this.register = {
      email: '',
      password: ''
    };

  }

}
