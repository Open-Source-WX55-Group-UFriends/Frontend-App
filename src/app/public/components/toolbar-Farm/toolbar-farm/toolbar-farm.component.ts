import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar-farm',
  templateUrl: './toolbar-farm.component.html',
  styleUrl: './toolbar-farm.component.css'
})
export class ToolbarFarmComponent {
  scrollToTop() {
    window.scrollTo(0, 0);
  }
  menuActive = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
