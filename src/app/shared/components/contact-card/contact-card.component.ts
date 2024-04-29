import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {

  constructor(private elementRef: ElementRef) { }
  ngAfterViewInit() {
    const submitBtn = this.elementRef.nativeElement.querySelector('#submitBtn');
    submitBtn.addEventListener('click', this.onSubmit.bind(this));
  }

  onSubmit() {
    alert('Contacto enviado');
    window.location.href = '/home'; // Cambia '/home' por la ruta de tu página de inicio

  }
}

