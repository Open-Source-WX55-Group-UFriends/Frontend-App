import { Component } from '@angular/core';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.css'
})
export class LoginCardComponent {
  isChecked = false;

  onCheckboxChange(event: any) {
    this.isChecked = event.checked;
  }
}
