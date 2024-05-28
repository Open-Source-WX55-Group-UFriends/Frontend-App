import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent {
  isActive = false;
  isForgotPasswordActive = false;

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
}
