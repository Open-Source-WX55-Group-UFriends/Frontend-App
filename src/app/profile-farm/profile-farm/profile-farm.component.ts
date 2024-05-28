import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-farm',
  templateUrl: './profile-farm.component.html',
  styleUrl: './profile-farm.component.css'
})
export class ProfileFarmComponent {
  selectedEmployee: string = ''; // Inicializa la propiedad con un valor predeterminado
  selectedDate: Date = new Date(); // Inicializa la propiedad con un valor predeterminado
  taskTime: number = 1; // Inicializa la propiedad con un valor predeterminado
  taskDescription: string = '';
  employees: string[] = ['Employee1', 'Employee2', 'Employee3']; // Define esta propiedad y asegúrate de tenerla inicializada con algún valor predeterminado si es necesario
  hours: number[] = Array.from({length: 24}, (_, i) => i + 1); // Define esta propiedad y asegúrate de tenerla inicializada con algún valor predeterminado si es necesario
}


