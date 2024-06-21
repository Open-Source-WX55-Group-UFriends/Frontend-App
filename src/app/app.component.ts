import { Component } from '@angular/core';
import {AuthenticationService} from "./register/services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dashboard Analytics';
  options = [
    { path: '/financial-stats', title: 'Financial Stats'},
  ]
  constructor(private authService: AuthenticationService) {
    this.authService.loadSession();
  }
}
