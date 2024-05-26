import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class Toolbar {
  scrollToTop() {
    window.scrollTo(0, 0);
  }
  menuActive = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
  expandToolbar(event: Event) {
    event.stopPropagation(); // Detiene la propagación del evento de clic
    const header = document.getElementById('header');
    if (header) {
      header.classList.add('expanded');
      document.body.addEventListener('click', this.collapseToolbar.bind(this));
    }
  }
  collapseToolbar() {
    const header = document.getElementById('header');
    if (header) {
      header.classList.remove('expanded');
      document.body.removeEventListener('click', this.collapseToolbar.bind(this));
    }
    this.menuActive = false; // Cierra el menú
  }



}
