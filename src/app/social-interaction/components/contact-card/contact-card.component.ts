import { Component, ElementRef, viewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {

  constructor(private elementRef: ElementRef, private router: Router) { }
  ngAfterViewInit() {
    const submitBtn = this.elementRef.nativeElement.querySelector('#submitBtn');
    submitBtn.addEventListener('click', this.onSubmit.bind(this));
  }

  onSubmit() {
    alert('Contacto enviado');
    this.router.navigate( ['/home']); // Cambia '/home' por la ruta de tu página de inicio

  }
}

