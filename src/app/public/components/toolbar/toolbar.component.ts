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


}
