import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar-colaborator-component',
  templateUrl: './toolbar-colaborator.component.html',
  styleUrl: './toolbar-colaborator.component.css'
})
export class ToolbarColaboratorComponent {
  scrollToTop() {
    window.scrollTo(0, 0);
  }
  menuActive = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
