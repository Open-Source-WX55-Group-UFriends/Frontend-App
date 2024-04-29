import { Component } from '@angular/core';

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
}
